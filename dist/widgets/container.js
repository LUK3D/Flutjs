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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Widget } from "./framework.js";
import { WidgetExeption } from "../utils/FlutExeption.js";
var _Container = /** @class */ (function (_super) {
    __extends(_Container, _super);
    function _Container(args) {
        var _this = this;
        var _a, _b, _c, _d;
        _this = _super.call(this, __assign({ tagName: "div" }, args)) || this;
        if (args.decoratio) {
            _this.tag.style.backgroundColor = (_b = (_a = args.decoratio) === null || _a === void 0 ? void 0 : _a.color) !== null && _b !== void 0 ? _b : '';
        }
        else {
            _this.tag.style.backgroundColor = (_d = (_c = args.color) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        }
        return _this;
    }
    return _Container;
}(Widget));
function Container(args) {
    if (args.color != null && args.decoratio != null) {
        WidgetExeption({ message: "The propertie Color needs to be null when decoration:<BoxDecoration> its been in use. Try to put the Color inside the BoxDecoration." });
    }
    if (!args.width) {
        args.width = "auto";
    }
    if (!args.height) {
        args.height = "auto";
    }
    return new _Container(args);
}
export { Container, _Container };
//# sourceMappingURL=container.js.map