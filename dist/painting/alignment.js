var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AlignmentGeometry = /** @class */ (function () {
    function AlignmentGeometry(args) {
        this.x = args.x;
        this.y = args.y;
        this.val = "".concat(this.x, " ").concat(this.y);
    }
    AlignmentGeometry.prototype.negative = function () {
        return new AlignmentGeometry({ x: (this.x * -1), y: (this.y * -1) });
    };
    AlignmentGeometry.prototype.add = function (other) {
        return new AlignmentGeometry({ x: (this.x + other.x), y: (this.y + other.y) });
    };
    AlignmentGeometry.prototype.multiply = function (other) {
        return new AlignmentGeometry({ x: (this.x * other.x), y: (this.y * other.y) });
    };
    AlignmentGeometry.prototype.divide = function (other) {
        return new AlignmentGeometry({ x: (this.x / other.x), y: (this.y / other.y) });
    };
    return AlignmentGeometry;
}());
var Alignment = /** @class */ (function (_super) {
    __extends(Alignment, _super);
    /// Creates an alignment.
    ///
    /// The [x] and [y] arguments must not be null.
    function Alignment(args) {
        return _super.call(this, args) || this;
    }
    /**The top left corner. */
    Alignment.prototype.topLeft = function () {
        return new Alignment({ x: -1.0, y: -1.0 });
    };
    /**The center point along the top edge. */
    Alignment.prototype.topCenter = function () {
        return new Alignment({ x: 0.0, y: -1.0 });
    };
    /**The top right corner. */
    Alignment.prototype.topRight = function () {
        return new Alignment({ x: 1.0, y: -1.0 });
    };
    /**The center point along the left edge. */
    Alignment.prototype.centerLeft = function () {
        return new Alignment({ x: -1.0, y: 0.0 });
    };
    /**The center point, both horizontally and vertically. */
    Alignment.prototype.center = function () {
        return new Alignment({ x: 0, y: 0 });
    };
    /**The center point along the right edge. */
    Alignment.prototype.centerRight = function () {
        return new Alignment({ x: 1.0, y: 0.0 });
    };
    /**The center point along the bottom edge. */
    Alignment.prototype.bottomLeft = function () {
        return new Alignment({ x: -1.0, y: 1.0 });
    };
    /**The center point along the right edge. */
    Alignment.prototype.bottomCenter = function () {
        return new Alignment({ x: 0.0, y: 1.0 });
    };
    /**The center point along the right edge. */
    Alignment.prototype.bottomRight = function () {
        return new Alignment({ x: 1.0, y: 1.0 });
    };
    Alignment.prototype.add = function (other) {
        return _super.prototype.add.call(this, other);
    };
    return Alignment;
}(AlignmentGeometry));
export { AlignmentGeometry, Alignment };
//# sourceMappingURL=alignment.js.map