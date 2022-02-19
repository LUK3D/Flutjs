"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStyle = exports._TextStyle = void 0;
const text_1 = require("../ui/text");
class _TextStyle {
    constructor(args) {
        ;
        this.inherit = args.inherit || this.inherit;
        this.color = args.color || this.color;
        this.backgroundColor = args.backgroundColor || this.backgroundColor;
        this.fontSize = `${args.fontSize}pt` || this.fontSize;
        (args.fontWeight) && (this.fontWeight = new text_1._FontWeight(args.fontWeight).value);
        this.fontStyle = args.fontStyle || this.fontStyle;
        this.letterSpacing = args.letterSpacing || this.letterSpacing;
        this.wordSpacing = args.wordSpacing || this.wordSpacing;
        this.textBaseline = args.textBaseline || this.textBaseline;
        this.height = args.height || this.height;
        this.leadingDistribution =
            args.leadingDistribution || this.leadingDistribution;
        this.locale = args.locale || this.locale;
        this.foreground = args.foreground || this.foreground;
        this.background = args.background || this.background;
        this.shadows = args.shadows || this.shadows;
        this.fontFeatures = args.fontFeatures || this.fontFeatures;
        this.decoration = args.decoration || this.decoration;
        this.decorationColor = args.decorationColor || this.decorationColor;
        this.decorationStyle = args.decorationStyle || this.decorationStyle;
        this.decorationThickness =
            args.decorationThickness || this.decorationThickness;
        this.debugLabel = args.debugLabel || this.debugLabel;
        this.fontFamily = args.fontFamily || this.fontFamily;
        this.fontFamilyFallback =
            args.fontFamilyFallback || this.fontFamilyFallback;
        this.package = args.package || this.package;
        this.overflow = args.overflow || this.overflow;
    }
}
exports._TextStyle = _TextStyle;
function TextStyle(args) {
    return new _TextStyle({
        inherit: args.inherit,
        color: args.color,
        backgroundColor: args.backgroundColor,
        fontSize: args.fontSize,
        fontWeight: args.fontWeight,
        fontStyle: args.fontStyle,
        letterSpacing: args.letterSpacing,
        wordSpacing: args.wordSpacing,
        textBaseline: args.textBaseline,
        height: args.height,
        leadingDistribution: args.leadingDistribution,
        locale: args.locale,
        foreground: args.foreground,
        background: args.background,
        shadows: args.shadows,
        fontFeatures: args.fontFeatures,
        decoration: args.decoration,
        decorationColor: args.decorationColor,
        decorationStyle: args.decorationStyle,
        decorationThickness: args.decorationThickness,
        debugLabel: args.debugLabel,
        fontFamily: args.fontFamily,
        fontFamilyFallback: args.fontFamilyFallback,
        package: args.package,
        overflow: args.overflow,
    });
}
exports.TextStyle = TextStyle;
