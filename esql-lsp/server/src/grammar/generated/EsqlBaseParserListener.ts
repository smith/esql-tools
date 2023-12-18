// Generated from ./src/grammar/EsqlBaseParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SingleStatementContext } from "./EsqlBaseParser.js";
import { CompositeQueryContext } from "./EsqlBaseParser.js";
import { SingleCommandQueryContext } from "./EsqlBaseParser.js";
import { SourceCommandContext } from "./EsqlBaseParser.js";
import { ProcessingCommandContext } from "./EsqlBaseParser.js";
import { WhereCommandContext } from "./EsqlBaseParser.js";
import { LogicalNotContext } from "./EsqlBaseParser.js";
import { BooleanDefaultContext } from "./EsqlBaseParser.js";
import { IsNullContext } from "./EsqlBaseParser.js";
import { RegexExpressionContext } from "./EsqlBaseParser.js";
import { LogicalInContext } from "./EsqlBaseParser.js";
import { LogicalBinaryContext } from "./EsqlBaseParser.js";
import { RegexBooleanExpressionContext } from "./EsqlBaseParser.js";
import { ValueExpressionDefaultContext } from "./EsqlBaseParser.js";
import { ComparisonContext } from "./EsqlBaseParser.js";
import { OperatorExpressionDefaultContext } from "./EsqlBaseParser.js";
import { ArithmeticBinaryContext } from "./EsqlBaseParser.js";
import { ArithmeticUnaryContext } from "./EsqlBaseParser.js";
import { ConstantDefaultContext } from "./EsqlBaseParser.js";
import { DereferenceContext } from "./EsqlBaseParser.js";
import { FunctionContext } from "./EsqlBaseParser.js";
import { ParenthesizedExpressionContext } from "./EsqlBaseParser.js";
import { FunctionExpressionContext } from "./EsqlBaseParser.js";
import { RowCommandContext } from "./EsqlBaseParser.js";
import { FieldsContext } from "./EsqlBaseParser.js";
import { FieldContext } from "./EsqlBaseParser.js";
import { FromCommandContext } from "./EsqlBaseParser.js";
import { MetadataContext } from "./EsqlBaseParser.js";
import { EvalCommandContext } from "./EsqlBaseParser.js";
import { StatsCommandContext } from "./EsqlBaseParser.js";
import { InlinestatsCommandContext } from "./EsqlBaseParser.js";
import { GroupingContext } from "./EsqlBaseParser.js";
import { FromIdentifierContext } from "./EsqlBaseParser.js";
import { QualifiedNameContext } from "./EsqlBaseParser.js";
import { QualifiedNamePatternContext } from "./EsqlBaseParser.js";
import { IdentifierContext } from "./EsqlBaseParser.js";
import { IdentifierPatternContext } from "./EsqlBaseParser.js";
import { NullLiteralContext } from "./EsqlBaseParser.js";
import { QualifiedIntegerLiteralContext } from "./EsqlBaseParser.js";
import { DecimalLiteralContext } from "./EsqlBaseParser.js";
import { IntegerLiteralContext } from "./EsqlBaseParser.js";
import { BooleanLiteralContext } from "./EsqlBaseParser.js";
import { InputParamContext } from "./EsqlBaseParser.js";
import { StringLiteralContext } from "./EsqlBaseParser.js";
import { NumericArrayLiteralContext } from "./EsqlBaseParser.js";
import { BooleanArrayLiteralContext } from "./EsqlBaseParser.js";
import { StringArrayLiteralContext } from "./EsqlBaseParser.js";
import { LimitCommandContext } from "./EsqlBaseParser.js";
import { SortCommandContext } from "./EsqlBaseParser.js";
import { OrderExpressionContext } from "./EsqlBaseParser.js";
import { KeepCommandContext } from "./EsqlBaseParser.js";
import { DropCommandContext } from "./EsqlBaseParser.js";
import { RenameCommandContext } from "./EsqlBaseParser.js";
import { RenameClauseContext } from "./EsqlBaseParser.js";
import { DissectCommandContext } from "./EsqlBaseParser.js";
import { GrokCommandContext } from "./EsqlBaseParser.js";
import { MvExpandCommandContext } from "./EsqlBaseParser.js";
import { CommandOptionsContext } from "./EsqlBaseParser.js";
import { CommandOptionContext } from "./EsqlBaseParser.js";
import { BooleanValueContext } from "./EsqlBaseParser.js";
import { NumericValueContext } from "./EsqlBaseParser.js";
import { DecimalValueContext } from "./EsqlBaseParser.js";
import { IntegerValueContext } from "./EsqlBaseParser.js";
import { StringContext } from "./EsqlBaseParser.js";
import { ComparisonOperatorContext } from "./EsqlBaseParser.js";
import { ExplainCommandContext } from "./EsqlBaseParser.js";
import { SubqueryExpressionContext } from "./EsqlBaseParser.js";
import { ShowInfoContext } from "./EsqlBaseParser.js";
import { ShowFunctionsContext } from "./EsqlBaseParser.js";
import { EnrichCommandContext } from "./EsqlBaseParser.js";
import { EnrichWithClauseContext } from "./EsqlBaseParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EsqlBaseParser`.
 */
