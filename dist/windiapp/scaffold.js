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
        classes: [
            "w-full",
            "h-full",
            "bg-gray-100"
        ]
    });
    if (args.body && args.appBar) {
        widget.tag.style.paddingTop = (_a = (args.appBar.tag.offsetHeight + 10 + "px")) !== null && _a !== void 0 ? _a : "100px";
    }
    return widget;
}
export { Scaffold };
//# sourceMappingURL=scaffold.js.map