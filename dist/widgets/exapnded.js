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
import Widget from "./framework.js";
var _Expanded = /** @class */ (function (_super) {
    __extends(_Expanded, _super);
    function _Expanded(args) {
        var _this = _super.call(this, {
            key: args.key,
            tagName: "div",
            child: args.child
        }) || this;
        if (_this.child) {
            _this.tag = _this.child.tag;
        }
        _this.tag.style.width = "100%";
        _this.tag.style.height = "100%";
        args.child.tag.style.width = "100%";
        args.child.tag.style.height = "100%";
        return _this;
    }
    return _Expanded;
}(Widget));
function Expanded(args) {
    return new _Expanded(args);
}
export { Expanded };
