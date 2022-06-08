import _Key from "../utils/uuid.js";
import { Widget } from "./framework.js";
declare class _Container extends Widget {
    constructor(args: {
        key?: _Key | string;
        child?: Widget;
        width?: number;
        height?: number;
    });
}
declare function Container(args: {
    key?: _Key | string;
    child?: Widget;
    width?: number;
    height?: number;
}): _Container;
export { Container, _Container };
