"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractCss = void 0;
class CSS {
    extractCss(widget) {
        let style = widget.tag.getAttribute("style");
        // widget.tag!.removeAttribute("style");
        let formatedStyle = `[key="${widget.tag.getAttribute("key")}"]{\n\t${style === null || style === void 0 ? void 0 : style.split("; ").join(";\n\t")}\n}\n`;
        // widget.style = formatedStyle;
        return formatedStyle;
    }
}
function ExtractCss(widget) {
    return new CSS().extractCss(widget);
}
exports.ExtractCss = ExtractCss;
