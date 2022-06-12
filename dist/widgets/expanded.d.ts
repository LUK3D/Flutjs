import _Key from "../utils/uuid.js";
import Widget from "./framework.js";
declare class _Expanded extends Widget {
    constructor(args: {
        key?: _Key;
        child: Widget;
    });
}
declare function Expanded(args: {
    key?: _Key;
    child: Widget;
}): _Expanded;
export { Expanded };
