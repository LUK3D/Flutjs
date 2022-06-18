import { _Radius } from "../ui/Radius.js";
declare class BorderRadiusGeometry {
    topLeft?: _Radius;
    topRight?: _Radius;
    bottomLeft?: _Radius;
    bottomRight?: _Radius;
    topStart?: _Radius;
    topEnd?: _Radius;
    bottomStart?: _Radius;
    bottomEnd?: _Radius;
    value?: Array<string>;
}
/** Creates a border radius with only the given non-zero values. The other
  corners will be right angles.
  */
declare class _BorderRadius extends BorderRadiusGeometry {
    topLeft?: _Radius;
    topRight?: _Radius;
    bottomLeft?: _Radius;
    bottomRight?: _Radius;
    only(args: {
        topLeft?: _Radius;
        topRight?: _Radius;
        bottomLeft?: _Radius;
        bottomRight?: _Radius;
    }): this;
    /** Creates a border radius where all radii are [radius]. */
    all(radius: _Radius): this;
    /** Creates a border radius where all radii are [Radius.circular(radius)]. */
    circular(radius: number): this;
    /**
     * Creates a vertically symmetric border radius where the top and bottom
     * sides of the rectangle have the same radii.
     */
    vertical(args: {
        top?: _Radius;
        bottom?: _Radius;
    }): this;
    /**
     * Creates a horizontally symmetrical border radius where the left and right
      sides of the rectangle have the same radii.
    
     */
    horizontal(args: {
        left?: _Radius;
        right?: _Radius;
    }): this;
}
declare function BorderRadius(): _BorderRadius;
export { BorderRadiusGeometry, BorderRadius, _BorderRadius };
