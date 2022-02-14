"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextStyle = void 0;
class TextStyle {
    constructor(args) {
        this.inherit = args.inherit || this.inherit;
        this.color = args.color || this.color;
        this.backgroundColor = args.backgroundColor || this.backgroundColor;
        this.fontSize = args.fontSize || this.fontSize;
        this.fontWeight = args.fontWeight || this.fontWeight;
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
exports.TextStyle = TextStyle;
