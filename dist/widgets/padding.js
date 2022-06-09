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
import { ElementSides } from "../utils/constants.js";
import { Widget } from "./framework.js";
var _Padding = /** @class */ (function (_super) {
    __extends(_Padding, _super);
    function _Padding(args) {
        var _this = _super.call(this, { tagName: "div", child: args.child, classes: ["w-full", "h-full"] }) || this;
        var values = args.padding.arrayed_value("padding");
        console.log(values);
        ElementSides.forEach(function (element, i) {
            var _a;
            var p = "padding-" + element;
            var v = values[i];
            (_a = _this.tag) === null || _a === void 0 ? void 0 : _a.style.setProperty(p, v);
        });
        return _this;
    }
    return _Padding;
}(Widget));
function Padding(args) {
    console.log("1->", args.padding.arrayed_value("padding-"));
    return new _Padding({ child: args.child, padding: args.padding });
}
export { Padding };
//# sourceMappingURL=padding.js.map