import { EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { Widget } from "./framework.js";
declare class _Padding extends Widget {
    constructor(args: {
        padding: EdgeInsetsGeometry;
        child: Widget | undefined;
    });
}
declare function Padding(args: {
    padding: EdgeInsetsGeometry;
    child: Widget | undefined;
}): _Padding;
export { Padding };
