import {
  type InitializeParams,
  type InitializeResult,
  type TextDocumentPositionParams,
  CompletionItem,
  CompletionItemKind,
  createConnection,
  DidChangeConfigurationNotification,
  ProposedFeatures,
  TextDocuments,
  TextDocumentSyncKind,
} from 'vscode-languageserver/node.js';

import { TextDocument } from 'vscode-languageserver-textdocument';

import { CharStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ng';
import { EsqlBaseLexer } from './grammar/generated/EsqlBaseLexer.js';
import { EsqlBaseParser } from './grammar/generated/EsqlBaseParser.js';
import * as c3 from 'antlr4-c3';

import { computeCaretTokenIndex, CaretPosition } from './caret.js';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
  const c = params.capabilities;
  connection.console.log(c.toString());

  // check client capabilities first
  hasConfigurationCapability = !!(c.workspace && !!c.workspace.configuration);
  hasWorkspaceFolderCapability = !!(c.workspace && !!c.workspace.workspaceFolders);
  hasDiagnosticRelatedInformationCapability = !!(
    c.textDocument &&
    c.textDocument.publishDiagnostics &&
    c.textDocument.publishDiagnostics.relatedInformation
  );

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true
      }
    }
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true
      }
    };
  }
  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
  }
});

interface Settings {
  maxNumberOfProblems: number;
}

const defaultSettings: Settings = { maxNumberOfProblems: 10 };
let globalSettings: Settings = defaultSettings;
const documentSettings: Map<string, Thenable<Settings>> = new Map();

connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    documentSettings.clear();
  } else {
    globalSettings = <Settings>((change.settings.languageServerExample || defaultSettings));
  }
});

function getDocumentSettings(resource: string): Thenable<Settings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: 'ESQL-lsp'
    });
    documentSettings.set(resource, result);
  }
  return result;
}

documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
});

// TODO: implement document validation on change
// documents.onDidChangeContent(change => {});

connection.onCompletion(
  (params: TextDocumentPositionParams): CompletionItem[] => {
    const textDocument = documents.get(params.textDocument.uri);
    // if there is no document, nothing to complete
    if (textDocument === undefined) {
      return [];
    }

    // NOTE: that kibana plugin uses plain antlr4
    // NOTE: Switched from antlr4 to https://github.com/mike-lischke/antlr4ng
    // to benefit from https://github.com/mike-lischke/antlr4-c3

    connection.console.log(`doc: ${textDocument.languageId}`);
    connection.console.log(`doc: ${JSON.stringify(params.position)}`);

    // get text and init the chart stream, input for lexer
    // If you pass a range to getText it should include the entire ES|QL
    // expression starting from the source commands. Otherwise completion
    // get confused because your query is not syntactically valid anymore.
    // TODO: not sure a range is needed here, I would suspect so but I've 
    // observed no differences in completions
    const input = textDocument.getText();
    connection.console.log(`text: ${input}`);
    const chars = new CharStream(input);

    let lexer = new EsqlBaseLexer(chars);
    let tokenStream = new CommonTokenStream(lexer);

    let parser = new EsqlBaseParser(tokenStream);
    // override error listener, we don't want the parser to really fail
    // EsqlBaseParser is a simulator, should not hard fail anyway
    // TODO: change with listener providing feedback that can be acted upon?
    let errorListener = new ConsoleErrorListener();
    parser.addErrorListener(errorListener);
    // we should start parsing from somewhere, start from FROM clause
    let tree = parser.fromCommand();

    // init completion engine. Uses parser information to start
    let core = new c3.CodeCompletionCore(parser);
    core.showDebugOutput = true
    core.showResult = true

    // TODO: complete the list with all undesired tokens
    core.ignoredTokens = new Set([
      EsqlBaseParser.OPENING_BRACKET, EsqlBaseParser.CLOSING_BRACKET,
      EsqlBaseParser.EOF,
    ]);

    // If rules are non included here they will **never** be suggested.
    // TODO: complete the list of interesting rules
    // FIXME: rules seems to be ignored.
    core.preferredRules = new Set([
      EsqlBaseParser.RULE_limitCommand,
      EsqlBaseParser.RULE_whereCommand,
    ])

    // compute caret position to calculate token index, needed to properly compute
    // the next possible tokens
    let cp: CaretPosition = {
      line: params.position.line + 1,
      column: params.position.character - 1
    };
    let index = computeCaretTokenIndex(tree, cp);
    if (index === undefined) {
      connection.console.log("undefined index")
      index = params.position.character - 1;
    }
    // this is the **caret** position index, not a char index. The difference is that
    // follows semantic boundaries for words as computed by the parser.
    // See https://github.com/mike-lischke/antlr4-c3#selecting-the-right-caret-position
    connection.console.log(`caret index: ${index}`)
    let candidates = core.collectCandidates(index);

    // we need to output a list of CompletionItem
    let keywords: CompletionItem[] = [];
    candidates.tokens.forEach((_, c) => {
      let l = null
      l = parser.vocabulary.getSymbolicName(c)?.toLowerCase()
      if (l) {
        // data is used in onCompletionResolve to provider further info
        // FIXME: c repeats between tokens and rules, fix it to be unique
        keywords.push({ label: l, data: c, kind: CompletionItemKind.Keyword });
      }
    })

    let rules: CompletionItem[] = [];
    candidates.rules.forEach((_, c) => {
      connection.console.log(`rule: ${c}`);
      switch (c) {
        case EsqlBaseParser.RULE_limitCommand:
          // FIXME: c repeats between tokens and rules, fix it to be unique
          keywords.push({ label: '"limit"', data: c, kind: CompletionItemKind.Keyword });
          break;
        case EsqlBaseParser.RULE_whereCommand:
          // FIXME: c repeats between tokens and rules, fix it to be unique
          keywords.push({ label: '"where"', data: c, kind: CompletionItemKind.Keyword });
          break;
      }
    })


    return [...keywords, ...rules];
  }
);

// Provide additional details on completion items.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
  connection.console.log(`data: ${item.data}`)

  switch (item.data) {
    case 6: // FROM
      item.detail = "FROM index_pattern [METADATA fields]";
      item.documentation = "The FROM source command returns a table with data from a data stream, index, or alias. Each row in the resulting table represents a document. Each column corresponds to a field, and can be accessed by the name of that field."
      break;
  }

  return item;
});

documents.listen(connection);
connection.listen();
