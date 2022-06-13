/**A radius for either circular or elliptical shapes. */
var _Radius = /** @class */ (function () {
    function _Radius() {
        /**
        * A radius with [x] and [y] values set to zero.
        *
        * You can use [Radius.zero] with [RRect] to have right-angle corners.
        * */
        this.zero = this.circular(0);
    }
    /** Constructs a circular radius. [x] and [y] will have the same radius value.*/
    _Radius.prototype.circular = function (radius) {
        this.value = "".concat(radius, "px");
        console.warn("RADIUS", this);
        return this;
    };
    /** Constructs an elliptical radius with the given radii. */
    _Radius.prototype.elliptical = function (radius) {
        this.value = "".concat(radius, "%");
        return this;
    };
    return _Radius;
}());
/**
 * ## Radius
 * A radius for either circular or elliptical shapes
 * */
var Radius = new _Radius();
export { Radius, _Radius };
//# sourceMappingURL=Radius.js.map