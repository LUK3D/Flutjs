var CSS = /** @class */ (function () {
    function CSS() {
    }
    CSS.prototype.extractCss = function (widget) {
        var style = widget.tag.getAttribute("style");
        // widget.tag!.removeAttribute("style");
        var formatedStyle = "[key=\"".concat(widget.tag.getAttribute("key"), "\"]{\n\t").concat(style === null || style === void 0 ? void 0 : style.split("; ").join(";\n\t"), "\n}\n");
        // widget.style = formatedStyle;
        return formatedStyle;
    };
    return CSS;
}());
function ExtractCss(widget) {
    return new CSS().extractCss(widget);
}
export { ExtractCss };
