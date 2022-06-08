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
import { Widget } from "./framework.js";
var _Text = /** @class */ (function (_super) {
    __extends(_Text, _super);
    function _Text(args) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        _this = _super.call(this, { tagName: "p", key: args.key, text: args.text }) || this;
        if (args) {
            if (args.textStyle) {
                args.textStyle.color && (_this.tag.style.color = (_a = args.textStyle) === null || _a === void 0 ? void 0 : _a.color);
                args.textStyle.backgroundColor && (_this.tag.style.backgroundColor = (_b = args.textStyle) === null || _b === void 0 ? void 0 : _b.backgroundColor);
                args.textStyle.fontSize && (_this.tag.style.fontSize = (_c = args.textStyle) === null || _c === void 0 ? void 0 : _c.fontSize);
                args.textStyle.fontWeight && (_this.tag.style.fontWeight = (_d = args.textStyle) === null || _d === void 0 ? void 0 : _d.fontWeight);
                args.textStyle.fontStyle && (_this.tag.style.fontStyle = (_e = args.textStyle) === null || _e === void 0 ? void 0 : _e.fontStyle);
                args.textStyle.wordSpacing && (_this.tag.style.wordSpacing = (_f = args.textStyle) === null || _f === void 0 ? void 0 : _f.wordSpacing);
                // args.textStyle.textBaseline &&  (this.tag!.style.textBaseline = args.textStyle?.textBaseline);
                args.textStyle.height && (_this.tag.style.height = (_g = args.textStyle) === null || _g === void 0 ? void 0 : _g.height);
                // args.textStyle.leadingDistribution &&  (this.tag!.style.leadingDistribution = args.textStyle?.leadingDistribution);
                // args.textStyle.locale &&  (this.tag!.style.locale = args.textStyle?.locale);
                // args.textStyle.foreground &&  (this.tag!.style.foreground = args.textStyle?.foreground);
                args.textStyle.shadows && (_this.tag.style.boxShadow = (_h = args.textStyle) === null || _h === void 0 ? void 0 : _h.shadows);
                // args.textStyle.fontFeatures &&  (this.tag!.style.fontFeatures = args.textStyle?.fontFeatures);
                // args.textStyle.decoration &&  (this.tag!.style.decoration = args.textStyle?.decoration);
                // args.textStyle.decorationColor &&  (this.tag!.style.decorationColor = args.textStyle?.decorationColor);
                // args.textStyle.decorationStyle &&  (this.tag!.style.decorationStyle = args.textStyle?.decorationStyle);
                // args.textStyle.decorationThickness &&  (this.tag!.style.decorationThickness = args.textStyle?.decorationThickness);
                // args.textStyle.debugLabel &&  (this.tag!.style.debugLabel = args.textStyle?.debugLabel);
                args.textStyle.fontFamily && (_this.tag.style.fontFamily = (_j = args.textStyle) === null || _j === void 0 ? void 0 : _j.fontFamily);
                args.textStyle.fontFamilyFallback && (_this.tag.style.fontFamily += (_k = args.textStyle) === null || _k === void 0 ? void 0 : _k.fontFamilyFallback.join(''));
                args.textStyle.package && (_this.tag.style.fontFamily += (_l = args.textStyle) === null || _l === void 0 ? void 0 : _l.package);
                args.textStyle.overflow && (_this.tag.style.overflow = (_m = args.textStyle) === null || _m === void 0 ? void 0 : _m.overflow);
            }
        }
        return _this;
    }
    return _Text;
}(Widget));
function Text(value, args) {
    return new _Text({ text: value, textStyle: args === null || args === void 0 ? void 0 : args.textStyle });
}
export { Text };
