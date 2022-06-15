/** An immutable 2D floating-point offset.
*/
var _Offset = /** @class */ (function () {
    /// Creates an offset. The first argument sets [dx], the horizontal component,
    /// and the second sets [dy], the vertical component.
    function _Offset(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
    /// The magnitude of the offset.
    ///
    /// If you need this value to compare it to another [Offset]'s distance,
    /// consider using [distanceSquared] instead, since it is cheaper to compute.
    _Offset.prototype.distance = function () {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    };
    ;
    /// The square of the magnitude of the offset.
    ///
    /// This is cheaper than computing the [distance] itself.
    _Offset.prototype.distanceSquared = function () {
        return this.dx * this.dx + this.dy * this.dy;
        ;
    };
    /// The angle of this offset as radians clockwise from the positive x-axis, in
    /// the range -[pi] to [pi], assuming positive values of the x-axis go to the
    /// right and positive values of the y-axis go down.
    ///
    /// Zero means that [dy] is zero and [dx] is zero or positive.
    ///
    /// Values from zero to [pi]/2 indicate positive values of [dx] and [dy], the
    /// bottom-right quadrant.
    ///
    /// Values from [pi]/2 to [pi] indicate negative values of [dx] and positive
    /// values of [dy], the bottom-left quadrant.
    ///
    /// Values from zero to -[pi]/2 indicate positive values of [dx] and negative
    /// values of [dy], the top-right quadrant.
    ///
    /// Values from -[pi]/2 to -[pi] indicate negative values of [dx] and [dy],
    /// the top-left quadrant.
    ///
    /// When [dy] is zero and [dx] is negative, the [direction] is [pi].
    ///
    /// When [dx] is zero, [direction] is [pi]/2 if [dy] is positive and -[pi]/2
    /// if [dy] is negative.
    ///
    /// See also:
    ///
    ///  * [distance], to compute the magnitude of the vector.
    ///  * [Canvas.rotate], which uses the same convention for its angle.
    _Offset.prototype.direction = function () {
        return Math.atan2(this.dy, this.dx);
    };
    /// An offset with zero magnitude.
    ///
    /// This can be used to represent the origin of a coordinate space.
    _Offset.prototype.zero = function () {
        return new _Offset(0.0, 0.0);
    };
    /// Returns a new offset with the x component scaled by `scaleX` and the y
    /// component scaled by `scaleY`.
    ///
    /// If the two scale arguments are the same, consider using the `*` operator
    /// instead:
    ///
    /// ```ts
    /// Offset a = const Offset(10.0, 10.0);
    /// Offset b = a * 2.0; // same as: a.scale(2.0, 2.0)
    /// ```
    ///
    /// If the two arguments are -1, consider using the unary `-` operator
    /// instead:
    ///
    /// ```ts
    /// Offset a = const Offset(10.0, 10.0);
    /// Offset b = -a; // same as: a.scale(-1.0, -1.0)
    /// ```
    _Offset.prototype.scale = function (scaleX, scaleY) {
        return new _Offset(this.dx * scaleX, this.dy * scaleY);
    };
    /// Returns a new offset with translateX added to the x component and
    /// translateY added to the y component.
    ///
    /// If the arguments come from another [Offset], consider using the `+` or `-`
    /// operators instead:
    ///
    /// ```dart
    /// Offset a = const Offset(10.0, 10.0);
    /// Offset b = const Offset(10.0, 10.0);
    /// Offset c = a + b; // same as: a.translate(b.dx, b.dy)
    /// Offset d = a - b; // same as: a.translate(-b.dx, -b.dy)
    /// ```
    _Offset.prototype.translate = function (translateX, translateY) {
        return new _Offset(this.dx + translateX, this.dy + translateY);
    };
    ;
    return _Offset;
}());
function Offset(dx, dy) {
    return new _Offset(dx !== null && dx !== void 0 ? dx : 0, dy !== null && dy !== void 0 ? dy : 0);
}
export { Offset, _Offset };
//# sourceMappingURL=offset.js.map