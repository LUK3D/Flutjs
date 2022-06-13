import { Colors } from "../painting/colors.js";
import { CssProperties } from "../utils/cssprops.js";
import { Widget } from "../widgets/framework.js";
function Scaffold(args) {
    var _a;
    var children = [];
    if (args.appBar) {
        children.push(args.appBar);
    }
    if (args.body) {
        children.push(args.body);
    }
    var widget = new Widget({
        tagName: "div",
        children: children,
        css: new CssProperties({
            backgroundColor: Colors.Gray[100].value,
            width: "100%",
            height: "100%",
        }),
    });
    if (args.body && args.appBar) {
        widget.tag.style.paddingTop =
            (_a = args.appBar.tag.offsetHeight + 20 + "px") !== null && _a !== void 0 ? _a : "100px";
        widget.tag.setAttribute("component", "body");
    }
    return widget;
}
export { Scaffold };
//# sourceMappingURL=scaffold.js.map