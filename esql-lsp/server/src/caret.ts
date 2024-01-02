import {ParseTree, TerminalNode} from "antlr4ng";

export type CaretPosition = { line: number, column: number };

// NOTE: this code does not account for tokens that span multiple lines.
export function computeCaretTokenIndex(parseTree: ParseTree | null, caretPosition: CaretPosition): number | undefined {
	if (!parseTree) {
		return undefined;
	}
	
	if(parseTree instanceof TerminalNode) {
        return computeCaretTokenIndexOfTerminalNode(parseTree, caretPosition);
    } else {
        return computeCaretTokenIndexOfChildNode(parseTree, caretPosition);
    }
}

function computeCaretTokenIndexOfTerminalNode(parseTree: TerminalNode, caretPosition: CaretPosition): number | undefined {
    let start = parseTree.symbol.column;
    let stop = parseTree.symbol.column + parseTree.getText().length;
    if (parseTree.symbol.line == caretPosition.line && start <= caretPosition.column && stop >= caretPosition.column) {
        return parseTree.symbol.tokenIndex;
    } else {
        return undefined;
    }
}

function computeCaretTokenIndexOfChildNode(parseTree: ParseTree, caretPosition: CaretPosition): number | undefined {
    for (let i = 0; i < parseTree.getChildCount(); i++) {
        let index = computeCaretTokenIndex(parseTree.getChild(i), caretPosition);
        if (index !== undefined) {
            return index;
        }
    }
    return undefined;
}