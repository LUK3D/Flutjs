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
import { ElementSides } from "../utils/constants.js";
var _Container = /** @class */ (function (_super) {
    __extends(_Container, _super);
    function _Container(args) {
        var _this = this;
        var _a, _b;
        _this = _super.call(this, __assign({ tagName: "div" }, args)) || this;
        var paddings = (_a = args.padding) === null || _a === void 0 ? void 0 : _a.arrayed_value("padding");
        console.warn("PADDINGS", paddings);
        if (paddings) {
            ElementSides.forEach(function (element, i) {
                var _a;
                var p = "padding-" + element;
                var v = paddings[i];
                (_a = _this.tag) === null || _a === void 0 ? void 0 : _a.style.setProperty(p, v);
            });
        }
        var margins = (_b = args.margin) === null || _b === void 0 ? void 0 : _b.arrayed_value("margin");
        if (margins) {
            ElementSides.forEach(function (element, i) {
                var _a;
                var p = "margin-" + element;
                var v = margins[i];
                (_a = _this.tag) === null || _a === void 0 ? void 0 : _a.style.setProperty(p, v);
            });
        }
        return _this;
    }
    return _Container;
}(Widget));
function Container(args) {
    if (args.color != null && args.decoration != null) {
        WidgetExeption({ message: "The property Color needs to be null when decoration:<BoxDecoration> its been in use. Try to put the Color inside the BoxDecoration." });
    }
    else {
        if (args.color) {
            if (args.decoration) {
                args.decoration.color = args.color.value;
            }
        }
    }
    if (!args.width) {
        args.width = "auto";
    }
    if (!args.height) {
        args.height = "auto";
    }
    return new _Container({
        margin: args.margin,
        padding: args.padding,
        child: args.child,
        color: args.color,
        boxDecoration: args.decoration,
        height: args.height,
        width: args.width,
        key: args.key,
        height_size_measurement_unit: args.height_size_measurement_unit,
        width_size_measurement_unit: args.width_size_measurement_unit
    });
}
export { Container, _Container };
//# sourceMappingURL=container.js.map