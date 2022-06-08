import { Widget } from "../widgets/framework.js";
function Scaffold(args) {
    var children = [];
    if (args.appBar) {
        children.push(args.appBar);
    }
    if (args.body) {
        children.push(args.body);
    }
    return new Widget({
        tagName: "div",
        children: children,
        classes: [
            "w-full",
            "h-full",
            "bg-gray-100"
        ]
    });
}
export { Scaffold };
//# sourceMappingURL=scaffold.js.map