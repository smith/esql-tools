// Generated from ./src/grammar/EsqlBaseParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EsqlBaseParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class EsqlBaseParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `EsqlBaseParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `compositeQuery`
     * labeled alternative in `EsqlBaseParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompositeQuery?: (ctx: CompositeQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `singleCommandQuery`
     * labeled alternative in `EsqlBaseParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleCommandQuery?: (ctx: SingleCommandQueryContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.sourceCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceCommand?: (ctx: SourceCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.processingCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcessingCommand?: (ctx: ProcessingCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.whereCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereCommand?: (ctx: WhereCommandContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `booleanDefault`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanDefault?: (ctx: BooleanDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `isNull`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsNull?: (ctx: IsNullContext) => Result;
    /**
     * Visit a parse tree produced by the `regexExpression`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegexExpression?: (ctx: RegexExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalIn`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalIn?: (ctx: LogicalInContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `EsqlBaseParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.regexBooleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegexBooleanExpression?: (ctx: RegexBooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `EsqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `EsqlBaseParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `operatorExpressionDefault`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperatorExpressionDefault?: (ctx: OperatorExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `EsqlBaseParser.operatorExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `constantDefault`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `function`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `EsqlBaseParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.functionExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.rowCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowCommand?: (ctx: RowCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.fields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFields?: (ctx: FieldsContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField?: (ctx: FieldContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.fromCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromCommand?: (ctx: FromCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.metadata`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMetadata?: (ctx: MetadataContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.evalCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvalCommand?: (ctx: EvalCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.statsCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatsCommand?: (ctx: StatsCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.inlinestatsCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlinestatsCommand?: (ctx: InlinestatsCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.grouping`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping?: (ctx: GroupingContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.fromIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromIdentifier?: (ctx: FromIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.qualifiedNamePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNamePattern?: (ctx: QualifiedNamePatternContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.identifierPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierPattern?: (ctx: IdentifierPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `qualifiedIntegerLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedIntegerLiteral?: (ctx: QualifiedIntegerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `integerLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `inputParam`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInputParam?: (ctx: InputParamContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `numericArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericArrayLiteral?: (ctx: NumericArrayLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `booleanArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanArrayLiteral?: (ctx: BooleanArrayLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `stringArrayLiteral`
     * labeled alternative in `EsqlBaseParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringArrayLiteral?: (ctx: StringArrayLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.limitCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitCommand?: (ctx: LimitCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.sortCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortCommand?: (ctx: SortCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.orderExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderExpression?: (ctx: OrderExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.keepCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeepCommand?: (ctx: KeepCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.dropCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropCommand?: (ctx: DropCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.renameCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameCommand?: (ctx: RenameCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.renameClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameClause?: (ctx: RenameClauseContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.dissectCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDissectCommand?: (ctx: DissectCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.grokCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrokCommand?: (ctx: GrokCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.mvExpandCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMvExpandCommand?: (ctx: MvExpandCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.commandOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandOptions?: (ctx: CommandOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.commandOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandOption?: (ctx: CommandOptionContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.numericValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericValue?: (ctx: NumericValueContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.decimalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalValue?: (ctx: DecimalValueContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.integerValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerValue?: (ctx: IntegerValueContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.explainCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainCommand?: (ctx: ExplainCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.subqueryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `showInfo`
     * labeled alternative in `EsqlBaseParser.showCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowInfo?: (ctx: ShowInfoContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `EsqlBaseParser.showCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.enrichCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnrichCommand?: (ctx: EnrichCommandContext) => Result;
    /**
     * Visit a parse tree produced by `EsqlBaseParser.enrichWithClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnrichWithClause?: (ctx: EnrichWithClauseContext) => Result;
}