export class EsqlBaseParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `EsqlBaseParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `compositeQuery`
     * labeled alternative in `EsqlBaseParser.query`.
     * @param ctx the parse tree
     */
    enterCompositeQuery?: (ctx: CompositeQueryContext) => void;
    /**
     * Exit a parse tree produced by the `compositeQuery`
     * labeled alternative in `EsqlBaseParser.query`.
     * @param ctx the parse tree
     */
    exitCompositeQuery?: (ctx: CompositeQueryContext) => void;
    /**
     * Enter a parse tree produced by the `singleCommandQuery`
     * labeled alternative in `EsqlBaseParser.query`.
     * @param ctx the parse tree
     */
    enterSingleCommandQuery?: (ctx: SingleCommandQueryContext) => void;
    /**
     * Exit a parse tree produced by the `singleCommandQuery`
     * labeled alternative in `EsqlBaseParser.query`.
     * @param ctx the parse tree
     */
    exitSingleCommandQuery?: (ctx: SingleCommandQueryContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.sourceCommand`.
     * @param ctx the parse tree
     */
    enterSourceCommand?: (ctx: SourceCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.sourceCommand`.
     * @param ctx the parse tree
     */
    exitSourceCommand?: (ctx: SourceCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.processingCommand`.
     * @param ctx the parse tree
     */
    enterProcessingCommand?: (ctx: ProcessingCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.processingCommand`.
     * @param ctx the parse tree
     */
    exitProcessingCommand?: (ctx: ProcessingCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.whereCommand`.
     * @param ctx the parse tree
     */
    enterWhereCommand?: (ctx: WhereCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.whereCommand`.
     * @param ctx the parse tree
     */
    exitWhereCommand?: (ctx: WhereCommandContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `booleanDefault`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterBooleanDefault?: (ctx: BooleanDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `booleanDefault`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitBooleanDefault?: (ctx: BooleanDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `isNull`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterIsNull?: (ctx: IsNullContext) => void;
    /**
     * Exit a parse tree produced by the `isNull`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitIsNull?: (ctx: IsNullContext) => void;
    /**
     * Enter a parse tree produced by the `regexExpression`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterRegexExpression?: (ctx: RegexExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `regexExpression`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitRegexExpression?: (ctx: RegexExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalIn`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalIn?: (ctx: LogicalInContext) => void;
    /**
     * Exit a parse tree produced by the `logicalIn`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalIn?: (ctx: LogicalInContext) => void;
    /**
     * Enter a parse tree produced by the `logicalBinary`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `logicalBinary`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.regexBooleanExpression`.
     * @param ctx the parse tree
     */
    enterRegexBooleanExpression?: (ctx: RegexBooleanExpressionContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.regexBooleanExpression`.
     * @param ctx the parse tree
     */
    exitRegexBooleanExpression?: (ctx: RegexBooleanExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `EsqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `EsqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `EsqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `EsqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `operatorExpressionDefault`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     */
    enterOperatorExpressionDefault?: (ctx: OperatorExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `operatorExpressionDefault`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     */
    exitOperatorExpressionDefault?: (ctx: OperatorExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `constantDefault`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `constantDefault`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `function`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;
    /**
     * Exit a parse tree produced by the `function`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.functionExpression`.
     * @param ctx the parse tree
     */
    enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.functionExpression`.
     * @param ctx the parse tree
     */
    exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.rowCommand`.
     * @param ctx the parse tree
     */
    enterRowCommand?: (ctx: RowCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.rowCommand`.
     * @param ctx the parse tree
     */
    exitRowCommand?: (ctx: RowCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.fields`.
     * @param ctx the parse tree
     */
    enterFields?: (ctx: FieldsContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.fields`.
     * @param ctx the parse tree
     */
    exitFields?: (ctx: FieldsContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.field`.
     * @param ctx the parse tree
     */
    enterField?: (ctx: FieldContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.field`.
     * @param ctx the parse tree
     */
    exitField?: (ctx: FieldContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.fromCommand`.
     * @param ctx the parse tree
     */
    enterFromCommand?: (ctx: FromCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.fromCommand`.
     * @param ctx the parse tree
     */
    exitFromCommand?: (ctx: FromCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.metadata`.
     * @param ctx the parse tree
     */
    enterMetadata?: (ctx: MetadataContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.metadata`.
     * @param ctx the parse tree
     */
    exitMetadata?: (ctx: MetadataContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.evalCommand`.
     * @param ctx the parse tree
     */
    enterEvalCommand?: (ctx: EvalCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.evalCommand`.
     * @param ctx the parse tree
     */
    exitEvalCommand?: (ctx: EvalCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.statsCommand`.
     * @param ctx the parse tree
     */
    enterStatsCommand?: (ctx: StatsCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.statsCommand`.
     * @param ctx the parse tree
     */
    exitStatsCommand?: (ctx: StatsCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.inlinestatsCommand`.
     * @param ctx the parse tree
     */
    enterInlinestatsCommand?: (ctx: InlinestatsCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.inlinestatsCommand`.
     * @param ctx the parse tree
     */
    exitInlinestatsCommand?: (ctx: InlinestatsCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.grouping`.
     * @param ctx the parse tree
     */
    enterGrouping?: (ctx: GroupingContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.grouping`.
     * @param ctx the parse tree
     */
    exitGrouping?: (ctx: GroupingContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.fromIdentifier`.
     * @param ctx the parse tree
     */
    enterFromIdentifier?: (ctx: FromIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.fromIdentifier`.
     * @param ctx the parse tree
     */
    exitFromIdentifier?: (ctx: FromIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.qualifiedNamePattern`.
     * @param ctx the parse tree
     */
    enterQualifiedNamePattern?: (ctx: QualifiedNamePatternContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.qualifiedNamePattern`.
     * @param ctx the parse tree
     */
    exitQualifiedNamePattern?: (ctx: QualifiedNamePatternContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.identifierPattern`.
     * @param ctx the parse tree
     */
    enterIdentifierPattern?: (ctx: IdentifierPatternContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.identifierPattern`.
     * @param ctx the parse tree
     */
    exitIdentifierPattern?: (ctx: IdentifierPatternContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `qualifiedIntegerLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterQualifiedIntegerLiteral?: (ctx: QualifiedIntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `qualifiedIntegerLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitQualifiedIntegerLiteral?: (ctx: QualifiedIntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `inputParam`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterInputParam?: (ctx: InputParamContext) => void;
    /**
     * Exit a parse tree produced by the `inputParam`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitInputParam?: (ctx: InputParamContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `numericArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterNumericArrayLiteral?: (ctx: NumericArrayLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitNumericArrayLiteral?: (ctx: NumericArrayLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterBooleanArrayLiteral?: (ctx: BooleanArrayLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitBooleanArrayLiteral?: (ctx: BooleanArrayLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `stringArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    enterStringArrayLiteral?: (ctx: StringArrayLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     */
    exitStringArrayLiteral?: (ctx: StringArrayLiteralContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.limitCommand`.
     * @param ctx the parse tree
     */
    enterLimitCommand?: (ctx: LimitCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.limitCommand`.
     * @param ctx the parse tree
     */
    exitLimitCommand?: (ctx: LimitCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.sortCommand`.
     * @param ctx the parse tree
     */
    enterSortCommand?: (ctx: SortCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.sortCommand`.
     * @param ctx the parse tree
     */
    exitSortCommand?: (ctx: SortCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.orderExpression`.
     * @param ctx the parse tree
     */
    enterOrderExpression?: (ctx: OrderExpressionContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.orderExpression`.
     * @param ctx the parse tree
     */
    exitOrderExpression?: (ctx: OrderExpressionContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.keepCommand`.
     * @param ctx the parse tree
     */
    enterKeepCommand?: (ctx: KeepCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.keepCommand`.
     * @param ctx the parse tree
     */
    exitKeepCommand?: (ctx: KeepCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.dropCommand`.
     * @param ctx the parse tree
     */
    enterDropCommand?: (ctx: DropCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.dropCommand`.
     * @param ctx the parse tree
     */
    exitDropCommand?: (ctx: DropCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.renameCommand`.
     * @param ctx the parse tree
     */
    enterRenameCommand?: (ctx: RenameCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.renameCommand`.
     * @param ctx the parse tree
     */
    exitRenameCommand?: (ctx: RenameCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.renameClause`.
     * @param ctx the parse tree
     */
    enterRenameClause?: (ctx: RenameClauseContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.renameClause`.
     * @param ctx the parse tree
     */
    exitRenameClause?: (ctx: RenameClauseContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.dissectCommand`.
     * @param ctx the parse tree
     */
    enterDissectCommand?: (ctx: DissectCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.dissectCommand`.
     * @param ctx the parse tree
     */
    exitDissectCommand?: (ctx: DissectCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.grokCommand`.
     * @param ctx the parse tree
     */
    enterGrokCommand?: (ctx: GrokCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.grokCommand`.
     * @param ctx the parse tree
     */
    exitGrokCommand?: (ctx: GrokCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.mvExpandCommand`.
     * @param ctx the parse tree
     */
    enterMvExpandCommand?: (ctx: MvExpandCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.mvExpandCommand`.
     * @param ctx the parse tree
     */
    exitMvExpandCommand?: (ctx: MvExpandCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.commandOptions`.
     * @param ctx the parse tree
     */
    enterCommandOptions?: (ctx: CommandOptionsContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.commandOptions`.
     * @param ctx the parse tree
     */
    exitCommandOptions?: (ctx: CommandOptionsContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.commandOption`.
     * @param ctx the parse tree
     */
    enterCommandOption?: (ctx: CommandOptionContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.commandOption`.
     * @param ctx the parse tree
     */
    exitCommandOption?: (ctx: CommandOptionContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.numericValue`.
     * @param ctx the parse tree
     */
    enterNumericValue?: (ctx: NumericValueContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.numericValue`.
     * @param ctx the parse tree
     */
    exitNumericValue?: (ctx: NumericValueContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.decimalValue`.
     * @param ctx the parse tree
     */
    enterDecimalValue?: (ctx: DecimalValueContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.decimalValue`.
     * @param ctx the parse tree
     */
    exitDecimalValue?: (ctx: DecimalValueContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.integerValue`.
     * @param ctx the parse tree
     */
    enterIntegerValue?: (ctx: IntegerValueContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.integerValue`.
     * @param ctx the parse tree
     */
    exitIntegerValue?: (ctx: IntegerValueContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.string`.
     * @param ctx the parse tree
     */
    enterString?: (ctx: StringContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.string`.
     * @param ctx the parse tree
     */
    exitString?: (ctx: StringContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.explainCommand`.
     * @param ctx the parse tree
     */
    enterExplainCommand?: (ctx: ExplainCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.explainCommand`.
     * @param ctx the parse tree
     */
    exitExplainCommand?: (ctx: ExplainCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.subqueryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.subqueryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `showInfo`
     * labeled alternative in `EsqlBaseParser.showCommand`.
     * @param ctx the parse tree
     */
    enterShowInfo?: (ctx: ShowInfoContext) => void;
    /**
     * Exit a parse tree produced by the `showInfo`
     * labeled alternative in `EsqlBaseParser.showCommand`.
     * @param ctx the parse tree
     */
    exitShowInfo?: (ctx: ShowInfoContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `EsqlBaseParser.showCommand`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `EsqlBaseParser.showCommand`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.enrichCommand`.
     * @param ctx the parse tree
     */
    enterEnrichCommand?: (ctx: EnrichCommandContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.enrichCommand`.
     * @param ctx the parse tree
     */
    exitEnrichCommand?: (ctx: EnrichCommandContext) => void;
    /**
     * Enter a parse tree produced by `EsqlBaseParser.enrichWithClause`.
     * @param ctx the parse tree
     */
    enterEnrichWithClause?: (ctx: EnrichWithClauseContext) => void;
    /**
     * Exit a parse tree produced by `EsqlBaseParser.enrichWithClause`.
     * @param ctx the parse tree
     */
    exitEnrichWithClause?: (ctx: EnrichWithClauseContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

