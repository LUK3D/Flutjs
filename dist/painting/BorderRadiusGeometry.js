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
import { Radius } from "../ui/Radius.js";
var BorderRadiusGeometry = /** @class */ (function () {
    function BorderRadiusGeometry() {
    }
    return BorderRadiusGeometry;
}());
/** Creates a border radius with only the given non-zero values. The other
  corners will be right angles.
  */
var _BorderRadius = /** @class */ (function (_super) {
    __extends(_BorderRadius, _super);
    function _BorderRadius() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _BorderRadius.prototype.only = function (args) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.topLeft = args.topLeft;
        this.topRight = args.topRight;
        this.bottomLeft = args.bottomLeft;
        this.bottomRight = args.bottomRight;
        this.value = [
            (_b = (_a = this.topLeft) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "0px",
            (_d = (_c = this.topRight) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : "0px",
            (_f = (_e = this.bottomLeft) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : "0px",
            (_h = (_g = this.bottomRight) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : "0px",
        ];
        console.warn(this.value);
        return this;
    };
    /** Creates a border radius where all radii are [radius]. */
    _BorderRadius.prototype.all = function (radius) {
        return this.only({
            topLeft: radius,
            topRight: radius,
            bottomLeft: radius,
            bottomRight: radius,
        });
    };
    /** Creates a border radius where all radii are [Radius.circular(radius)]. */
    _BorderRadius.prototype.circular = function (radius) {
        return this.all(Radius.circular(radius));
    };
    /**
     * Creates a vertically symmetric border radius where the top and bottom
     * sides of the rectangle have the same radii.
     */
    _BorderRadius.prototype.vertical = function (args) {
        var _a, _b, _c, _d;
        console.warn("vertical", args.top, args.bottom);
        return this.only({
            topLeft: (_a = args.top) !== null && _a !== void 0 ? _a : Radius.zero,
            topRight: (_b = args.top) !== null && _b !== void 0 ? _b : Radius.zero,
            bottomLeft: (_c = args.bottom) !== null && _c !== void 0 ? _c : Radius.zero,
            bottomRight: (_d = args.bottom) !== null && _d !== void 0 ? _d : Radius.zero,
        });
    };
    /**
     * Creates a horizontally symmetrical border radius where the left and right
      sides of the rectangle have the same radii.
    
     */
    _BorderRadius.prototype.horizontal = function (args) {
        var _a, _b, _c, _d;
        return this.only({
            topLeft: (_a = args.left) !== null && _a !== void 0 ? _a : Radius.zero,
            topRight: (_b = args.right) !== null && _b !== void 0 ? _b : Radius.zero,
            bottomLeft: (_c = args.left) !== null && _c !== void 0 ? _c : Radius.zero,
            bottomRight: (_d = args.right) !== null && _d !== void 0 ? _d : Radius.zero,
        });
    };
    return _BorderRadius;
}(BorderRadiusGeometry));
var BorderRadius = new _BorderRadius();
export { BorderRadiusGeometry, BorderRadius, _BorderRadius };
//# sourceMappingURL=BorderRadiusGeometry.js.map