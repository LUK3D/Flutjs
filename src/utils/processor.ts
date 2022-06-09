import {Widget} from "../widgets/index.js";

class CSS {
  extractCss(widget: Widget) {
    let style = widget.tag!.getAttribute("style");
   // widget.tag!.removeAttribute("style");
    let formatedStyle = `[key="${widget.tag!.getAttribute("key")}"]{\n\t${style?.split("; ").join(";\n\t")}\n}\n`;
    // widget.style = formatedStyle;
    return formatedStyle;
  }
}

function ExtractCss(widget: Widget) {
  return new CSS().extractCss(widget);
}

export { ExtractCss };
