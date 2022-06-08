import { _FontWeight,FontWeight } from "../ui/text.js";

class _TextStyle {
  inherit?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  textBaseline?: string;
  height?: string;
  leadingDistribution?: string;
  locale?: string;
  foreground?: string;
  background?: string;
  shadows?: string;
  fontFeatures?: string;
  decoration?: string;
  decorationColor?: string;
  decorationStyle?: string;
  decorationThickness?: string;
  debugLabel?: string;
  fontFamily?: string;
  fontFamilyFallback?: Array<string>;
  package?: string;
  overflow?: string;

  constructor(args: {
    inherit?: string;
    color?: string;
    backgroundColor?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: string;
    letterSpacing?: string;
    wordSpacing?: string;
    textBaseline?: string;
    height?: string;
    leadingDistribution?: string;
    locale?: string;
    foreground?: string;
    background?: string;
    shadows?: string;
    fontFeatures?: string;
    decoration?: string;
    decorationColor?: string;
    decorationStyle?: string;
    decorationThickness?: string;
    debugLabel?: string;
    fontFamily?: string;
    fontFamilyFallback?: Array<string>;
    package?: string;
    overflow?: string;
  }) {
    ;

    this.inherit = args.inherit || this.inherit;
    this.color = args.color || this.color;
    this.backgroundColor = args.backgroundColor || this.backgroundColor;
    this.fontSize = `${args.fontSize}pt` || this.fontSize;
    (args.fontWeight) && (this.fontWeight = new _FontWeight(args.fontWeight).value)
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

function TextStyle(
  args: {
    inherit?: string;
    color?: string;
    backgroundColor?: string;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: string;
    letterSpacing?: string;
    wordSpacing?: string;
    textBaseline?: string;
    height?: string;
    leadingDistribution?: string;
    locale?: string;
    foreground?: string;
    background?: string;
    shadows?: string;
    fontFeatures?: string;
    decoration?: string;
    decorationColor?: string;
    decorationStyle?: string;
    decorationThickness?: string;
    debugLabel?: string;
    fontFamily?: string;
    fontFamilyFallback?: Array<string>;
    package?: string;
    overflow?: string;
  }
){

  return new _TextStyle(
    {
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
    }
  );
}

export { _TextStyle,TextStyle };
