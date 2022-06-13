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
        /**
         *  ## Value
         * the string value of EdgeInsets
         */
        this.value = "";
        this.bottom = args.bottom;
        this.end = args.end;
        this.left = args.left;
        this.right = args.right;
        this.top = args.top;
        var converter = new Converter();
        this.horizontal = converter.toNumber(this.left) + converter.toNumber(this.right) + converter.toNumber(this.start) + converter.toNumber(this.end);
        this.vertical = converter.toNumber(this.top) + converter.toNumber(this.bottom);
        console.log("1.1->", this.arrayed_value("padding-"));
        return this;
    }
    /**
     * ## EdgeInsets Value
     * @param propertie The css propertie to be modified (margin, padding), needs to have `-` signe
     * @returns css string propertie-left:value
     */
    EdgeInsetsGeometry.prototype.val = function (propertie) {
        var _a;
        this.value = [
            "".concat(propertie, "left:").concat(this.left),
            "".concat(propertie, "right:").concat(this.right),
            "".concat(propertie, "top:").concat(this.top),
            "".concat(propertie, "bottom:").concat((_a = this.bottom) !== null && _a !== void 0 ? _a : this.end),
        ].join(";");
        return this;
    };
    EdgeInsetsGeometry.prototype.arrayed_value = function (propertie) {
        var _a;
        return [
            "".concat(this.left, "px"),
            "".concat(this.top, "px"),
            "".concat(this.right, "px"),
            "".concat((_a = this.bottom) !== null && _a !== void 0 ? _a : this.end, "px"),
        ];
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
                return this;
            case Axis.Vertical:
                this.reset();
                this.top = this.vertical;
                this.start = this.vertical;
                this.end = this.vertical;
                this.bottom = this.vertical;
                return this;
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
        return this;
    };
    return EdgeInsetsGeometry;
}());
var _EdgeInsets = /** @class */ (function (_super) {
    __extends(_EdgeInsets, _super);
    function _EdgeInsets(args) {
        var _this = _super.call(this, args) || this;
        return _this;
    }
    /** Creates insets with only the given values non-zero.
    *
    * {@tool snippet}
    *
    * Left margin indent of 40 pixels:
    *
    * ```js
    * const EdgeInsets.only({left: 40.0})
    * ```
    * {@end-tool}
    *
    * */
    _EdgeInsets.prototype.only = function (args) {
        var ei = new EdgeInsetsGeometry({
            left: args.left,
            top: args.top,
            right: args.right,
            bottom: args.bottom,
        });
        return ei;
    };
    _EdgeInsets.prototype.all = function (val) {
        return this.symmetric({
            vertical: val,
            horizontal: val
        });
    };
    /** Creates insets with symmetrical vertical and horizontal offsets.
    *
    * Eight pixel margin above and below, no horizontal margins:
    *
    * ```js
    * const EdgeInsets.symmetric({vertical: 8.0})
    * ```
    * */
    _EdgeInsets.prototype.symmetric = function (args) {
        this.reset();
        return this.only({
            left: args.horizontal,
            right: args.horizontal,
            top: args.vertical,
            bottom: args.vertical
        });
    };
    return _EdgeInsets;
}(EdgeInsetsGeometry));
/**
 * ## EdgeInsets
* An immutable set of offsets in each of the four cardinal directions.
*
* Typically used for an offset from each of the four sides of a box. For
* example, the padding inside a box can be represented using this class.
*
* The [EdgeInsets] class specifies offsets in terms of visual edges, left,
* top, right, and bottom. These values are not affected by the
* [TextDirection]. To support both left-to-right and right-to-left layouts,
* consider using [EdgeInsetsDirectional], which is expressed in terms of
* _start_, top, _end_, and bottom, where start and end are resolved in terms
* of a [TextDirection] (typically obtained from the ambient [Directionality]).
*
*
* Here are some examples of how to create [EdgeInsets] instances:
*
* Typical eight-pixel margin on all sides:
*
* ```js
* const EdgeInsets.all(8.0)
* ```
*
* Eight pixel margin above and below, no horizontal margins:
*
* ```js
* const EdgeInsets.symmetric({vertical: 8.0})
* ```
*
* Left margin indent of 40 pixels:
*
* ```js
* const EdgeInsets.only({left: 40.0})
* ```
*
* See also:
*
*  * [Padding], a widget that accepts [EdgeInsets] to describe its margins.
*  * [EdgeInsetsDirectional], which (for properties and arguments that accept
*    the type [EdgeInsetsGeometry]) allows the horizontal insets to be
*    specified in a [TextDirection]-aware manner.
*/
var EdgeInsets = new _EdgeInsets({ propertie: "padding" });
export { EdgeInsetsGeometry, EdgeInsets };
//# sourceMappingURL=edge_insets.js.map