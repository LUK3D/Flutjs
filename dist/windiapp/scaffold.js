import { Colors } from "../painting/colors.js";
import { CssProperties } from "../utils/cssprops.js";
import { Widget } from "../widgets/framework.js";
function Scaffold(args) {
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
            overflow: "hidden"
        }),
    });
    /**Adds a padding top to the body of the page. */
    // if (args.body && args.appBar) {
    //   widget.tag!.style.paddingTop =
    //     args.appBar.tag!.offsetHeight +  "px" ?? "100px";
    //   widget.tag!.setAttribute("component", "body");
    // }
    return widget;
}
export { Scaffold };
//# sourceMappingURL=scaffold.js.map