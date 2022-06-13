import { Widget } from "../widgets/index.js";
declare class CssProperty {
    name: string;
    value: string;
    constructor(name: string, value: string);
}
interface props {
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    animation?: string;
    animationDelay?: string;
    animationDirection?: string;
    animationDuration?: string;
    animationFillMode?: string;
    animationIterationCount?: string;
    animationName?: string;
    animationPlayState?: string;
    animationTimingFunction?: string;
    backfaceVisibility?: string;
    background?: string;
    backgroundAttachment?: string;
    backgroundClip?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOrigin?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    border?: string;
    borderBottom?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderBottomStyle?: string;
    borderBottomWidth?: string;
    borderCollapse?: string;
    borderColor?: string;
    borderImage?: string;
    borderImageOutset?: string;
    borderImageRepeat?: string;
    borderImageSlice?: string;
    borderImageSource?: string;
    borderImageWidth?: string;
    borderLeft?: string;
    borderLeftColor?: string;
    borderLeftStyle?: string;
    borderLeftWidth?: string;
    borderRadius?: string;
    borderRight?: string;
    borderRightColor?: string;
    borderRightStyle?: string;
    borderRightWidth?: string;
    borderSpacing?: string;
    borderStyle?: string;
    borderTop?: string;
    borderTopColor?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderTopStyle?: string;
    borderTopWidth?: string;
    borderWidth?: string;
    bottom?: string;
    boxShadow?: string;
    boxSizing?: string;
    captionSide?: string;
    clear?: string;
    clip?: string;
    color?: string;
    columnCount?: string;
    columnFill?: string;
    columnGap?: string;
    columnRule?: string;
    columnRuleColor?: string;
    columnRuleStyle?: string;
    columnRuleWidth?: string;
    columnSpan?: string;
    columnWidth?: string;
    columns?: string;
    content?: string;
    counterIncrement?: string;
    counterReset?: string;
    cursor?: string;
    direction?: string;
    display?: string;
    emptyCells?: string;
    flex?: string;
    flexBasis?: string;
    flexDirection?: string;
    flexFlow?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexWrap?: string;
    float?: string;
    font?: string;
    fontFamily?: string;
    fontSize?: string;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    height?: string;
    justifyContent?: string;
    left?: string;
    letterSpacing?: string;
    lineHeight?: string;
    listStyle?: string;
    listStyleImage?: string;
    listStylePosition?: string;
    listStyleType?: string;
    margin?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;
    opacity?: string;
    order?: string;
    outline?: string;
    outlineColor?: string;
    outlineOffset?: string;
    outlineStyle?: string;
    outlineWidth?: string;
    overflow?: string;
    overflowX?: string;
    overflowY?: string;
    padding?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    pageBreakAfter?: string;
    pageBreakBefore?: string;
    pageBreakInside?: string;
    perspective?: string;
    perspectiveOrigin?: string;
    position?: string;
    quotes?: string;
    resize?: string;
    right?: string;
    tabSize?: string;
    tableLayout?: string;
    textAlign?: string;
    textAlignLast?: string;
    textDecoration?: string;
    textDecorationColor?: string;
    textDecorationLine?: string;
    textDecorationStyle?: string;
    textIndent?: string;
    textJustify?: string;
    textOverflow?: string;
    textShadow?: string;
    textTransform?: string;
    top?: string;
    transform?: string;
    transformOrigin?: string;
    transformStyle?: string;
    transition?: string;
    transitionDelay?: string;
    transitionDuration?: string;
    transitionProperty?: string;
    transitionTimingFunction?: string;
    verticalAlign?: string;
    visibility?: string;
    whiteSpace?: string;
    width?: string;
    wordBreak?: string;
    wordSpacing?: string;
    wordWrap?: string;
    zIndex?: string;
}
declare class CssProperties {
    _props: props;
    constructor(args: props);
    /**
     * Defines the css propertie to the tag of widget.
     * @param widget The widget that will be modified
     */
    apply(widget: Widget): Widget;
}
export { CssProperty, CssProperties };
