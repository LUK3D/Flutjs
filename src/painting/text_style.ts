class TextStyle {
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
  }) {
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

export { TextStyle };