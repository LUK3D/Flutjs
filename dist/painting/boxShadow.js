import { BlurStyle } from "../ui/painting.js";
import { Offset } from "../utils/offset.js";
import { Colors } from "./colors.js";
var BoxShadow = /** @class */ (function () {
    function BoxShadow(args) {
        var _a, _b, _c, _d, _e;
        this.color = Colors.Gray[600];
        this.offset = Offset(0, 0).zero();
        this.blurRadius = 0.0;
        this.spreadRadius = 0.0;
        this.blurStyle = BlurStyle.outer;
        this.color = (_a = args.color) !== null && _a !== void 0 ? _a : this.color;
        this.offset = (_b = args.offset) !== null && _b !== void 0 ? _b : this.offset;
        this.blurRadius = (_c = args.blurRadius) !== null && _c !== void 0 ? _c : this.blurRadius;
        this.spreadRadius = (_d = args.spreadRadius) !== null && _d !== void 0 ? _d : this.spreadRadius;
        this.blurStyle = (_e = args.blurStyle) !== null && _e !== void 0 ? _e : this.blurStyle;
    }
    BoxShadow.prototype.value = function () {
        return "".concat(this.offset.dx, "px ").concat(this.offset.dy, "px ").concat(this.blurRadius, "px ").concat(this.spreadRadius, "px ").concat(this.color.value, " ").concat(this.blurStyle);
    };
    return BoxShadow;
}());
export { BoxShadow };
//# sourceMappingURL=boxShadow.js.map