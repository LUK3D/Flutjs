declare class AlignmentGeometry {
    x?: number;
    y?: number;
    val?: string;
    constructor(args: {
        x?: number;
        y?: number;
    });
    negative(): AlignmentGeometry;
    add(other: AlignmentGeometry): AlignmentGeometry;
    multiply(other: AlignmentGeometry): AlignmentGeometry;
    divide(other: AlignmentGeometry): AlignmentGeometry;
}
declare class Alignment extends AlignmentGeometry {
    constructor(args: {
        x?: number;
        y?: number;
    });
    /**The top left corner. */
    topLeft(): Alignment;
    /**The center point along the top edge. */
    topCenter(): Alignment;
    /**The top right corner. */
    topRight(): Alignment;
    /**The center point along the left edge. */
    centerLeft(): Alignment;
    /**The center point, both horizontally and vertically. */
    center(): Alignment;
    /**The center point along the right edge. */
    centerRight(): Alignment;
    /**The center point along the bottom edge. */
    bottomLeft(): Alignment;
    /**The center point along the right edge. */
    bottomCenter(): Alignment;
    /**The center point along the right edge. */
    bottomRight(): Alignment;
    add(other: Alignment): AlignmentGeometry;
}
export { AlignmentGeometry, Alignment };
