/**A radius for either circular or elliptical shapes. */
declare class _Radius {
    value?: string;
    /**
    * A radius with [x] and [y] values set to zero.
    *
    * You can use [Radius.zero] with [RRect] to have right-angle corners.
    * */
    zero: _Radius;
    /** Constructs a circular radius. [x] and [y] will have the same radius value.*/
    circular(radius: number): _Radius;
    /** Constructs an elliptical radius with the given radii. */
    elliptical(radius: number): _Radius;
}
/**
 * ## Radius
 * A radius for either circular or elliptical shapes
 * */
declare var Radius: _Radius;
export { Radius, _Radius };
