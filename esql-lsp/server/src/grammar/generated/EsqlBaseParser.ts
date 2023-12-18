// Generated from ./src/grammar/EsqlBaseParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { EsqlBaseParserListener } from "./EsqlBaseParserListener.js";
import { EsqlBaseParserVisitor } from "./EsqlBaseParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class EsqlBaseParser extends antlr.Parser {
    public static readonly DISSECT = 1;
    public static readonly DROP = 2;
    public static readonly ENRICH = 3;
    public static readonly EVAL = 4;
    public static readonly EXPLAIN = 5;
    public static readonly FROM = 6;
    public static readonly GROK = 7;
    public static readonly INLINESTATS = 8;
    public static readonly KEEP = 9;
    public static readonly LIMIT = 10;
    public static readonly MV_EXPAND = 11;
    public static readonly PROJECT = 12;
    public static readonly RENAME = 13;
    public static readonly ROW = 14;
    public static readonly SHOW = 15;
    public static readonly SORT = 16;
    public static readonly STATS = 17;
    public static readonly WHERE = 18;
    public static readonly UNKNOWN_CMD = 19;
    public static readonly LINE_COMMENT = 20;
    public static readonly MULTILINE_COMMENT = 21;
    public static readonly WS = 22;
    public static readonly EXPLAIN_WS = 23;
    public static readonly EXPLAIN_LINE_COMMENT = 24;
    public static readonly EXPLAIN_MULTILINE_COMMENT = 25;
    public static readonly PIPE = 26;
    public static readonly STRING = 27;
    public static readonly INTEGER_LITERAL = 28;
    public static readonly DECIMAL_LITERAL = 29;
    public static readonly BY = 30;
    public static readonly AND = 31;
    public static readonly ASC = 32;
    public static readonly ASSIGN = 33;
    public static readonly COMMA = 34;
    public static readonly DESC = 35;
    public static readonly DOT = 36;
    public static readonly FALSE = 37;
    public static readonly FIRST = 38;
    public static readonly LAST = 39;
    public static readonly LP = 40;
    public static readonly IN = 41;
    public static readonly IS = 42;
    public static readonly LIKE = 43;
    public static readonly NOT = 44;
    public static readonly NULL = 45;
    public static readonly NULLS = 46;
    public static readonly OR = 47;
    public static readonly PARAM = 48;
    public static readonly RLIKE = 49;
    public static readonly RP = 50;
    public static readonly TRUE = 51;
    public static readonly EQ = 52;
    public static readonly NEQ = 53;
    public static readonly LT = 54;
    public static readonly LTE = 55;
    public static readonly GT = 56;
    public static readonly GTE = 57;
    public static readonly PLUS = 58;
    public static readonly MINUS = 59;
    public static readonly ASTERISK = 60;
    public static readonly SLASH = 61;
    public static readonly PERCENT = 62;
    public static readonly OPENING_BRACKET = 63;
    public static readonly CLOSING_BRACKET = 64;
    public static readonly UNQUOTED_IDENTIFIER = 65;
    public static readonly QUOTED_IDENTIFIER = 66;
    public static readonly EXPR_LINE_COMMENT = 67;
    public static readonly EXPR_MULTILINE_COMMENT = 68;
    public static readonly EXPR_WS = 69;
    public static readonly METADATA = 70;
    public static readonly FROM_UNQUOTED_IDENTIFIER = 71;
    public static readonly FROM_LINE_COMMENT = 72;
    public static readonly FROM_MULTILINE_COMMENT = 73;
    public static readonly FROM_WS = 74;
    public static readonly PROJECT_UNQUOTED_IDENTIFIER = 75;
    public static readonly PROJECT_LINE_COMMENT = 76;
    public static readonly PROJECT_MULTILINE_COMMENT = 77;
    public static readonly PROJECT_WS = 78;
    public static readonly AS = 79;
    public static readonly RENAME_LINE_COMMENT = 80;
    public static readonly RENAME_MULTILINE_COMMENT = 81;
    public static readonly RENAME_WS = 82;
    public static readonly ON = 83;
    public static readonly WITH = 84;
    public static readonly ENRICH_LINE_COMMENT = 85;
    public static readonly ENRICH_MULTILINE_COMMENT = 86;
    public static readonly ENRICH_WS = 87;
    public static readonly ENRICH_FIELD_LINE_COMMENT = 88;
    public static readonly ENRICH_FIELD_MULTILINE_COMMENT = 89;
    public static readonly ENRICH_FIELD_WS = 90;
    public static readonly MVEXPAND_LINE_COMMENT = 91;
    public static readonly MVEXPAND_MULTILINE_COMMENT = 92;
    public static readonly MVEXPAND_WS = 93;
    public static readonly INFO = 94;
    public static readonly FUNCTIONS = 95;
    public static readonly SHOW_LINE_COMMENT = 96;
    public static readonly SHOW_MULTILINE_COMMENT = 97;
    public static readonly SHOW_WS = 98;
    public static readonly RULE_singleStatement = 0;
    public static readonly RULE_query = 1;
    public static readonly RULE_sourceCommand = 2;
    public static readonly RULE_processingCommand = 3;
    public static readonly RULE_whereCommand = 4;
    public static readonly RULE_booleanExpression = 5;
    public static readonly RULE_regexBooleanExpression = 6;
    public static readonly RULE_valueExpression = 7;
    public static readonly RULE_operatorExpression = 8;
    public static readonly RULE_primaryExpression = 9;
    public static readonly RULE_functionExpression = 10;
    public static readonly RULE_rowCommand = 11;
    public static readonly RULE_fields = 12;
    public static readonly RULE_field = 13;
    public static readonly RULE_fromCommand = 14;
    public static readonly RULE_metadata = 15;
    public static readonly RULE_evalCommand = 16;
    public static readonly RULE_statsCommand = 17;
    public static readonly RULE_inlinestatsCommand = 18;
    public static readonly RULE_grouping = 19;
    public static readonly RULE_fromIdentifier = 20;
    public static readonly RULE_qualifiedName = 21;
    public static readonly RULE_qualifiedNamePattern = 22;
    public static readonly RULE_identifier = 23;
    public static readonly RULE_identifierPattern = 24;
    public static readonly RULE_constant = 25;
    public static readonly RULE_limitCommand = 26;
    public static readonly RULE_sortCommand = 27;
    public static readonly RULE_orderExpression = 28;
    public static readonly RULE_keepCommand = 29;
    public static readonly RULE_dropCommand = 30;
    public static readonly RULE_renameCommand = 31;
    public static readonly RULE_renameClause = 32;
    public static readonly RULE_dissectCommand = 33;
    public static readonly RULE_grokCommand = 34;
    public static readonly RULE_mvExpandCommand = 35;
    public static readonly RULE_commandOptions = 36;
    public static readonly RULE_commandOption = 37;
    public static readonly RULE_booleanValue = 38;
    public static readonly RULE_numericValue = 39;
    public static readonly RULE_decimalValue = 40;
    public static readonly RULE_integerValue = 41;
    public static readonly RULE_string = 42;
    public static readonly RULE_comparisonOperator = 43;
    public static readonly RULE_explainCommand = 44;
    public static readonly RULE_subqueryExpression = 45;
    public static readonly RULE_showCommand = 46;
    public static readonly RULE_enrichCommand = 47;
    public static readonly RULE_enrichWithClause = 48;

    public static readonly literalNames = [
        null, "'dissect'", "'drop'", "'enrich'", "'eval'", "'explain'", 
        "'from'", "'grok'", "'inlinestats'", "'keep'", "'limit'", "'mv_expand'", 
        "'project'", "'rename'", "'row'", "'show'", "'sort'", "'stats'", 
        "'where'", null, null, null, null, null, null, null, "'|'", null, 
        null, null, "'by'", "'and'", "'asc'", "'='", "','", "'desc'", "'.'", 
        "'false'", "'first'", "'last'", "'('", "'in'", "'is'", "'like'", 
        "'not'", "'null'", "'nulls'", "'or'", "'?'", "'rlike'", "')'", "'true'", 
        "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", 
        "'/'", "'%'", null, "']'", null, null, null, null, null, "'metadata'", 
        null, null, null, null, null, null, null, null, "'as'", null, null, 
        null, "'on'", "'with'", null, null, null, null, null, null, null, 
        null, null, "'info'", "'functions'"
    ];

    public static readonly symbolicNames = [
        null, "DISSECT", "DROP", "ENRICH", "EVAL", "EXPLAIN", "FROM", "GROK", 
        "INLINESTATS", "KEEP", "LIMIT", "MV_EXPAND", "PROJECT", "RENAME", 
        "ROW", "SHOW", "SORT", "STATS", "WHERE", "UNKNOWN_CMD", "LINE_COMMENT", 
        "MULTILINE_COMMENT", "WS", "EXPLAIN_WS", "EXPLAIN_LINE_COMMENT", 
        "EXPLAIN_MULTILINE_COMMENT", "PIPE", "STRING", "INTEGER_LITERAL", 
        "DECIMAL_LITERAL", "BY", "AND", "ASC", "ASSIGN", "COMMA", "DESC", 
        "DOT", "FALSE", "FIRST", "LAST", "LP", "IN", "IS", "LIKE", "NOT", 
        "NULL", "NULLS", "OR", "PARAM", "RLIKE", "RP", "TRUE", "EQ", "NEQ", 
        "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", 
        "PERCENT", "OPENING_BRACKET", "CLOSING_BRACKET", "UNQUOTED_IDENTIFIER", 
        "QUOTED_IDENTIFIER", "EXPR_LINE_COMMENT", "EXPR_MULTILINE_COMMENT", 
        "EXPR_WS", "METADATA", "FROM_UNQUOTED_IDENTIFIER", "FROM_LINE_COMMENT", 
        "FROM_MULTILINE_COMMENT", "FROM_WS", "PROJECT_UNQUOTED_IDENTIFIER", 
        "PROJECT_LINE_COMMENT", "PROJECT_MULTILINE_COMMENT", "PROJECT_WS", 
        "AS", "RENAME_LINE_COMMENT", "RENAME_MULTILINE_COMMENT", "RENAME_WS", 
        "ON", "WITH", "ENRICH_LINE_COMMENT", "ENRICH_MULTILINE_COMMENT", 
        "ENRICH_WS", "ENRICH_FIELD_LINE_COMMENT", "ENRICH_FIELD_MULTILINE_COMMENT", 
        "ENRICH_FIELD_WS", "MVEXPAND_LINE_COMMENT", "MVEXPAND_MULTILINE_COMMENT", 
        "MVEXPAND_WS", "INFO", "FUNCTIONS", "SHOW_LINE_COMMENT", "SHOW_MULTILINE_COMMENT", 
        "SHOW_WS"
    ];
    public static readonly ruleNames = [
        "singleStatement", "query", "sourceCommand", "processingCommand", 
        "whereCommand", "booleanExpression", "regexBooleanExpression", "valueExpression", 
        "operatorExpression", "primaryExpression", "functionExpression", 
        "rowCommand", "fields", "field", "fromCommand", "metadata", "evalCommand", 
        "statsCommand", "inlinestatsCommand", "grouping", "fromIdentifier", 
        "qualifiedName", "qualifiedNamePattern", "identifier", "identifierPattern", 
        "constant", "limitCommand", "sortCommand", "orderExpression", "keepCommand", 
        "dropCommand", "renameCommand", "renameClause", "dissectCommand", 
        "grokCommand", "mvExpandCommand", "commandOptions", "commandOption", 
        "booleanValue", "numericValue", "decimalValue", "integerValue", 
        "string", "comparisonOperator", "explainCommand", "subqueryExpression", 
        "showCommand", "enrichCommand", "enrichWithClause",
    ];

    public get grammarFileName(): string { return "EsqlBaseParser.g4"; }
    public get literalNames(): (string | null)[] { return EsqlBaseParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return EsqlBaseParser.symbolicNames; }
    public get ruleNames(): string[] { return EsqlBaseParser.ruleNames; }
    public get serializedATN(): number[] { return EsqlBaseParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, EsqlBaseParser._ATN, EsqlBaseParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public singleStatement(): SingleStatementContext {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 0, EsqlBaseParser.RULE_singleStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.query(0);
            this.state = 99;
            this.match(EsqlBaseParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public query(): QueryContext;
    public query(_p: number): QueryContext;
    public query(_p?: number): QueryContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 2;
        this.enterRecursionRule(localContext, 2, EsqlBaseParser.RULE_query, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new SingleCommandQueryContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 102;
            this.sourceCommand();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 109;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new CompositeQueryContext(new QueryContext(parentContext, parentState));
                    this.pushNewRecursionContext(localContext, _startState, EsqlBaseParser.RULE_query);
                    this.state = 104;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 105;
                    this.match(EsqlBaseParser.PIPE);
                    this.state = 106;
                    this.processingCommand();
                    }
                    }
                }
                this.state = 111;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public sourceCommand(): SourceCommandContext {
        let localContext = new SourceCommandContext(this.context, this.state);
        this.enterRule(localContext, 4, EsqlBaseParser.RULE_sourceCommand);
        try {
            this.state = 116;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EsqlBaseParser.EXPLAIN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 112;
                this.explainCommand();
                }
                break;
            case EsqlBaseParser.FROM:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 113;
                this.fromCommand();
                }
                break;
            case EsqlBaseParser.ROW:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 114;
                this.rowCommand();
                }
                break;
            case EsqlBaseParser.SHOW:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 115;
                this.showCommand();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public processingCommand(): ProcessingCommandContext {
        let localContext = new ProcessingCommandContext(this.context, this.state);
        this.enterRule(localContext, 6, EsqlBaseParser.RULE_processingCommand);
        try {
            this.state = 131;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EsqlBaseParser.EVAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 118;
                this.evalCommand();
                }
                break;
            case EsqlBaseParser.INLINESTATS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 119;
                this.inlinestatsCommand();
                }
                break;
            case EsqlBaseParser.LIMIT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 120;
                this.limitCommand();
                }
                break;
            case EsqlBaseParser.KEEP:
            case EsqlBaseParser.PROJECT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 121;
                this.keepCommand();
                }
                break;
            case EsqlBaseParser.SORT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 122;
                this.sortCommand();
                }
                break;
            case EsqlBaseParser.STATS:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 123;
                this.statsCommand();
                }
                break;
            case EsqlBaseParser.WHERE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 124;
                this.whereCommand();
                }
                break;
            case EsqlBaseParser.DROP:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 125;
                this.dropCommand();
                }
                break;
            case EsqlBaseParser.RENAME:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 126;
                this.renameCommand();
                }
                break;
            case EsqlBaseParser.DISSECT:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 127;
                this.dissectCommand();
                }
                break;
            case EsqlBaseParser.GROK:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 128;
                this.grokCommand();
                }
                break;
            case EsqlBaseParser.ENRICH:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 129;
                this.enrichCommand();
                }
                break;
            case EsqlBaseParser.MV_EXPAND:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 130;
                this.mvExpandCommand();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereCommand(): WhereCommandContext {
        let localContext = new WhereCommandContext(this.context, this.state);
        this.enterRule(localContext, 8, EsqlBaseParser.RULE_whereCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 133;
            this.match(EsqlBaseParser.WHERE);
            this.state = 134;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public booleanExpression(): BooleanExpressionContext;
    public booleanExpression(_p: number): BooleanExpressionContext;
    public booleanExpression(_p?: number): BooleanExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 10;
        this.enterRecursionRule(localContext, 10, EsqlBaseParser.RULE_booleanExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 137;
                this.match(EsqlBaseParser.NOT);
                this.state = 138;
                this.booleanExpression(7);
                }
                break;
            case 2:
                {
                localContext = new BooleanDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 139;
                this.valueExpression();
                }
                break;
            case 3:
                {
                localContext = new RegexExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 140;
                this.regexBooleanExpression();
                }
                break;
            case 4:
                {
                localContext = new LogicalInContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 141;
                this.valueExpression();
                this.state = 143;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                    this.state = 142;
                    this.match(EsqlBaseParser.NOT);
                    }
                }

                this.state = 145;
                this.match(EsqlBaseParser.IN);
                this.state = 146;
                this.match(EsqlBaseParser.LP);
                this.state = 147;
                this.valueExpression();
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 34) {
                    {
                    {
                    this.state = 148;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 149;
                    this.valueExpression();
                    }
                    }
                    this.state = 154;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 155;
                this.match(EsqlBaseParser.RP);
                }
                break;
            case 5:
                {
                localContext = new IsNullContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 157;
                this.valueExpression();
                this.state = 158;
                this.match(EsqlBaseParser.IS);
                this.state = 160;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                    this.state = 159;
                    this.match(EsqlBaseParser.NOT);
                    }
                }

                this.state = 162;
                this.match(EsqlBaseParser.NULL);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 174;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 172;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, EsqlBaseParser.RULE_booleanExpression);
                        this.state = 166;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 167;
                        (localContext as LogicalBinaryContext)._operator = this.match(EsqlBaseParser.AND);
                        this.state = 168;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, EsqlBaseParser.RULE_booleanExpression);
                        this.state = 169;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 170;
                        (localContext as LogicalBinaryContext)._operator = this.match(EsqlBaseParser.OR);
                        this.state = 171;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(4);
                        }
                        break;
                    }
                    }
                }
                this.state = 176;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public regexBooleanExpression(): RegexBooleanExpressionContext {
        let localContext = new RegexBooleanExpressionContext(this.context, this.state);
        this.enterRule(localContext, 12, EsqlBaseParser.RULE_regexBooleanExpression);
        let _la: number;
        try {
            this.state = 191;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 177;
                this.valueExpression();
                this.state = 179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                    this.state = 178;
                    this.match(EsqlBaseParser.NOT);
                    }
                }

                this.state = 181;
                localContext._kind = this.match(EsqlBaseParser.LIKE);
                this.state = 182;
                localContext._pattern = this.string_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 184;
                this.valueExpression();
                this.state = 186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                    this.state = 185;
                    this.match(EsqlBaseParser.NOT);
                    }
                }

                this.state = 188;
                localContext._kind = this.match(EsqlBaseParser.RLIKE);
                this.state = 189;
                localContext._pattern = this.string_();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueExpression(): ValueExpressionContext {
        let localContext = new ValueExpressionContext(this.context, this.state);
        this.enterRule(localContext, 14, EsqlBaseParser.RULE_valueExpression);
        try {
            this.state = 198;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                localContext = new ValueExpressionDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 193;
                this.operatorExpression(0);
                }
                break;
            case 2:
                localContext = new ComparisonContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 194;
                (localContext as ComparisonContext)._left = this.operatorExpression(0);
                this.state = 195;
                this.comparisonOperator();
                this.state = 196;
                (localContext as ComparisonContext)._right = this.operatorExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public operatorExpression(): OperatorExpressionContext;
    public operatorExpression(_p: number): OperatorExpressionContext;
    public operatorExpression(_p?: number): OperatorExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new OperatorExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 16;
        this.enterRecursionRule(localContext, 16, EsqlBaseParser.RULE_operatorExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 204;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                {
                localContext = new OperatorExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 201;
                this.primaryExpression();
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 202;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 58 || _la === 59)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 203;
                this.operatorExpression(3);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 214;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 212;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new OperatorExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, EsqlBaseParser.RULE_operatorExpression);
                        this.state = 206;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 207;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 7) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 208;
                        (localContext as ArithmeticBinaryContext)._right = this.operatorExpression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new OperatorExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, EsqlBaseParser.RULE_operatorExpression);
                        this.state = 209;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 210;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 58 || _la === 59)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 211;
                        (localContext as ArithmeticBinaryContext)._right = this.operatorExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 216;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public primaryExpression(): PrimaryExpressionContext {
        let localContext = new PrimaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 18, EsqlBaseParser.RULE_primaryExpression);
        try {
            this.state = 224;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                localContext = new ConstantDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 217;
                this.constant();
                }
                break;
            case 2:
                localContext = new DereferenceContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 218;
                this.qualifiedName();
                }
                break;
            case 3:
                localContext = new FunctionContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 219;
                this.functionExpression();
                }
                break;
            case 4:
                localContext = new ParenthesizedExpressionContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 220;
                this.match(EsqlBaseParser.LP);
                this.state = 221;
                this.booleanExpression(0);
                this.state = 222;
                this.match(EsqlBaseParser.RP);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionExpression(): FunctionExpressionContext {
        let localContext = new FunctionExpressionContext(this.context, this.state);
        this.enterRule(localContext, 20, EsqlBaseParser.RULE_functionExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.identifier();
            this.state = 227;
            this.match(EsqlBaseParser.LP);
            this.state = 237;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EsqlBaseParser.ASTERISK:
                {
                this.state = 228;
                this.match(EsqlBaseParser.ASTERISK);
                }
                break;
            case EsqlBaseParser.STRING:
            case EsqlBaseParser.INTEGER_LITERAL:
            case EsqlBaseParser.DECIMAL_LITERAL:
            case EsqlBaseParser.FALSE:
            case EsqlBaseParser.LP:
            case EsqlBaseParser.NOT:
            case EsqlBaseParser.NULL:
            case EsqlBaseParser.PARAM:
            case EsqlBaseParser.TRUE:
            case EsqlBaseParser.PLUS:
            case EsqlBaseParser.MINUS:
            case EsqlBaseParser.OPENING_BRACKET:
            case EsqlBaseParser.UNQUOTED_IDENTIFIER:
            case EsqlBaseParser.QUOTED_IDENTIFIER:
                {
                {
                this.state = 229;
                this.booleanExpression(0);
                this.state = 234;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 34) {
                    {
                    {
                    this.state = 230;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 231;
                    this.booleanExpression(0);
                    }
                    }
                    this.state = 236;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                }
                break;
            case EsqlBaseParser.RP:
                break;
            default:
                break;
            }
            this.state = 239;
            this.match(EsqlBaseParser.RP);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowCommand(): RowCommandContext {
        let localContext = new RowCommandContext(this.context, this.state);
        this.enterRule(localContext, 22, EsqlBaseParser.RULE_rowCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 241;
            this.match(EsqlBaseParser.ROW);
            this.state = 242;
            this.fields();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fields(): FieldsContext {
        let localContext = new FieldsContext(this.context, this.state);
        this.enterRule(localContext, 24, EsqlBaseParser.RULE_fields);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 244;
            this.field();
            this.state = 249;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 245;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 246;
                    this.field();
                    }
                    }
                }
                this.state = 251;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public field(): FieldContext {
        let localContext = new FieldContext(this.context, this.state);
        this.enterRule(localContext, 26, EsqlBaseParser.RULE_field);
        try {
            this.state = 257;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 252;
                this.booleanExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 253;
                this.qualifiedName();
                this.state = 254;
                this.match(EsqlBaseParser.ASSIGN);
                this.state = 255;
                this.booleanExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromCommand(): FromCommandContext {
        let localContext = new FromCommandContext(this.context, this.state);
        this.enterRule(localContext, 28, EsqlBaseParser.RULE_fromCommand);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.match(EsqlBaseParser.FROM);
            this.state = 260;
            this.fromIdentifier();
            this.state = 265;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 261;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 262;
                    this.fromIdentifier();
                    }
                    }
                }
                this.state = 267;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            this.state = 269;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 268;
                this.metadata();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public metadata(): MetadataContext {
        let localContext = new MetadataContext(this.context, this.state);
        this.enterRule(localContext, 30, EsqlBaseParser.RULE_metadata);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(EsqlBaseParser.OPENING_BRACKET);
            this.state = 272;
            this.match(EsqlBaseParser.METADATA);
            this.state = 273;
            this.fromIdentifier();
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 34) {
                {
                {
                this.state = 274;
                this.match(EsqlBaseParser.COMMA);
                this.state = 275;
                this.fromIdentifier();
                }
                }
                this.state = 280;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 281;
            this.match(EsqlBaseParser.CLOSING_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public evalCommand(): EvalCommandContext {
        let localContext = new EvalCommandContext(this.context, this.state);
        this.enterRule(localContext, 32, EsqlBaseParser.RULE_evalCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 283;
            this.match(EsqlBaseParser.EVAL);
            this.state = 284;
            this.fields();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsCommand(): StatsCommandContext {
        let localContext = new StatsCommandContext(this.context, this.state);
        this.enterRule(localContext, 34, EsqlBaseParser.RULE_statsCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            this.match(EsqlBaseParser.STATS);
            this.state = 288;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                {
                this.state = 287;
                this.fields();
                }
                break;
            }
            this.state = 292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                {
                this.state = 290;
                this.match(EsqlBaseParser.BY);
                this.state = 291;
                this.grouping();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlinestatsCommand(): InlinestatsCommandContext {
        let localContext = new InlinestatsCommandContext(this.context, this.state);
        this.enterRule(localContext, 36, EsqlBaseParser.RULE_inlinestatsCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            this.match(EsqlBaseParser.INLINESTATS);
            this.state = 295;
            this.fields();
            this.state = 298;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                {
                this.state = 296;
                this.match(EsqlBaseParser.BY);
                this.state = 297;
                this.grouping();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grouping(): GroupingContext {
        let localContext = new GroupingContext(this.context, this.state);
        this.enterRule(localContext, 38, EsqlBaseParser.RULE_grouping);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 300;
            this.qualifiedName();
            this.state = 305;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 301;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 302;
                    this.qualifiedName();
                    }
                    }
                }
                this.state = 307;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromIdentifier(): FromIdentifierContext {
        let localContext = new FromIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 40, EsqlBaseParser.RULE_fromIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 308;
            _la = this.tokenStream.LA(1);
            if(!(_la === 66 || _la === 71)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 42, EsqlBaseParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 310;
            this.identifier();
            this.state = 315;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 311;
                    this.match(EsqlBaseParser.DOT);
                    this.state = 312;
                    this.identifier();
                    }
                    }
                }
                this.state = 317;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedNamePattern(): QualifiedNamePatternContext {
        let localContext = new QualifiedNamePatternContext(this.context, this.state);
        this.enterRule(localContext, 44, EsqlBaseParser.RULE_qualifiedNamePattern);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
            this.identifierPattern();
            this.state = 323;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 319;
                    this.match(EsqlBaseParser.DOT);
                    this.state = 320;
                    this.identifierPattern();
                    }
                    }
                }
                this.state = 325;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 46, EsqlBaseParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 326;
            _la = this.tokenStream.LA(1);
            if(!(_la === 65 || _la === 66)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierPattern(): IdentifierPatternContext {
        let localContext = new IdentifierPatternContext(this.context, this.state);
        this.enterRule(localContext, 48, EsqlBaseParser.RULE_identifierPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            _la = this.tokenStream.LA(1);
            if(!(_la === 66 || _la === 75)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constant(): ConstantContext {
        let localContext = new ConstantContext(this.context, this.state);
        this.enterRule(localContext, 50, EsqlBaseParser.RULE_constant);
        let _la: number;
        try {
            this.state = 372;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                localContext = new NullLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 330;
                this.match(EsqlBaseParser.NULL);
                }
                break;
            case 2:
                localContext = new QualifiedIntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 331;
                this.integerValue();
                this.state = 332;
                this.match(EsqlBaseParser.UNQUOTED_IDENTIFIER);
                }
                break;
            case 3:
                localContext = new DecimalLiteralContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 334;
                this.decimalValue();
                }
                break;
            case 4:
                localContext = new IntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 335;
                this.integerValue();
                }
                break;
            case 5:
                localContext = new BooleanLiteralContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 336;
                this.booleanValue();
                }
                break;
            case 6:
                localContext = new InputParamContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 337;
                this.match(EsqlBaseParser.PARAM);
                }
                break;
            case 7:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 338;
                this.string_();
                }
                break;
            case 8:
                localContext = new NumericArrayLiteralContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 339;
                this.match(EsqlBaseParser.OPENING_BRACKET);
                this.state = 340;
                this.numericValue();
                this.state = 345;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 34) {
                    {
                    {
                    this.state = 341;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 342;
                    this.numericValue();
                    }
                    }
                    this.state = 347;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 348;
                this.match(EsqlBaseParser.CLOSING_BRACKET);
                }
                break;
            case 9:
                localContext = new BooleanArrayLiteralContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 350;
                this.match(EsqlBaseParser.OPENING_BRACKET);
                this.state = 351;
                this.booleanValue();
                this.state = 356;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 34) {
                    {
                    {
                    this.state = 352;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 353;
                    this.booleanValue();
                    }
                    }
                    this.state = 358;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 359;
                this.match(EsqlBaseParser.CLOSING_BRACKET);
                }
                break;
            case 10:
                localContext = new StringArrayLiteralContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 361;
                this.match(EsqlBaseParser.OPENING_BRACKET);
                this.state = 362;
                this.string_();
                this.state = 367;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 34) {
                    {
                    {
                    this.state = 363;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 364;
                    this.string_();
                    }
                    }
                    this.state = 369;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 370;
                this.match(EsqlBaseParser.CLOSING_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitCommand(): LimitCommandContext {
        let localContext = new LimitCommandContext(this.context, this.state);
        this.enterRule(localContext, 52, EsqlBaseParser.RULE_limitCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 374;
            this.match(EsqlBaseParser.LIMIT);
            this.state = 375;
            this.match(EsqlBaseParser.INTEGER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortCommand(): SortCommandContext {
        let localContext = new SortCommandContext(this.context, this.state);
        this.enterRule(localContext, 54, EsqlBaseParser.RULE_sortCommand);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 377;
            this.match(EsqlBaseParser.SORT);
            this.state = 378;
            this.orderExpression();
            this.state = 383;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 379;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 380;
                    this.orderExpression();
                    }
                    }
                }
                this.state = 385;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderExpression(): OrderExpressionContext {
        let localContext = new OrderExpressionContext(this.context, this.state);
        this.enterRule(localContext, 56, EsqlBaseParser.RULE_orderExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 386;
            this.booleanExpression(0);
            this.state = 388;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
            case 1:
                {
                this.state = 387;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 32 || _la === 35)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 392;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                {
                this.state = 390;
                this.match(EsqlBaseParser.NULLS);
                this.state = 391;
                localContext._nullOrdering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 38 || _la === 39)) {
                    localContext._nullOrdering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keepCommand(): KeepCommandContext {
        let localContext = new KeepCommandContext(this.context, this.state);
        this.enterRule(localContext, 58, EsqlBaseParser.RULE_keepCommand);
        try {
            let alternative: number;
            this.state = 412;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case EsqlBaseParser.KEEP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 394;
                this.match(EsqlBaseParser.KEEP);
                this.state = 395;
                this.qualifiedNamePattern();
                this.state = 400;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 396;
                        this.match(EsqlBaseParser.COMMA);
                        this.state = 397;
                        this.qualifiedNamePattern();
                        }
                        }
                    }
                    this.state = 402;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
                }
                }
                break;
            case EsqlBaseParser.PROJECT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 403;
                this.match(EsqlBaseParser.PROJECT);
                this.state = 404;
                this.qualifiedNamePattern();
                this.state = 409;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 405;
                        this.match(EsqlBaseParser.COMMA);
                        this.state = 406;
                        this.qualifiedNamePattern();
                        }
                        }
                    }
                    this.state = 411;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropCommand(): DropCommandContext {
        let localContext = new DropCommandContext(this.context, this.state);
        this.enterRule(localContext, 60, EsqlBaseParser.RULE_dropCommand);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.match(EsqlBaseParser.DROP);
            this.state = 415;
            this.qualifiedNamePattern();
            this.state = 420;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 416;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 417;
                    this.qualifiedNamePattern();
                    }
                    }
                }
                this.state = 422;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameCommand(): RenameCommandContext {
        let localContext = new RenameCommandContext(this.context, this.state);
        this.enterRule(localContext, 62, EsqlBaseParser.RULE_renameCommand);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 423;
            this.match(EsqlBaseParser.RENAME);
            this.state = 424;
            this.renameClause();
            this.state = 429;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 425;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 426;
                    this.renameClause();
                    }
                    }
                }
                this.state = 431;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameClause(): RenameClauseContext {
        let localContext = new RenameClauseContext(this.context, this.state);
        this.enterRule(localContext, 64, EsqlBaseParser.RULE_renameClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 432;
            localContext._oldName = this.qualifiedNamePattern();
            this.state = 433;
            this.match(EsqlBaseParser.AS);
            this.state = 434;
            localContext._newName = this.qualifiedNamePattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dissectCommand(): DissectCommandContext {
        let localContext = new DissectCommandContext(this.context, this.state);
        this.enterRule(localContext, 66, EsqlBaseParser.RULE_dissectCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 436;
            this.match(EsqlBaseParser.DISSECT);
            this.state = 437;
            this.primaryExpression();
            this.state = 438;
            this.string_();
            this.state = 440;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 439;
                this.commandOptions();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grokCommand(): GrokCommandContext {
        let localContext = new GrokCommandContext(this.context, this.state);
        this.enterRule(localContext, 68, EsqlBaseParser.RULE_grokCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 442;
            this.match(EsqlBaseParser.GROK);
            this.state = 443;
            this.primaryExpression();
            this.state = 444;
            this.string_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mvExpandCommand(): MvExpandCommandContext {
        let localContext = new MvExpandCommandContext(this.context, this.state);
        this.enterRule(localContext, 70, EsqlBaseParser.RULE_mvExpandCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 446;
            this.match(EsqlBaseParser.MV_EXPAND);
            this.state = 447;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandOptions(): CommandOptionsContext {
        let localContext = new CommandOptionsContext(this.context, this.state);
        this.enterRule(localContext, 72, EsqlBaseParser.RULE_commandOptions);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 449;
            this.commandOption();
            this.state = 454;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 450;
                    this.match(EsqlBaseParser.COMMA);
                    this.state = 451;
                    this.commandOption();
                    }
                    }
                }
                this.state = 456;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandOption(): CommandOptionContext {
        let localContext = new CommandOptionContext(this.context, this.state);
        this.enterRule(localContext, 74, EsqlBaseParser.RULE_commandOption);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 457;
            this.identifier();
            this.state = 458;
            this.match(EsqlBaseParser.ASSIGN);
            this.state = 459;
            this.constant();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanValue(): BooleanValueContext {
        let localContext = new BooleanValueContext(this.context, this.state);
        this.enterRule(localContext, 76, EsqlBaseParser.RULE_booleanValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 461;
            _la = this.tokenStream.LA(1);
            if(!(_la === 37 || _la === 51)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numericValue(): NumericValueContext {
        let localContext = new NumericValueContext(this.context, this.state);
        this.enterRule(localContext, 78, EsqlBaseParser.RULE_numericValue);
        try {
            this.state = 465;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 463;
                this.decimalValue();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 464;
                this.integerValue();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimalValue(): DecimalValueContext {
        let localContext = new DecimalValueContext(this.context, this.state);
        this.enterRule(localContext, 80, EsqlBaseParser.RULE_decimalValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 58 || _la === 59) {
                {
                this.state = 467;
                _la = this.tokenStream.LA(1);
                if(!(_la === 58 || _la === 59)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 470;
            this.match(EsqlBaseParser.DECIMAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public integerValue(): IntegerValueContext {
        let localContext = new IntegerValueContext(this.context, this.state);
        this.enterRule(localContext, 82, EsqlBaseParser.RULE_integerValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 473;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 58 || _la === 59) {
                {
                this.state = 472;
                _la = this.tokenStream.LA(1);
                if(!(_la === 58 || _la === 59)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 475;
            this.match(EsqlBaseParser.INTEGER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public string_(): StringContext {
        let localContext = new StringContext(this.context, this.state);
        this.enterRule(localContext, 84, EsqlBaseParser.RULE_string);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 477;
            this.match(EsqlBaseParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 86, EsqlBaseParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 479;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainCommand(): ExplainCommandContext {
        let localContext = new ExplainCommandContext(this.context, this.state);
        this.enterRule(localContext, 88, EsqlBaseParser.RULE_explainCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 481;
            this.match(EsqlBaseParser.EXPLAIN);
            this.state = 482;
            this.subqueryExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subqueryExpression(): SubqueryExpressionContext {
        let localContext = new SubqueryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 90, EsqlBaseParser.RULE_subqueryExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 484;
            this.match(EsqlBaseParser.OPENING_BRACKET);
            this.state = 485;
            this.query(0);
            this.state = 486;
            this.match(EsqlBaseParser.CLOSING_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showCommand(): ShowCommandContext {
        let localContext = new ShowCommandContext(this.context, this.state);
        this.enterRule(localContext, 92, EsqlBaseParser.RULE_showCommand);
        try {
            this.state = 492;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                localContext = new ShowInfoContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 488;
                this.match(EsqlBaseParser.SHOW);
                this.state = 489;
                this.match(EsqlBaseParser.INFO);
                }
                break;
            case 2:
                localContext = new ShowFunctionsContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 490;
                this.match(EsqlBaseParser.SHOW);
                this.state = 491;
                this.match(EsqlBaseParser.FUNCTIONS);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enrichCommand(): EnrichCommandContext {
        let localContext = new EnrichCommandContext(this.context, this.state);
        this.enterRule(localContext, 94, EsqlBaseParser.RULE_enrichCommand);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 494;
            this.match(EsqlBaseParser.ENRICH);
            this.state = 495;
            localContext._policyName = this.fromIdentifier();
            this.state = 498;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                {
                this.state = 496;
                this.match(EsqlBaseParser.ON);
                this.state = 497;
                localContext._matchField = this.qualifiedNamePattern();
                }
                break;
            }
            this.state = 509;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                {
                this.state = 500;
                this.match(EsqlBaseParser.WITH);
                this.state = 501;
                this.enrichWithClause();
                this.state = 506;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 502;
                        this.match(EsqlBaseParser.COMMA);
                        this.state = 503;
                        this.enrichWithClause();
                        }
                        }
                    }
                    this.state = 508;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enrichWithClause(): EnrichWithClauseContext {
        let localContext = new EnrichWithClauseContext(this.context, this.state);
        this.enterRule(localContext, 96, EsqlBaseParser.RULE_enrichWithClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 514;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                {
                this.state = 511;
                localContext._newName = this.qualifiedNamePattern();
                this.state = 512;
                this.match(EsqlBaseParser.ASSIGN);
                }
                break;
            }
            this.state = 516;
            localContext._enrichField = this.qualifiedNamePattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 1:
            return this.query_sempred(localContext as QueryContext, predIndex);
        case 5:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 8:
            return this.operatorExpression_sempred(localContext as OperatorExpressionContext, predIndex);
        }
        return true;
    }
    private query_sempred(localContext: QueryContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private booleanExpression_sempred(localContext: BooleanExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 4);
        case 2:
            return this.precpred(this.context, 3);
        }
        return true;
    }
    private operatorExpression_sempred(localContext: OperatorExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 2);
        case 4:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,98,519,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,5,1,
        108,8,1,10,1,12,1,111,9,1,1,2,1,2,1,2,1,2,3,2,117,8,2,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,132,8,3,1,4,1,4,1,
        4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,144,8,5,1,5,1,5,1,5,1,5,1,5,5,
        5,151,8,5,10,5,12,5,154,9,5,1,5,1,5,1,5,1,5,1,5,3,5,161,8,5,1,5,
        1,5,3,5,165,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,173,8,5,10,5,12,5,176,
        9,5,1,6,1,6,3,6,180,8,6,1,6,1,6,1,6,1,6,1,6,3,6,187,8,6,1,6,1,6,
        1,6,3,6,192,8,6,1,7,1,7,1,7,1,7,1,7,3,7,199,8,7,1,8,1,8,1,8,1,8,
        3,8,205,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,213,8,8,10,8,12,8,216,9,
        8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,225,8,9,1,10,1,10,1,10,1,10,1,
        10,1,10,5,10,233,8,10,10,10,12,10,236,9,10,3,10,238,8,10,1,10,1,
        10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,248,8,12,10,12,12,12,251,9,
        12,1,13,1,13,1,13,1,13,1,13,3,13,258,8,13,1,14,1,14,1,14,1,14,5,
        14,264,8,14,10,14,12,14,267,9,14,1,14,3,14,270,8,14,1,15,1,15,1,
        15,1,15,1,15,5,15,277,8,15,10,15,12,15,280,9,15,1,15,1,15,1,16,1,
        16,1,16,1,17,1,17,3,17,289,8,17,1,17,1,17,3,17,293,8,17,1,18,1,18,
        1,18,1,18,3,18,299,8,18,1,19,1,19,1,19,5,19,304,8,19,10,19,12,19,
        307,9,19,1,20,1,20,1,21,1,21,1,21,5,21,314,8,21,10,21,12,21,317,
        9,21,1,22,1,22,1,22,5,22,322,8,22,10,22,12,22,325,9,22,1,23,1,23,
        1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,5,25,344,8,25,10,25,12,25,347,9,25,1,25,1,25,1,25,1,25,
        1,25,1,25,5,25,355,8,25,10,25,12,25,358,9,25,1,25,1,25,1,25,1,25,
        1,25,1,25,5,25,366,8,25,10,25,12,25,369,9,25,1,25,1,25,3,25,373,
        8,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,5,27,382,8,27,10,27,12,27,
        385,9,27,1,28,1,28,3,28,389,8,28,1,28,1,28,3,28,393,8,28,1,29,1,
        29,1,29,1,29,5,29,399,8,29,10,29,12,29,402,9,29,1,29,1,29,1,29,1,
        29,5,29,408,8,29,10,29,12,29,411,9,29,3,29,413,8,29,1,30,1,30,1,
        30,1,30,5,30,419,8,30,10,30,12,30,422,9,30,1,31,1,31,1,31,1,31,5,
        31,428,8,31,10,31,12,31,431,9,31,1,32,1,32,1,32,1,32,1,33,1,33,1,
        33,1,33,3,33,441,8,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,
        36,1,36,5,36,453,8,36,10,36,12,36,456,9,36,1,37,1,37,1,37,1,37,1,
        38,1,38,1,39,1,39,3,39,466,8,39,1,40,3,40,469,8,40,1,40,1,40,1,41,
        3,41,474,8,41,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,44,1,45,
        1,45,1,45,1,45,1,46,1,46,1,46,1,46,3,46,493,8,46,1,47,1,47,1,47,
        1,47,3,47,499,8,47,1,47,1,47,1,47,1,47,5,47,505,8,47,10,47,12,47,
        508,9,47,3,47,510,8,47,1,48,1,48,1,48,3,48,515,8,48,1,48,1,48,1,
        48,0,3,2,10,16,49,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
        34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
        78,80,82,84,86,88,90,92,94,96,0,9,1,0,58,59,1,0,60,62,2,0,66,66,
        71,71,1,0,65,66,2,0,66,66,75,75,2,0,32,32,35,35,1,0,38,39,2,0,37,
        37,51,51,1,0,52,57,548,0,98,1,0,0,0,2,101,1,0,0,0,4,116,1,0,0,0,
        6,131,1,0,0,0,8,133,1,0,0,0,10,164,1,0,0,0,12,191,1,0,0,0,14,198,
        1,0,0,0,16,204,1,0,0,0,18,224,1,0,0,0,20,226,1,0,0,0,22,241,1,0,
        0,0,24,244,1,0,0,0,26,257,1,0,0,0,28,259,1,0,0,0,30,271,1,0,0,0,
        32,283,1,0,0,0,34,286,1,0,0,0,36,294,1,0,0,0,38,300,1,0,0,0,40,308,
        1,0,0,0,42,310,1,0,0,0,44,318,1,0,0,0,46,326,1,0,0,0,48,328,1,0,
        0,0,50,372,1,0,0,0,52,374,1,0,0,0,54,377,1,0,0,0,56,386,1,0,0,0,
        58,412,1,0,0,0,60,414,1,0,0,0,62,423,1,0,0,0,64,432,1,0,0,0,66,436,
        1,0,0,0,68,442,1,0,0,0,70,446,1,0,0,0,72,449,1,0,0,0,74,457,1,0,
        0,0,76,461,1,0,0,0,78,465,1,0,0,0,80,468,1,0,0,0,82,473,1,0,0,0,
        84,477,1,0,0,0,86,479,1,0,0,0,88,481,1,0,0,0,90,484,1,0,0,0,92,492,
        1,0,0,0,94,494,1,0,0,0,96,514,1,0,0,0,98,99,3,2,1,0,99,100,5,0,0,
        1,100,1,1,0,0,0,101,102,6,1,-1,0,102,103,3,4,2,0,103,109,1,0,0,0,
        104,105,10,1,0,0,105,106,5,26,0,0,106,108,3,6,3,0,107,104,1,0,0,
        0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,3,1,0,0,0,
        111,109,1,0,0,0,112,117,3,88,44,0,113,117,3,28,14,0,114,117,3,22,
        11,0,115,117,3,92,46,0,116,112,1,0,0,0,116,113,1,0,0,0,116,114,1,
        0,0,0,116,115,1,0,0,0,117,5,1,0,0,0,118,132,3,32,16,0,119,132,3,
        36,18,0,120,132,3,52,26,0,121,132,3,58,29,0,122,132,3,54,27,0,123,
        132,3,34,17,0,124,132,3,8,4,0,125,132,3,60,30,0,126,132,3,62,31,
        0,127,132,3,66,33,0,128,132,3,68,34,0,129,132,3,94,47,0,130,132,
        3,70,35,0,131,118,1,0,0,0,131,119,1,0,0,0,131,120,1,0,0,0,131,121,
        1,0,0,0,131,122,1,0,0,0,131,123,1,0,0,0,131,124,1,0,0,0,131,125,
        1,0,0,0,131,126,1,0,0,0,131,127,1,0,0,0,131,128,1,0,0,0,131,129,
        1,0,0,0,131,130,1,0,0,0,132,7,1,0,0,0,133,134,5,18,0,0,134,135,3,
        10,5,0,135,9,1,0,0,0,136,137,6,5,-1,0,137,138,5,44,0,0,138,165,3,
        10,5,7,139,165,3,14,7,0,140,165,3,12,6,0,141,143,3,14,7,0,142,144,
        5,44,0,0,143,142,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,146,
        5,41,0,0,146,147,5,40,0,0,147,152,3,14,7,0,148,149,5,34,0,0,149,
        151,3,14,7,0,150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,
        153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,5,50,0,0,156,
        165,1,0,0,0,157,158,3,14,7,0,158,160,5,42,0,0,159,161,5,44,0,0,160,
        159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,163,5,45,0,0,163,
        165,1,0,0,0,164,136,1,0,0,0,164,139,1,0,0,0,164,140,1,0,0,0,164,
        141,1,0,0,0,164,157,1,0,0,0,165,174,1,0,0,0,166,167,10,4,0,0,167,
        168,5,31,0,0,168,173,3,10,5,5,169,170,10,3,0,0,170,171,5,47,0,0,
        171,173,3,10,5,4,172,166,1,0,0,0,172,169,1,0,0,0,173,176,1,0,0,0,
        174,172,1,0,0,0,174,175,1,0,0,0,175,11,1,0,0,0,176,174,1,0,0,0,177,
        179,3,14,7,0,178,180,5,44,0,0,179,178,1,0,0,0,179,180,1,0,0,0,180,
        181,1,0,0,0,181,182,5,43,0,0,182,183,3,84,42,0,183,192,1,0,0,0,184,
        186,3,14,7,0,185,187,5,44,0,0,186,185,1,0,0,0,186,187,1,0,0,0,187,
        188,1,0,0,0,188,189,5,49,0,0,189,190,3,84,42,0,190,192,1,0,0,0,191,
        177,1,0,0,0,191,184,1,0,0,0,192,13,1,0,0,0,193,199,3,16,8,0,194,
        195,3,16,8,0,195,196,3,86,43,0,196,197,3,16,8,0,197,199,1,0,0,0,
        198,193,1,0,0,0,198,194,1,0,0,0,199,15,1,0,0,0,200,201,6,8,-1,0,
        201,205,3,18,9,0,202,203,7,0,0,0,203,205,3,16,8,3,204,200,1,0,0,
        0,204,202,1,0,0,0,205,214,1,0,0,0,206,207,10,2,0,0,207,208,7,1,0,
        0,208,213,3,16,8,3,209,210,10,1,0,0,210,211,7,0,0,0,211,213,3,16,
        8,2,212,206,1,0,0,0,212,209,1,0,0,0,213,216,1,0,0,0,214,212,1,0,
        0,0,214,215,1,0,0,0,215,17,1,0,0,0,216,214,1,0,0,0,217,225,3,50,
        25,0,218,225,3,42,21,0,219,225,3,20,10,0,220,221,5,40,0,0,221,222,
        3,10,5,0,222,223,5,50,0,0,223,225,1,0,0,0,224,217,1,0,0,0,224,218,
        1,0,0,0,224,219,1,0,0,0,224,220,1,0,0,0,225,19,1,0,0,0,226,227,3,
        46,23,0,227,237,5,40,0,0,228,238,5,60,0,0,229,234,3,10,5,0,230,231,
        5,34,0,0,231,233,3,10,5,0,232,230,1,0,0,0,233,236,1,0,0,0,234,232,
        1,0,0,0,234,235,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,237,228,
        1,0,0,0,237,229,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,240,
        5,50,0,0,240,21,1,0,0,0,241,242,5,14,0,0,242,243,3,24,12,0,243,23,
        1,0,0,0,244,249,3,26,13,0,245,246,5,34,0,0,246,248,3,26,13,0,247,
        245,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,
        25,1,0,0,0,251,249,1,0,0,0,252,258,3,10,5,0,253,254,3,42,21,0,254,
        255,5,33,0,0,255,256,3,10,5,0,256,258,1,0,0,0,257,252,1,0,0,0,257,
        253,1,0,0,0,258,27,1,0,0,0,259,260,5,6,0,0,260,265,3,40,20,0,261,
        262,5,34,0,0,262,264,3,40,20,0,263,261,1,0,0,0,264,267,1,0,0,0,265,
        263,1,0,0,0,265,266,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,268,
        270,3,30,15,0,269,268,1,0,0,0,269,270,1,0,0,0,270,29,1,0,0,0,271,
        272,5,63,0,0,272,273,5,70,0,0,273,278,3,40,20,0,274,275,5,34,0,0,
        275,277,3,40,20,0,276,274,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,
        0,278,279,1,0,0,0,279,281,1,0,0,0,280,278,1,0,0,0,281,282,5,64,0,
        0,282,31,1,0,0,0,283,284,5,4,0,0,284,285,3,24,12,0,285,33,1,0,0,
        0,286,288,5,17,0,0,287,289,3,24,12,0,288,287,1,0,0,0,288,289,1,0,
        0,0,289,292,1,0,0,0,290,291,5,30,0,0,291,293,3,38,19,0,292,290,1,
        0,0,0,292,293,1,0,0,0,293,35,1,0,0,0,294,295,5,8,0,0,295,298,3,24,
        12,0,296,297,5,30,0,0,297,299,3,38,19,0,298,296,1,0,0,0,298,299,
        1,0,0,0,299,37,1,0,0,0,300,305,3,42,21,0,301,302,5,34,0,0,302,304,
        3,42,21,0,303,301,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,
        1,0,0,0,306,39,1,0,0,0,307,305,1,0,0,0,308,309,7,2,0,0,309,41,1,
        0,0,0,310,315,3,46,23,0,311,312,5,36,0,0,312,314,3,46,23,0,313,311,
        1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,43,1,
        0,0,0,317,315,1,0,0,0,318,323,3,48,24,0,319,320,5,36,0,0,320,322,
        3,48,24,0,321,319,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,
        1,0,0,0,324,45,1,0,0,0,325,323,1,0,0,0,326,327,7,3,0,0,327,47,1,
        0,0,0,328,329,7,4,0,0,329,49,1,0,0,0,330,373,5,45,0,0,331,332,3,
        82,41,0,332,333,5,65,0,0,333,373,1,0,0,0,334,373,3,80,40,0,335,373,
        3,82,41,0,336,373,3,76,38,0,337,373,5,48,0,0,338,373,3,84,42,0,339,
        340,5,63,0,0,340,345,3,78,39,0,341,342,5,34,0,0,342,344,3,78,39,
        0,343,341,1,0,0,0,344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,
        0,346,348,1,0,0,0,347,345,1,0,0,0,348,349,5,64,0,0,349,373,1,0,0,
        0,350,351,5,63,0,0,351,356,3,76,38,0,352,353,5,34,0,0,353,355,3,
        76,38,0,354,352,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,357,
        1,0,0,0,357,359,1,0,0,0,358,356,1,0,0,0,359,360,5,64,0,0,360,373,
        1,0,0,0,361,362,5,63,0,0,362,367,3,84,42,0,363,364,5,34,0,0,364,
        366,3,84,42,0,365,363,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,
        368,1,0,0,0,368,370,1,0,0,0,369,367,1,0,0,0,370,371,5,64,0,0,371,
        373,1,0,0,0,372,330,1,0,0,0,372,331,1,0,0,0,372,334,1,0,0,0,372,
        335,1,0,0,0,372,336,1,0,0,0,372,337,1,0,0,0,372,338,1,0,0,0,372,
        339,1,0,0,0,372,350,1,0,0,0,372,361,1,0,0,0,373,51,1,0,0,0,374,375,
        5,10,0,0,375,376,5,28,0,0,376,53,1,0,0,0,377,378,5,16,0,0,378,383,
        3,56,28,0,379,380,5,34,0,0,380,382,3,56,28,0,381,379,1,0,0,0,382,
        385,1,0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,55,1,0,0,0,385,383,
        1,0,0,0,386,388,3,10,5,0,387,389,7,5,0,0,388,387,1,0,0,0,388,389,
        1,0,0,0,389,392,1,0,0,0,390,391,5,46,0,0,391,393,7,6,0,0,392,390,
        1,0,0,0,392,393,1,0,0,0,393,57,1,0,0,0,394,395,5,9,0,0,395,400,3,
        44,22,0,396,397,5,34,0,0,397,399,3,44,22,0,398,396,1,0,0,0,399,402,
        1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,413,1,0,0,0,402,400,
        1,0,0,0,403,404,5,12,0,0,404,409,3,44,22,0,405,406,5,34,0,0,406,
        408,3,44,22,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,
        410,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,412,394,1,0,0,0,412,
        403,1,0,0,0,413,59,1,0,0,0,414,415,5,2,0,0,415,420,3,44,22,0,416,
        417,5,34,0,0,417,419,3,44,22,0,418,416,1,0,0,0,419,422,1,0,0,0,420,
        418,1,0,0,0,420,421,1,0,0,0,421,61,1,0,0,0,422,420,1,0,0,0,423,424,
        5,13,0,0,424,429,3,64,32,0,425,426,5,34,0,0,426,428,3,64,32,0,427,
        425,1,0,0,0,428,431,1,0,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,
        63,1,0,0,0,431,429,1,0,0,0,432,433,3,44,22,0,433,434,5,79,0,0,434,
        435,3,44,22,0,435,65,1,0,0,0,436,437,5,1,0,0,437,438,3,18,9,0,438,
        440,3,84,42,0,439,441,3,72,36,0,440,439,1,0,0,0,440,441,1,0,0,0,
        441,67,1,0,0,0,442,443,5,7,0,0,443,444,3,18,9,0,444,445,3,84,42,
        0,445,69,1,0,0,0,446,447,5,11,0,0,447,448,3,42,21,0,448,71,1,0,0,
        0,449,454,3,74,37,0,450,451,5,34,0,0,451,453,3,74,37,0,452,450,1,
        0,0,0,453,456,1,0,0,0,454,452,1,0,0,0,454,455,1,0,0,0,455,73,1,0,
        0,0,456,454,1,0,0,0,457,458,3,46,23,0,458,459,5,33,0,0,459,460,3,
        50,25,0,460,75,1,0,0,0,461,462,7,7,0,0,462,77,1,0,0,0,463,466,3,
        80,40,0,464,466,3,82,41,0,465,463,1,0,0,0,465,464,1,0,0,0,466,79,
        1,0,0,0,467,469,7,0,0,0,468,467,1,0,0,0,468,469,1,0,0,0,469,470,
        1,0,0,0,470,471,5,29,0,0,471,81,1,0,0,0,472,474,7,0,0,0,473,472,
        1,0,0,0,473,474,1,0,0,0,474,475,1,0,0,0,475,476,5,28,0,0,476,83,
        1,0,0,0,477,478,5,27,0,0,478,85,1,0,0,0,479,480,7,8,0,0,480,87,1,
        0,0,0,481,482,5,5,0,0,482,483,3,90,45,0,483,89,1,0,0,0,484,485,5,
        63,0,0,485,486,3,2,1,0,486,487,5,64,0,0,487,91,1,0,0,0,488,489,5,
        15,0,0,489,493,5,94,0,0,490,491,5,15,0,0,491,493,5,95,0,0,492,488,
        1,0,0,0,492,490,1,0,0,0,493,93,1,0,0,0,494,495,5,3,0,0,495,498,3,
        40,20,0,496,497,5,83,0,0,497,499,3,44,22,0,498,496,1,0,0,0,498,499,
        1,0,0,0,499,509,1,0,0,0,500,501,5,84,0,0,501,506,3,96,48,0,502,503,
        5,34,0,0,503,505,3,96,48,0,504,502,1,0,0,0,505,508,1,0,0,0,506,504,
        1,0,0,0,506,507,1,0,0,0,507,510,1,0,0,0,508,506,1,0,0,0,509,500,
        1,0,0,0,509,510,1,0,0,0,510,95,1,0,0,0,511,512,3,44,22,0,512,513,
        5,33,0,0,513,515,1,0,0,0,514,511,1,0,0,0,514,515,1,0,0,0,515,516,
        1,0,0,0,516,517,3,44,22,0,517,97,1,0,0,0,52,109,116,131,143,152,
        160,164,172,174,179,186,191,198,204,212,214,224,234,237,249,257,
        265,269,278,288,292,298,305,315,323,345,356,367,372,383,388,392,
        400,409,412,420,429,440,454,465,468,473,492,498,506,509,514
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!EsqlBaseParser.__ATN) {
            EsqlBaseParser.__ATN = new antlr.ATNDeserializer().deserialize(EsqlBaseParser._serializedATN);
        }

        return EsqlBaseParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(EsqlBaseParser.literalNames, EsqlBaseParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return EsqlBaseParser.vocabulary;
    }

    private static readonly decisionsToDFA = EsqlBaseParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SingleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_singleStatement;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterSingleStatement) {
             listener.enterSingleStatement(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitSingleStatement) {
             listener.exitSingleStatement(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_query;
    }
    public override copyFrom(ctx: QueryContext): void {
        super.copyFrom(ctx);
    }
}
export class CompositeQueryContext extends QueryContext {
    public constructor(ctx: QueryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public PIPE(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.PIPE, 0)!;
    }
    public processingCommand(): ProcessingCommandContext {
        return this.getRuleContext(0, ProcessingCommandContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterCompositeQuery) {
             listener.enterCompositeQuery(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitCompositeQuery) {
             listener.exitCompositeQuery(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitCompositeQuery) {
            return visitor.visitCompositeQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SingleCommandQueryContext extends QueryContext {
    public constructor(ctx: QueryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public sourceCommand(): SourceCommandContext {
        return this.getRuleContext(0, SourceCommandContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterSingleCommandQuery) {
             listener.enterSingleCommandQuery(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitSingleCommandQuery) {
             listener.exitSingleCommandQuery(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitSingleCommandQuery) {
            return visitor.visitSingleCommandQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public explainCommand(): ExplainCommandContext | null {
        return this.getRuleContext(0, ExplainCommandContext);
    }
    public fromCommand(): FromCommandContext | null {
        return this.getRuleContext(0, FromCommandContext);
    }
    public rowCommand(): RowCommandContext | null {
        return this.getRuleContext(0, RowCommandContext);
    }
    public showCommand(): ShowCommandContext | null {
        return this.getRuleContext(0, ShowCommandContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_sourceCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterSourceCommand) {
             listener.enterSourceCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitSourceCommand) {
             listener.exitSourceCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitSourceCommand) {
            return visitor.visitSourceCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProcessingCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public evalCommand(): EvalCommandContext | null {
        return this.getRuleContext(0, EvalCommandContext);
    }
    public inlinestatsCommand(): InlinestatsCommandContext | null {
        return this.getRuleContext(0, InlinestatsCommandContext);
    }
    public limitCommand(): LimitCommandContext | null {
        return this.getRuleContext(0, LimitCommandContext);
    }
    public keepCommand(): KeepCommandContext | null {
        return this.getRuleContext(0, KeepCommandContext);
    }
    public sortCommand(): SortCommandContext | null {
        return this.getRuleContext(0, SortCommandContext);
    }
    public statsCommand(): StatsCommandContext | null {
        return this.getRuleContext(0, StatsCommandContext);
    }
    public whereCommand(): WhereCommandContext | null {
        return this.getRuleContext(0, WhereCommandContext);
    }
    public dropCommand(): DropCommandContext | null {
        return this.getRuleContext(0, DropCommandContext);
    }
    public renameCommand(): RenameCommandContext | null {
        return this.getRuleContext(0, RenameCommandContext);
    }
    public dissectCommand(): DissectCommandContext | null {
        return this.getRuleContext(0, DissectCommandContext);
    }
    public grokCommand(): GrokCommandContext | null {
        return this.getRuleContext(0, GrokCommandContext);
    }
    public enrichCommand(): EnrichCommandContext | null {
        return this.getRuleContext(0, EnrichCommandContext);
    }
    public mvExpandCommand(): MvExpandCommandContext | null {
        return this.getRuleContext(0, MvExpandCommandContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_processingCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterProcessingCommand) {
             listener.enterProcessingCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitProcessingCommand) {
             listener.exitProcessingCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitProcessingCommand) {
            return visitor.visitProcessingCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_whereCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterWhereCommand) {
             listener.enterWhereCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitWhereCommand) {
             listener.exitWhereCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitWhereCommand) {
            return visitor.visitWhereCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.NOT, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterLogicalNot) {
             listener.enterLogicalNot(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitLogicalNot) {
             listener.exitLogicalNot(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanDefaultContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterBooleanDefault) {
             listener.enterBooleanDefault(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitBooleanDefault) {
             listener.exitBooleanDefault(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanDefault) {
            return visitor.visitBooleanDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IsNullContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.IS, 0)!;
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.NULL, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.NOT, 0);
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterIsNull) {
             listener.enterIsNull(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitIsNull) {
             listener.exitIsNull(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitIsNull) {
            return visitor.visitIsNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RegexExpressionContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public regexBooleanExpression(): RegexBooleanExpressionContext {
        return this.getRuleContext(0, RegexBooleanExpressionContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterRegexExpression) {
             listener.enterRegexExpression(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitRegexExpression) {
             listener.exitRegexExpression(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitRegexExpression) {
            return visitor.visitRegexExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalInContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.IN, 0)!;
    }
    public LP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.LP, 0)!;
    }
    public RP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.RP, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.NOT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterLogicalIn) {
             listener.enterLogicalIn(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitLogicalIn) {
             listener.exitLogicalIn(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalIn) {
            return visitor.visitLogicalIn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalBinaryContext extends BooleanExpressionContext {
    public _left?: BooleanExpressionContext;
    public _operator?: Token | null;
    public _right?: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.OR, 0);
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterLogicalBinary) {
             listener.enterLogicalBinary(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitLogicalBinary) {
             listener.exitLogicalBinary(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RegexBooleanExpressionContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _pattern?: StringContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.LIKE, 0);
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.NOT, 0);
    }
    public RLIKE(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.RLIKE, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_regexBooleanExpression;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterRegexBooleanExpression) {
             listener.enterRegexBooleanExpression(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitRegexBooleanExpression) {
             listener.exitRegexBooleanExpression(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitRegexBooleanExpression) {
            return visitor.visitRegexBooleanExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public operatorExpression(): OperatorExpressionContext {
        return this.getRuleContext(0, OperatorExpressionContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterValueExpressionDefault) {
             listener.enterValueExpressionDefault(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitValueExpressionDefault) {
             listener.exitValueExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends ValueExpressionContext {
    public _left?: OperatorExpressionContext;
    public _right?: OperatorExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public operatorExpression(): OperatorExpressionContext[];
    public operatorExpression(i: number): OperatorExpressionContext | null;
    public operatorExpression(i?: number): OperatorExpressionContext[] | OperatorExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OperatorExpressionContext);
        }

        return this.getRuleContext(i, OperatorExpressionContext);
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_operatorExpression;
    }
    public override copyFrom(ctx: OperatorExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class OperatorExpressionDefaultContext extends OperatorExpressionContext {
    public constructor(ctx: OperatorExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterOperatorExpressionDefault) {
             listener.enterOperatorExpressionDefault(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitOperatorExpressionDefault) {
             listener.exitOperatorExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitOperatorExpressionDefault) {
            return visitor.visitOperatorExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends OperatorExpressionContext {
    public _left?: OperatorExpressionContext;
    public _operator?: Token | null;
    public _right?: OperatorExpressionContext;
    public constructor(ctx: OperatorExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public operatorExpression(): OperatorExpressionContext[];
    public operatorExpression(i: number): OperatorExpressionContext | null;
    public operatorExpression(i?: number): OperatorExpressionContext[] | OperatorExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OperatorExpressionContext);
        }

        return this.getRuleContext(i, OperatorExpressionContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PERCENT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.MINUS, 0);
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends OperatorExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: OperatorExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public operatorExpression(): OperatorExpressionContext {
        return this.getRuleContext(0, OperatorExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PLUS, 0);
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public constant(): ConstantContext {
        return this.getRuleContext(0, ConstantContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterConstantDefault) {
             listener.enterConstantDefault(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitConstantDefault) {
             listener.exitConstantDefault(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitConstantDefault) {
            return visitor.visitConstantDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.LP, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public RP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.RP, 0)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionExpression(): FunctionExpressionContext {
        return this.getRuleContext(0, FunctionExpressionContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterFunction) {
             listener.enterFunction(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitFunction) {
             listener.exitFunction(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.LP, 0)!;
    }
    public RP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.RP, 0)!;
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.ASTERISK, 0);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_functionExpression;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterFunctionExpression) {
             listener.enterFunctionExpression(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitFunctionExpression) {
             listener.exitFunctionExpression(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROW(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.ROW, 0)!;
    }
    public fields(): FieldsContext {
        return this.getRuleContext(0, FieldsContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_rowCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterRowCommand) {
             listener.enterRowCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitRowCommand) {
             listener.exitRowCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitRowCommand) {
            return visitor.visitRowCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public field(): FieldContext[];
    public field(i: number): FieldContext | null;
    public field(i?: number): FieldContext[] | FieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }

        return this.getRuleContext(i, FieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_fields;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterFields) {
             listener.enterFields(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitFields) {
             listener.exitFields(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitFields) {
            return visitor.visitFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.ASSIGN, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_field;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterField) {
             listener.enterField(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitField) {
             listener.exitField(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitField) {
            return visitor.visitField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.FROM, 0)!;
    }
    public fromIdentifier(): FromIdentifierContext[];
    public fromIdentifier(i: number): FromIdentifierContext | null;
    public fromIdentifier(i?: number): FromIdentifierContext[] | FromIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FromIdentifierContext);
        }

        return this.getRuleContext(i, FromIdentifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public metadata(): MetadataContext | null {
        return this.getRuleContext(0, MetadataContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_fromCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterFromCommand) {
             listener.enterFromCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitFromCommand) {
             listener.exitFromCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitFromCommand) {
            return visitor.visitFromCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MetadataContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPENING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.OPENING_BRACKET, 0)!;
    }
    public METADATA(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.METADATA, 0)!;
    }
    public fromIdentifier(): FromIdentifierContext[];
    public fromIdentifier(i: number): FromIdentifierContext | null;
    public fromIdentifier(i?: number): FromIdentifierContext[] | FromIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FromIdentifierContext);
        }

        return this.getRuleContext(i, FromIdentifierContext);
    }
    public CLOSING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.CLOSING_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_metadata;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterMetadata) {
             listener.enterMetadata(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitMetadata) {
             listener.exitMetadata(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitMetadata) {
            return visitor.visitMetadata(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EvalCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EVAL(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.EVAL, 0)!;
    }
    public fields(): FieldsContext {
        return this.getRuleContext(0, FieldsContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_evalCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterEvalCommand) {
             listener.enterEvalCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitEvalCommand) {
             listener.exitEvalCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitEvalCommand) {
            return visitor.visitEvalCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STATS(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.STATS, 0)!;
    }
    public fields(): FieldsContext | null {
        return this.getRuleContext(0, FieldsContext);
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.BY, 0);
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_statsCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterStatsCommand) {
             listener.enterStatsCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitStatsCommand) {
             listener.exitStatsCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitStatsCommand) {
            return visitor.visitStatsCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InlinestatsCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INLINESTATS(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.INLINESTATS, 0)!;
    }
    public fields(): FieldsContext {
        return this.getRuleContext(0, FieldsContext)!;
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.BY, 0);
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_inlinestatsCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterInlinestatsCommand) {
             listener.enterInlinestatsCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitInlinestatsCommand) {
             listener.exitInlinestatsCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitInlinestatsCommand) {
            return visitor.visitInlinestatsCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_grouping;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterGrouping) {
             listener.enterGrouping(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitGrouping) {
             listener.exitGrouping(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitGrouping) {
            return visitor.visitGrouping(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM_UNQUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.FROM_UNQUOTED_IDENTIFIER, 0);
    }
    public QUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.QUOTED_IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_fromIdentifier;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterFromIdentifier) {
             listener.enterFromIdentifier(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitFromIdentifier) {
             listener.exitFromIdentifier(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitFromIdentifier) {
            return visitor.visitFromIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.DOT);
    	} else {
    		return this.getToken(EsqlBaseParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_qualifiedName;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNamePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPattern(): IdentifierPatternContext[];
    public identifierPattern(i: number): IdentifierPatternContext | null;
    public identifierPattern(i?: number): IdentifierPatternContext[] | IdentifierPatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierPatternContext);
        }

        return this.getRuleContext(i, IdentifierPatternContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.DOT);
    	} else {
    		return this.getToken(EsqlBaseParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_qualifiedNamePattern;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterQualifiedNamePattern) {
             listener.enterQualifiedNamePattern(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitQualifiedNamePattern) {
             listener.exitQualifiedNamePattern(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedNamePattern) {
            return visitor.visitQualifiedNamePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNQUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.UNQUOTED_IDENTIFIER, 0);
    }
    public QUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.QUOTED_IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_identifier;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROJECT_UNQUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PROJECT_UNQUOTED_IDENTIFIER, 0);
    }
    public QUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.QUOTED_IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_identifierPattern;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterIdentifierPattern) {
             listener.enterIdentifierPattern(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitIdentifierPattern) {
             listener.exitIdentifierPattern(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierPattern) {
            return visitor.visitIdentifierPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_constant;
    }
    public override copyFrom(ctx: ConstantContext): void {
        super.copyFrom(ctx);
    }
}
export class BooleanArrayLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OPENING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.OPENING_BRACKET, 0)!;
    }
    public booleanValue(): BooleanValueContext[];
    public booleanValue(i: number): BooleanValueContext | null;
    public booleanValue(i?: number): BooleanValueContext[] | BooleanValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanValueContext);
        }

        return this.getRuleContext(i, BooleanValueContext);
    }
    public CLOSING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.CLOSING_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterBooleanArrayLiteral) {
             listener.enterBooleanArrayLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitBooleanArrayLiteral) {
             listener.exitBooleanArrayLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanArrayLiteral) {
            return visitor.visitBooleanArrayLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecimalLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public decimalValue(): DecimalValueContext {
        return this.getRuleContext(0, DecimalValueContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.NULL, 0)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QualifiedIntegerLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public integerValue(): IntegerValueContext {
        return this.getRuleContext(0, IntegerValueContext)!;
    }
    public UNQUOTED_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.UNQUOTED_IDENTIFIER, 0)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterQualifiedIntegerLiteral) {
             listener.enterQualifiedIntegerLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitQualifiedIntegerLiteral) {
             listener.exitQualifiedIntegerLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedIntegerLiteral) {
            return visitor.visitQualifiedIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringArrayLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OPENING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.OPENING_BRACKET, 0)!;
    }
    public string_(): StringContext[];
    public string_(i: number): StringContext | null;
    public string_(i?: number): StringContext[] | StringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }

        return this.getRuleContext(i, StringContext);
    }
    public CLOSING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.CLOSING_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterStringArrayLiteral) {
             listener.enterStringArrayLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitStringArrayLiteral) {
             listener.exitStringArrayLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitStringArrayLiteral) {
            return visitor.visitStringArrayLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericArrayLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OPENING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.OPENING_BRACKET, 0)!;
    }
    public numericValue(): NumericValueContext[];
    public numericValue(i: number): NumericValueContext | null;
    public numericValue(i?: number): NumericValueContext[] | NumericValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NumericValueContext);
        }

        return this.getRuleContext(i, NumericValueContext);
    }
    public CLOSING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.CLOSING_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterNumericArrayLiteral) {
             listener.enterNumericArrayLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitNumericArrayLiteral) {
             listener.exitNumericArrayLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitNumericArrayLiteral) {
            return visitor.visitNumericArrayLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InputParamContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PARAM(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.PARAM, 0)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterInputParam) {
             listener.enterInputParam(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitInputParam) {
             listener.exitInputParam(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitInputParam) {
            return visitor.visitInputParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntegerLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public integerValue(): IntegerValueContext {
        return this.getRuleContext(0, IntegerValueContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterIntegerLiteral) {
             listener.enterIntegerLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitIntegerLiteral) {
             listener.exitIntegerLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanValue(): BooleanValueContext {
        return this.getRuleContext(0, BooleanValueContext)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.LIMIT, 0)!;
    }
    public INTEGER_LITERAL(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.INTEGER_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_limitCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterLimitCommand) {
             listener.enterLimitCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitLimitCommand) {
             listener.exitLimitCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitCommand) {
            return visitor.visitLimitCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SORT(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.SORT, 0)!;
    }
    public orderExpression(): OrderExpressionContext[];
    public orderExpression(i: number): OrderExpressionContext | null;
    public orderExpression(i?: number): OrderExpressionContext[] | OrderExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderExpressionContext);
        }

        return this.getRuleContext(i, OrderExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_sortCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterSortCommand) {
             listener.enterSortCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitSortCommand) {
             listener.exitSortCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitSortCommand) {
            return visitor.visitSortCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderExpressionContext extends antlr.ParserRuleContext {
    public _ordering?: Token | null;
    public _nullOrdering?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.NULLS, 0);
    }
    public ASC(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.ASC, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.DESC, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.FIRST, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.LAST, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_orderExpression;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterOrderExpression) {
             listener.enterOrderExpression(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitOrderExpression) {
             listener.exitOrderExpression(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderExpression) {
            return visitor.visitOrderExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeepCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KEEP(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.KEEP, 0);
    }
    public qualifiedNamePattern(): QualifiedNamePatternContext[];
    public qualifiedNamePattern(i: number): QualifiedNamePatternContext | null;
    public qualifiedNamePattern(i?: number): QualifiedNamePatternContext[] | QualifiedNamePatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNamePatternContext);
        }

        return this.getRuleContext(i, QualifiedNamePatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public PROJECT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PROJECT, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_keepCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterKeepCommand) {
             listener.enterKeepCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitKeepCommand) {
             listener.exitKeepCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitKeepCommand) {
            return visitor.visitKeepCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.DROP, 0)!;
    }
    public qualifiedNamePattern(): QualifiedNamePatternContext[];
    public qualifiedNamePattern(i: number): QualifiedNamePatternContext | null;
    public qualifiedNamePattern(i?: number): QualifiedNamePatternContext[] | QualifiedNamePatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNamePatternContext);
        }

        return this.getRuleContext(i, QualifiedNamePatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_dropCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterDropCommand) {
             listener.enterDropCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitDropCommand) {
             listener.exitDropCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitDropCommand) {
            return visitor.visitDropCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.RENAME, 0)!;
    }
    public renameClause(): RenameClauseContext[];
    public renameClause(i: number): RenameClauseContext | null;
    public renameClause(i?: number): RenameClauseContext[] | RenameClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RenameClauseContext);
        }

        return this.getRuleContext(i, RenameClauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_renameCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterRenameCommand) {
             listener.enterRenameCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitRenameCommand) {
             listener.exitRenameCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitRenameCommand) {
            return visitor.visitRenameCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameClauseContext extends antlr.ParserRuleContext {
    public _oldName?: QualifiedNamePatternContext;
    public _newName?: QualifiedNamePatternContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.AS, 0)!;
    }
    public qualifiedNamePattern(): QualifiedNamePatternContext[];
    public qualifiedNamePattern(i: number): QualifiedNamePatternContext | null;
    public qualifiedNamePattern(i?: number): QualifiedNamePatternContext[] | QualifiedNamePatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNamePatternContext);
        }

        return this.getRuleContext(i, QualifiedNamePatternContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_renameClause;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterRenameClause) {
             listener.enterRenameClause(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitRenameClause) {
             listener.exitRenameClause(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitRenameClause) {
            return visitor.visitRenameClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DissectCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DISSECT(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.DISSECT, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public commandOptions(): CommandOptionsContext | null {
        return this.getRuleContext(0, CommandOptionsContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_dissectCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterDissectCommand) {
             listener.enterDissectCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitDissectCommand) {
             listener.exitDissectCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitDissectCommand) {
            return visitor.visitDissectCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GrokCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GROK(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.GROK, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_grokCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterGrokCommand) {
             listener.enterGrokCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitGrokCommand) {
             listener.exitGrokCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitGrokCommand) {
            return visitor.visitGrokCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MvExpandCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MV_EXPAND(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.MV_EXPAND, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_mvExpandCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterMvExpandCommand) {
             listener.enterMvExpandCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitMvExpandCommand) {
             listener.exitMvExpandCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitMvExpandCommand) {
            return visitor.visitMvExpandCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public commandOption(): CommandOptionContext[];
    public commandOption(i: number): CommandOptionContext | null;
    public commandOption(i?: number): CommandOptionContext[] | CommandOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandOptionContext);
        }

        return this.getRuleContext(i, CommandOptionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_commandOptions;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterCommandOptions) {
             listener.enterCommandOptions(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitCommandOptions) {
             listener.exitCommandOptions(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitCommandOptions) {
            return visitor.visitCommandOptions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.ASSIGN, 0)!;
    }
    public constant(): ConstantContext {
        return this.getRuleContext(0, ConstantContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_commandOption;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterCommandOption) {
             listener.enterCommandOption(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitCommandOption) {
             listener.exitCommandOption(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitCommandOption) {
            return visitor.visitCommandOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_booleanValue;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterBooleanValue) {
             listener.enterBooleanValue(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitBooleanValue) {
             listener.exitBooleanValue(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumericValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public decimalValue(): DecimalValueContext | null {
        return this.getRuleContext(0, DecimalValueContext);
    }
    public integerValue(): IntegerValueContext | null {
        return this.getRuleContext(0, IntegerValueContext);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_numericValue;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterNumericValue) {
             listener.enterNumericValue(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitNumericValue) {
             listener.exitNumericValue(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitNumericValue) {
            return visitor.visitNumericValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.DECIMAL_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_decimalValue;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterDecimalValue) {
             listener.enterDecimalValue(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitDecimalValue) {
             listener.exitDecimalValue(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitDecimalValue) {
            return visitor.visitDecimalValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntegerValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.INTEGER_LITERAL, 0)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_integerValue;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterIntegerValue) {
             listener.enterIntegerValue(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitIntegerValue) {
             listener.exitIntegerValue(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitIntegerValue) {
            return visitor.visitIntegerValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_string;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.EQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.NEQ, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.LT, 0);
    }
    public LTE(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.LTE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.GT, 0);
    }
    public GTE(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.GTE, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.EXPLAIN, 0)!;
    }
    public subqueryExpression(): SubqueryExpressionContext {
        return this.getRuleContext(0, SubqueryExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_explainCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterExplainCommand) {
             listener.enterExplainCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitExplainCommand) {
             listener.exitExplainCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitExplainCommand) {
            return visitor.visitExplainCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubqueryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPENING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.OPENING_BRACKET, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public CLOSING_BRACKET(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.CLOSING_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_subqueryExpression;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterSubqueryExpression) {
             listener.enterSubqueryExpression(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitSubqueryExpression) {
             listener.exitSubqueryExpression(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_showCommand;
    }
    public override copyFrom(ctx: ShowCommandContext): void {
        super.copyFrom(ctx);
    }
}
export class ShowInfoContext extends ShowCommandContext {
    public constructor(ctx: ShowCommandContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.SHOW, 0)!;
    }
    public INFO(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.INFO, 0)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterShowInfo) {
             listener.enterShowInfo(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitShowInfo) {
             listener.exitShowInfo(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitShowInfo) {
            return visitor.visitShowInfo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowFunctionsContext extends ShowCommandContext {
    public constructor(ctx: ShowCommandContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.SHOW, 0)!;
    }
    public FUNCTIONS(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.FUNCTIONS, 0)!;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterShowFunctions) {
             listener.enterShowFunctions(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitShowFunctions) {
             listener.exitShowFunctions(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitShowFunctions) {
            return visitor.visitShowFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnrichCommandContext extends antlr.ParserRuleContext {
    public _policyName?: FromIdentifierContext;
    public _matchField?: QualifiedNamePatternContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENRICH(): antlr.TerminalNode {
        return this.getToken(EsqlBaseParser.ENRICH, 0)!;
    }
    public fromIdentifier(): FromIdentifierContext {
        return this.getRuleContext(0, FromIdentifierContext)!;
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.ON, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.WITH, 0);
    }
    public enrichWithClause(): EnrichWithClauseContext[];
    public enrichWithClause(i: number): EnrichWithClauseContext | null;
    public enrichWithClause(i?: number): EnrichWithClauseContext[] | EnrichWithClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnrichWithClauseContext);
        }

        return this.getRuleContext(i, EnrichWithClauseContext);
    }
    public qualifiedNamePattern(): QualifiedNamePatternContext | null {
        return this.getRuleContext(0, QualifiedNamePatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(EsqlBaseParser.COMMA);
    	} else {
    		return this.getToken(EsqlBaseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_enrichCommand;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterEnrichCommand) {
             listener.enterEnrichCommand(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitEnrichCommand) {
             listener.exitEnrichCommand(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitEnrichCommand) {
            return visitor.visitEnrichCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnrichWithClauseContext extends antlr.ParserRuleContext {
    public _newName?: QualifiedNamePatternContext;
    public _enrichField?: QualifiedNamePatternContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedNamePattern(): QualifiedNamePatternContext[];
    public qualifiedNamePattern(i: number): QualifiedNamePatternContext | null;
    public qualifiedNamePattern(i?: number): QualifiedNamePatternContext[] | QualifiedNamePatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNamePatternContext);
        }

        return this.getRuleContext(i, QualifiedNamePatternContext);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(EsqlBaseParser.ASSIGN, 0);
    }
    public override get ruleIndex(): number {
        return EsqlBaseParser.RULE_enrichWithClause;
    }
    public override enterRule(listener: EsqlBaseParserListener): void {
        if(listener.enterEnrichWithClause) {
             listener.enterEnrichWithClause(this);
        }
    }
    public override exitRule(listener: EsqlBaseParserListener): void {
        if(listener.exitEnrichWithClause) {
             listener.exitEnrichWithClause(this);
        }
    }
    public override accept<Result>(visitor: EsqlBaseParserVisitor<Result>): Result | null {
        if (visitor.visitEnrichWithClause) {
            return visitor.visitEnrichWithClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
