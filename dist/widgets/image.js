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
import { CssProperties } from "../utils/cssprops.js";
import Widget from "./framework.js";
var _Image = /** @class */ (function (_super) {
    __extends(_Image, _super);
    function _Image(args) {
        var _this = _super.call(this, { tagName: "img" }) || this;
        _this.excludeFromSemantics = false;
        return _this;
    }
    /// Creates a widget that displays an [ImageStream] obtained from the network.
    ///
    /// The [src] argument must not be null.
    _Image.prototype.network = function (src, args) {
        var _a, _b;
        this.tag.setAttribute("src", src);
        if (args.semanticLabel)
            this.tag.setAttribute("label", args.semanticLabel);
        this.css = new CssProperties({
            backgroundColor: (_a = args.color) === null || _a === void 0 ? void 0 : _a.value,
            opacity: (_b = args.opacity) === null || _b === void 0 ? void 0 : _b.toString(),
            objectFit: args.fit,
            backgroundRepeat: args.repeat,
            width: "100%",
            height: "100%"
        });
        if (args.semanticLabel) {
            this.tag.setAttribute("label", args.semanticLabel);
        }
        this.css.apply(this);
        return this;
    };
    return _Image;
}(Widget));
/**Creates a widget that displays an  obtained from the network. */
function Image() {
    return new _Image({});
}
;
export { Image, _Image };
//# sourceMappingURL=image.js.map