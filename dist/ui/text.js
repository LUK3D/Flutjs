/// Whether to slant the glyphs in the font
var FontStyle;
(function (FontStyle) {
    /// Use the upright glyphs
    FontStyle[FontStyle["normal"] = 0] = "normal";
    /// Use glyphs designed for slanting
    FontStyle[FontStyle["italic"] = 1] = "italic";
})(FontStyle || (FontStyle = {}));
var FontWeight;
(function (FontWeight) {
    FontWeight[FontWeight["w100"] = 0] = "w100";
    FontWeight[FontWeight["w200"] = 1] = "w200";
    FontWeight[FontWeight["w300"] = 2] = "w300";
    FontWeight[FontWeight["w400"] = 3] = "w400";
    FontWeight[FontWeight["w500"] = 4] = "w500";
    FontWeight[FontWeight["w600"] = 5] = "w600";
    FontWeight[FontWeight["w700"] = 6] = "w700";
    FontWeight[FontWeight["w800"] = 7] = "w800";
    FontWeight[FontWeight["w900"] = 8] = "w900";
    FontWeight[FontWeight["normal"] = 9] = "normal";
    FontWeight[FontWeight["bold"] = 10] = "bold";
})(FontWeight || (FontWeight = {}));
/// The thickness of the glyphs used to draw the text
var _FontWeight = /** @class */ (function () {
    // w100:_FontWeight = new _FontWeight(100);
    // w200:_FontWeight= new _FontWeight(200);;
    // w300:_FontWeight= new _FontWeight(300);;
    // w400:_FontWeight= new _FontWeight(400);;
    // w500:_FontWeight= new _FontWeight(500);;
    // w600:_FontWeight= new _FontWeight(600);;
    // w700:_FontWeight= new _FontWeight(700);;
    // w800:_FontWeight= new _FontWeight(800);;
    // w900:_FontWeight= new _FontWeight(900);;
    function _FontWeight(value) {
        if (value == FontWeight.w100) {
            this.value = "100";
            return;
        }
        if (value == FontWeight.w200) {
            this.value = "200";
            return;
        }
        if (value == FontWeight.w300) {
            this.value = "300";
            return;
        }
        if (value == FontWeight.w400) {
            this.value = "400";
            return;
        }
        if (value == FontWeight.w500) {
            this.value = "500";
            return;
        }
        if (value == FontWeight.w600) {
            this.value = "600";
            return;
        }
        if (value == FontWeight.w700) {
            this.value = "700";
            return;
        }
        if (value == FontWeight.w800) {
            this.value = "800";
            return;
        }
        if (value == FontWeight.w900) {
            this.value = "900";
            return;
        }
    }
    return _FontWeight;
}());
export default _FontWeight;
var TextDecoration = /** @class */ (function () {
    function TextDecoration(args) {
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
    return TextDecoration;
}());
export { _FontWeight, FontWeight, TextDecoration };
//# sourceMappingURL=text.js.map