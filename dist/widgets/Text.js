"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const framework_1 = require("./framework");
class _Text extends framework_1.Widget {
    constructor(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        super({ tagName: "p", key: args.key, text: args.text });
        if (args) {
            if (args.textStyle) {
                args.textStyle.color && (this.tag.style.color = (_a = args.textStyle) === null || _a === void 0 ? void 0 : _a.color);
                args.textStyle.backgroundColor && (this.tag.style.backgroundColor = (_b = args.textStyle) === null || _b === void 0 ? void 0 : _b.backgroundColor);
                args.textStyle.fontSize && (this.tag.style.fontSize = (_c = args.textStyle) === null || _c === void 0 ? void 0 : _c.fontSize);
                args.textStyle.fontWeight && (this.tag.style.fontWeight = (_d = args.textStyle) === null || _d === void 0 ? void 0 : _d.fontWeight);
                args.textStyle.fontStyle && (this.tag.style.fontStyle = (_e = args.textStyle) === null || _e === void 0 ? void 0 : _e.fontStyle);
                args.textStyle.wordSpacing && (this.tag.style.wordSpacing = (_f = args.textStyle) === null || _f === void 0 ? void 0 : _f.wordSpacing);
                // args.textStyle.textBaseline &&  (this.tag!.style.textBaseline = args.textStyle?.textBaseline);
                args.textStyle.height && (this.tag.style.height = (_g = args.textStyle) === null || _g === void 0 ? void 0 : _g.height);
                // args.textStyle.leadingDistribution &&  (this.tag!.style.leadingDistribution = args.textStyle?.leadingDistribution);
                // args.textStyle.locale &&  (this.tag!.style.locale = args.textStyle?.locale);
                // args.textStyle.foreground &&  (this.tag!.style.foreground = args.textStyle?.foreground);
                args.textStyle.shadows && (this.tag.style.boxShadow = (_h = args.textStyle) === null || _h === void 0 ? void 0 : _h.shadows);
                // args.textStyle.fontFeatures &&  (this.tag!.style.fontFeatures = args.textStyle?.fontFeatures);
                // args.textStyle.decoration &&  (this.tag!.style.decoration = args.textStyle?.decoration);
                // args.textStyle.decorationColor &&  (this.tag!.style.decorationColor = args.textStyle?.decorationColor);
                // args.textStyle.decorationStyle &&  (this.tag!.style.decorationStyle = args.textStyle?.decorationStyle);
                // args.textStyle.decorationThickness &&  (this.tag!.style.decorationThickness = args.textStyle?.decorationThickness);
                // args.textStyle.debugLabel &&  (this.tag!.style.debugLabel = args.textStyle?.debugLabel);
                args.textStyle.fontFamily && (this.tag.style.fontFamily = (_j = args.textStyle) === null || _j === void 0 ? void 0 : _j.fontFamily);
                args.textStyle.fontFamilyFallback && (this.tag.style.fontFamily += (_k = args.textStyle) === null || _k === void 0 ? void 0 : _k.fontFamilyFallback.join(''));
                args.textStyle.package && (this.tag.style.fontFamily += (_l = args.textStyle) === null || _l === void 0 ? void 0 : _l.package);
                args.textStyle.overflow && (this.tag.style.overflow = (_m = args.textStyle) === null || _m === void 0 ? void 0 : _m.overflow);
            }
        }
        return this;
    }
}
function Text(value, args) {
    return new _Text({ text: value, textStyle: args === null || args === void 0 ? void 0 : args.textStyle });
}
exports.Text = Text;
