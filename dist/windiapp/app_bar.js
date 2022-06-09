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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Widget from "../widgets/framework.js";
var _AppBar = /** @class */ (function (_super) {
    __extends(_AppBar, _super);
    function _AppBar(args) {
        var _this = this;
        var _a, _b, _c, _d;
        var children = [];
        if (args.leading) {
            children.push(args.leading);
        }
        if (args.title) {
            children.push(args.title);
        }
        if (args.actions) {
            children = __spreadArray(__spreadArray([], children, true), args.actions, true);
        }
        _this = _super.call(this, { tagName: "div", children: children, classes: [
                "h-10",
                "w-full",
                "shadow-2xl",
                "bg-white",
                "fixed",
                "top-0",
                "left-0"
            ] }) || this;
        _this.tag.style.backgroundColor = (_b = (_a = args.backgroundColor) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        _this.tag.style.color = (_d = (_c = args.foregroundColor) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        return _this;
    }
    return _AppBar;
}(Widget));
/**
* ## AppBar
* Creates a material design app bar.
*
* The arguments [primary], [toolbarOpacity], [bottomOpacity],
* [backwardsCompatibility], and [automaticallyImplyLeading] must
* not be null. Additionally, if [elevation] is specified, it must
* be non-negative.
*
* Typically used in the [Scaffold.appBar] property.
*/
function AppBar(args) {
    return new _AppBar(args);
}
export { AppBar, _AppBar };
//# sourceMappingURL=app_bar.js.map