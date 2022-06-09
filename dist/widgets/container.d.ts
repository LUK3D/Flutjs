import { _BoxDecation } from "../painting/index.js";
import { Color } from "../painting/colors.js";
import _Key from "../utils/uuid.js";
import { Widget } from "./framework.js";
declare class _Container extends Widget {
    constructor(args: {
        key?: _Key | string;
        child?: Widget;
        width?: number | string;
        height?: number | string;
        color?: Color;
        decoratio?: _BoxDecation;
    });
}
declare function Container(args: {
    key?: _Key | string;
    child?: Widget;
    width?: number | string;
    height?: number | string;
    color?: Color;
    decoratio?: _BoxDecation;
}): _Container;
export { Container, _Container };
