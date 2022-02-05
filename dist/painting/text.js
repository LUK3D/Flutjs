"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDecoration = exports.TextStyle = exports.PlaceholderAlignment = exports.TextDirection = exports.TextLeadingDistribution = exports.TextDecorationStyle = exports.TextBaseline = exports.TextAlign = exports.FontWeight = exports.FontStyle = void 0;
/// Whether to slant the glyphs in the font
var FontStyle;
(function (FontStyle) {
    /// Use the upright glyphs
    FontStyle[FontStyle["normal"] = 0] = "normal";
    /// Use glyphs designed for slanting
    FontStyle[FontStyle["italic"] = 1] = "italic";
})(FontStyle || (FontStyle = {}));
exports.FontStyle = FontStyle;
/// Whether and how to align text horizontally.
// The order of this enum must match the order of the values in RenderStyleConstants.h's ETextAlign.
var TextAlign;
(function (TextAlign) {
    /// Align the text on the left edge of the container.
    TextAlign[TextAlign["left"] = 0] = "left";
    /// Align the text on the right edge of the container.
    TextAlign[TextAlign["right"] = 1] = "right";
    /// Align the text in the center of the container.
    TextAlign[TextAlign["center"] = 2] = "center";
    /// Stretch lines of text that end with a soft line break to fill the width of
    /// the container.
    ///
    /// Lines that end with hard line breaks are aligned towards the [start] edge.
    TextAlign[TextAlign["justify"] = 3] = "justify";
    /// Align the text on the leading edge of the container.
    ///
    /// For left-to-right text ([TextDirection.ltr]), this is the left edge.
    ///
    /// For right-to-left text ([TextDirection.rtl]), this is the right edge.
    TextAlign[TextAlign["start"] = 4] = "start";
    /// Align the text on the trailing edge of the container.
    ///
    /// For left-to-right text ([TextDirection.ltr]), this is the right edge.
    ///
    /// For right-to-left text ([TextDirection.rtl]), this is the left edge.
    TextAlign[TextAlign["end"] = 5] = "end";
})(TextAlign || (TextAlign = {}));
exports.TextAlign = TextAlign;
/// A horizontal line used for aligning text.
var TextBaseline;
(function (TextBaseline) {
    /// The horizontal line used to align the bottom of glyphs for alphabetic characters.
    TextBaseline[TextBaseline["alphabetic"] = 0] = "alphabetic";
    /// The horizontal line used to align ideographic characters.
    TextBaseline[TextBaseline["ideographic"] = 1] = "ideographic";
})(TextBaseline || (TextBaseline = {}));
exports.TextBaseline = TextBaseline;
/// The style in which to draw a text decoration
var TextDecorationStyle;
(function (TextDecorationStyle) {
    /// Draw a solid line
    TextDecorationStyle[TextDecorationStyle["solid"] = 0] = "solid";
    /// Draw two lines
    TextDecorationStyle[TextDecorationStyle["double"] = 1] = "double";
    /// Draw a dotted line
    TextDecorationStyle[TextDecorationStyle["dotted"] = 2] = "dotted";
    /// Draw a dashed line
    TextDecorationStyle[TextDecorationStyle["dashed"] = 3] = "dashed";
    /// Draw a sinusoidal line
    TextDecorationStyle[TextDecorationStyle["wavy"] = 4] = "wavy";
})(TextDecorationStyle || (TextDecorationStyle = {}));
exports.TextDecorationStyle = TextDecorationStyle;
/// {@macro dart.ui.textLeadingDistribution}
var TextLeadingDistribution;
(function (TextLeadingDistribution) {
    /// Distributes the [leading](https://en.wikipedia.org/wiki/Leading)
    /// of the text proportionally above and below the text, to the font's
    /// ascent/descent ratio.
    ///
    /// {@template dart.ui.leading}
    /// The leading of a text run is defined as
    /// `TextStyle.height * TextStyle.fontSize - TextStyle.fontSize`. When
    /// [TextStyle.height] is not set, the text run uses the leading specified by
    /// the font instead.
    /// {@endtemplate}
    TextLeadingDistribution[TextLeadingDistribution["proportional"] = 0] = "proportional";
    /// Distributes the ["leading"](https://en.wikipedia.org/wiki/Leading)
    /// of the text evenly above and below the text (i.e. evenly above the
    /// font's ascender and below the descender).
    ///
    /// {@macro dart.ui.leading}
    ///
    /// The leading can become negative when [TextStyle.height] is smaller than
    /// 1.0.
    ///
    /// This is the default strategy used by CSS, known as
    /// ["half-leading"](https://www.w3.org/TR/css-inline-3/#half-leading).
    TextLeadingDistribution[TextLeadingDistribution["even"] = 1] = "even";
})(TextLeadingDistribution || (TextLeadingDistribution = {}));
exports.TextLeadingDistribution = TextLeadingDistribution;
/// A direction in which text flows.
///
/// Some languages are written from the left to the right (for example, English,
/// Tamil, or Chinese), while others are written from the right to the left (for
/// example Aramaic, Hebrew, or Urdu). Some are also written in a mixture, for
/// example Arabic is mostly written right-to-left, with numerals written
/// left-to-right.
///
/// The text direction must be provided to APIs that render text or lay out
/// boxes horizontally, so that they can determine which direction to start in:
/// either right-to-left, [TextDirection.rtl]; or left-to-right,
/// [TextDirection.ltr].
///
/// ## Design discussion
///
/// Flutter is designed to address the needs of applications written in any of
/// the world's currently-used languages, whether they use a right-to-left or
/// left-to-right writing direction. Flutter does not support other writing
/// modes, such as vertical text or boustrophedon text, as these are rarely used
/// in computer programs.
///
/// It is common when developing user interface frameworks to pick a default
/// text direction — typically left-to-right, the direction most familiar to the
/// engineers working on the framework — because this simplifies the development
/// of applications on the platform. Unfortunately, this frequently results in
/// the platform having unexpected left-to-right biases or assumptions, as
/// engineers will typically miss places where they need to support
/// right-to-left text. This then results in bugs that only manifest in
/// right-to-left environments.
///
/// In an effort to minimize the extent to which Flutter experiences this
/// category of issues, the lowest levels of the Flutter framework do not have a
/// default text reading direction. Any time a reading direction is necessary,
/// for example when text is to be displayed, or when a
/// writing-direction-dependent value is to be interpreted, the reading
/// direction must be explicitly specified. Where possible, such as in `switch`
/// statements, the right-to-left case is listed first, to avoid the impression
/// that it is an afterthought.
///
/// At the higher levels (specifically starting at the widgets library), an
/// ambient [Directionality] is introduced, which provides a default. Thus, for
/// instance, a [Text] widget in the scope of a [MaterialApp] widget does not
/// need to be given an explicit writing direction. The [Directionality.of]
/// static method can be used to obtain the ambient text direction for a
/// particular [BuildContext].
///
/// ### Known left-to-right biases in Flutter
///
/// Despite the design intent described above, certain left-to-right biases have
/// nonetheless crept into Flutter's design. These include:
///
///  * The [Canvas] origin is at the top left, and the x-axis increases in a
///    left-to-right direction.
///
///  * The default localization in the widgets and material libraries is
///    American English, which is left-to-right.
///
/// ### Visual properties vs directional properties
///
/// Many classes in the Flutter framework are offered in two versions, a
/// visually-oriented variant, and a text-direction-dependent variant. For
/// example, [EdgeInsets] is described in terms of top, left, right, and bottom,
/// while [EdgeInsetsDirectional] is described in terms of top, start, end, and
/// bottom, where start and end correspond to right and left in right-to-left
/// text and left and right in left-to-right text.
///
/// There are distinct use cases for each of these variants.
///
/// Text-direction-dependent variants are useful when developing user interfaces
/// that should "flip" with the text direction. For example, a paragraph of text
/// in English will typically be left-aligned and a quote will be indented from
/// the left, while in Arabic it will be right-aligned and indented from the
/// right. Both of these cases are described by the direction-dependent
/// [TextAlign.start] and [EdgeInsetsDirectional.start].
///
/// In contrast, the visual variants are useful when the text direction is known
/// and not affected by the reading direction. For example, an application
/// giving driving directions might show a "turn left" arrow on the left and a
/// "turn right" arrow on the right — and would do so whether the application
/// was localized to French (left-to-right) or Hebrew (right-to-left).
///
/// In practice, it is also expected that many developers will only be
/// targeting one language, and in that case it may be simpler to think in
/// visual terms.
// The order of this enum must match the order of the values in TextDirection.h's TextDirection.
var TextDirection;
(function (TextDirection) {
    /// The text flows from right to left (e.g. Arabic, Hebrew).
    TextDirection[TextDirection["rtl"] = 0] = "rtl";
    /// The text flows from left to right (e.g., English, French).
    TextDirection[TextDirection["ltr"] = 1] = "ltr";
})(TextDirection || (TextDirection = {}));
exports.TextDirection = TextDirection;
/// Where to vertically align the placeholder relative to the surrounding text.
///
/// Used by [ParagraphBuilder.addPlaceholder].
var PlaceholderAlignment;
(function (PlaceholderAlignment) {
    /// Match the baseline of the placeholder with the baseline.
    ///
    /// The [TextBaseline] to use must be specified and non-null when using this
    /// alignment mode.
    PlaceholderAlignment[PlaceholderAlignment["baseline"] = 0] = "baseline";
    /// Align the bottom edge of the placeholder with the baseline such that the
    /// placeholder sits on top of the baseline.
    ///
    /// The [TextBaseline] to use must be specified and non-null when using this
    /// alignment mode.
    PlaceholderAlignment[PlaceholderAlignment["aboveBaseline"] = 1] = "aboveBaseline";
    /// Align the top edge of the placeholder with the baseline specified
    /// such that the placeholder hangs below the baseline.
    ///
    /// The [TextBaseline] to use must be specified and non-null when using this
    /// alignment mode.
    PlaceholderAlignment[PlaceholderAlignment["belowBaseline"] = 2] = "belowBaseline";
    /// Align the top edge of the placeholder with the top edge of the text.
    ///
    /// When the placeholder is very tall, the extra space will hang from
    /// the top and extend through the bottom of the line.
    PlaceholderAlignment[PlaceholderAlignment["top"] = 3] = "top";
    /// Align the bottom edge of the placeholder with the bottom edge of the text.
    ///
    /// When the placeholder is very tall, the extra space will rise from the
    /// bottom and extend through the top of the line.
    PlaceholderAlignment[PlaceholderAlignment["bottom"] = 4] = "bottom";
    /// Align the middle of the placeholder with the middle of the text.
    ///
    /// When the placeholder is very tall, the extra space will grow equally
    /// from the top and bottom of the line.
    PlaceholderAlignment[PlaceholderAlignment["middle"] = 5] = "middle";
})(PlaceholderAlignment || (PlaceholderAlignment = {}));
exports.PlaceholderAlignment = PlaceholderAlignment;
/// The thickness of the glyphs used to draw the text
class FontWeight {
    constructor(args) {
        this.values = {
            /// Thin, the least thick
            w100: "100",
            /// Extra-light
            w200: "200",
            /// Light
            w300: "300",
            /// Normal / regular / plain
            w400: "400",
            /// Medium
            w500: "500",
            /// Semi-bold
            w600: "600",
            /// Bold
            w700: "700",
            /// Extra-bold
            w800: "800",
            /// Black, the most thick
            w900: "900"
        };
        this.w100 = this.values.w100;
        this.w200 = this.values.w200;
        this.w300 = this.values.w300;
        this.w400 = this.values.w400;
        this.w500 = this.values.w500;
        this.w600 = this.values.w600;
        this.w700 = this.values.w700;
        this.w800 = this.values.w800;
        this.w900 = this.values.w900;
        this.normal = this.values.w400;
        this.bold = this.values.w700;
        this.w100 = args.w100 || this.w100;
        this.w200 = args.w200 || this.w200;
        this.w300 = args.w300 || this.w300;
        this.w400 = args.w400 || this.w400;
        this.w500 = args.w500 || this.w500;
        this.w600 = args.w600 || this.w600;
        this.w700 = args.w700 || this.w700;
        this.w800 = args.w800 || this.w800;
        this.w900 = args.w900 || this.w900;
        return this;
    }
}
exports.FontWeight = FontWeight;
class TextDecoration {
    constructor(args) {
        this.values = {
            none: "none",
            underline: "underline",
            overline: "overline",
            lineThrough: "line-through",
        };
        /// Do not draw a decoration
        this.none = this.values.none;
        /// Draw a line underneath each line of text
        this.underline = this.values.underline;
        /// Draw a line above each line of text
        this.overline = this.values.overline;
        /// Draw a line through each line of text
        this.lineThrough = this.values.lineThrough;
        this.none = args.none || this.none;
        this.underline = args.underline || this.underline;
        this.overline = args.overline || this.overline;
        this.lineThrough = args.lineThrough || this.lineThrough;
        return this;
    }
}
exports.TextDecoration = TextDecoration;
/// An opaque object that determines the size, position, and rendering of text.
///
/// See also:
///
///  * [TextStyle](https://api.flutter.dev/flutter/painting/TextStyle-class.html), the class in the [painting] library.
///
class TextStyle {
    /// Creates a new TextStyle object.
    ///
    /// * `color`: The color to use when coloring the text. If this is specified, `foreground` must be null.
    /// * `decoration`: The decorations to paint near the text (e.g., an underline).
    /// * `decorationColor`: The color in which to paint the text decorations.
    /// * `decorationStyle`: The style in which to paint the text decorations (e.g., dashed).
    /// * `decorationThickness`: The thickness of the decoration as a multiplier on the thickness specified by the font.
    /// * `fontWeight`: The typeface thickness to use when coloring the text (e.g., bold).
    /// * `fontStyle`: The typeface variant to use when drawing the letters (e.g., italics).
    /// * `fontFamily`: The name of the font to use when coloring the text (e.g., Roboto). If a `fontFamilyFallback` is
    ///   provided and `fontFamily` is not, then the first font family in `fontFamilyFallback` will take the position of
    ///   the preferred font family. When a higher priority font cannot be found or does not contain a glyph, a lower
    ///   priority font will be used.
    /// * `fontFamilyFallback`: An ordered list of the names of the fonts to fallback on when a glyph cannot
    ///   be found in a higher priority font. When the `fontFamily` is null, the first font family in this list
    ///   is used as the preferred font. Internally, the 'fontFamily` is concatenated to the front of this list.
    ///   When no font family is provided through 'fontFamilyFallback' (null or empty) or `fontFamily`, then the
    ///   platform default font will be used.
    /// * `fontSize`: The size of glyphs (in logical pixels) to use when coloring the text.
    /// * `letterSpacing`: The amount of space (in logical pixels) to add between each letter.
    /// * `wordSpacing`: The amount of space (in logical pixels) to add at each sequence of white-space (i.e. between each word).
    /// * `textBaseline`: The common baseline that should be aligned between this text span and its parent text span, or, for the root text spans, with the line box.
    /// * `height`: The height of this text span, as a multiplier of the font size. Omitting `height` will allow the line height
    ///   to take the height as defined by the font, which may not be exactly the height of the fontSize.
    /// * `leadingDistribution`: When `height` is specified, how the extra vertical space should be distributed over and under the text. Defaults
    ///   to the paragraph's [TextHeightBehavior] if left unspecified.
    /// * `background`: The paint drawn as a background for the text.
    /// * `foreground`: The paint used to draw the text. If this is specified, `color` must be null.
    /// * `fontFeatures`: The font features that should be applied to the text.
    constructor(args) {
        this.color = args.color || this.color;
        this.decoration = args.decoration || this.decoration;
        this.decorationColor = args.decorationColor || this.decorationColor;
        this.decorationStyle = args.decorationStyle || this.decorationStyle;
        this.decorationThickness = args.decorationThickness || this.decorationThickness;
        this.fontWeight = args.fontWeight || this.fontWeight;
        this.fontStyle = args.fontStyle || this.fontStyle;
        this.textBaseline = args.textBaseline || this.textBaseline;
        this.fontFamily = args.fontFamily || this.fontFamily;
        this.fontFamilyFallback = args.fontFamilyFallback || this.fontFamilyFallback;
        this.fontSize = args.fontSize || this.fontSize;
        this.letterSpacing = args.letterSpacing || this.letterSpacing;
        this.wordSpacing = args.wordSpacing || this.wordSpacing;
        this.height = args.height || this.height;
        this.background = args.background || this.background;
        this.foreground = args.foreground || this.foreground;
        this.shadows = args.shadows || this.shadows;
        this.fontFeatures = args.fontFeatures || this.fontFeatures;
    }
}
exports.TextStyle = TextStyle;
