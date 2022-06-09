/**
Base class for [EdgeInsets] that allows for text-direction aware
resolution.

A property or argument of this type accepts classes created either with [
EdgeInsets.fromLTRB] and its variants, or [
EdgeInsetsDirectional.fromSTEB] and its variants.

To convert an [EdgeInsetsGeometry] object of indeterminate type into a
[EdgeInsets] object, call the [resolve] method.

See also:

 * [Padding], a widget that describes margins using [EdgeInsetsGeometry].

**/
import { Axis } from "../rendering/axis.js";
import { Converter } from "../utils/converter.js";
var EdgeInsetsGeometry = /** @class */ (function () {
    function EdgeInsetsGeometry(args) {
        this.bottom = 0;
        this.end = 0;
        this.left = 0;
        this.right = 0;
        this.start = 0;
        this.top = 0;
        this.horizontal = 0;
        this.vertical = 0;
        this.value = "";
        this.bottom = args.bottom;
        this.end = args.end;
        this.left = args.left;
        this.right = args.right;
        this.top = args.top;
        this.propertie = args.propertie;
        var converter = new Converter();
        this.horizontal = converter.toNumber(this.left) + converter.toNumber(this.right) + converter.toNumber(this.start) + converter.toNumber(this.end);
        this.vertical = converter.toNumber(this.top) + converter.toNumber(this.bottom);
    }
    EdgeInsetsGeometry.prototype.val = function () {
        var _a;
        this.value = [
            "".concat(this.propertie, "-left:").concat(this.left),
            "".concat(this.propertie, "-right:").concat(this.right),
            "".concat(this.propertie, "-top:").concat(this.top),
            "".concat(this.propertie, "-bottom:").concat((_a = this.bottom) !== null && _a !== void 0 ? _a : this.end),
        ].join(";");
        return this;
    };
    EdgeInsetsGeometry.prototype.reset = function () {
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
        this.start = 0;
        this.end = 0;
    };
    EdgeInsetsGeometry.prototype.along = function (args) {
        switch (args.axis) {
            case Axis.Horizontal:
                this.reset();
                this.left = this.horizontal;
                this.right = this.horizontal;
                this.start = this.horizontal;
                this.end = this.horizontal;
                return this.val();
            case Axis.Vertical:
                this.reset();
                this.top = this.vertical;
                this.start = this.vertical;
                this.end = this.vertical;
                this.bottom = this.vertical;
                return this.val();
            default:
                break;
        }
    };
    EdgeInsetsGeometry.prototype.infinity = function () {
        this.bottom = "100%";
        this.end = "100%";
        this.left = "100%";
        this.right = "100%";
        this.top = "100%";
        return this.val();
    };
    return EdgeInsetsGeometry;
}());
//# sourceMappingURL=edge_insets.js.map