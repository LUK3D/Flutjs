import { BlurStyle } from "../ui/painting.js";
import { _Offset } from "../utils/offset.js";
import { Color } from "./colors.js";
declare class BoxShadow {
    color: Color;
    offset: _Offset;
    blurRadius: number;
    spreadRadius: number;
    blurStyle?: BlurStyle;
    constructor(args: {
        color?: Color;
        offset?: _Offset;
        blurRadius?: number;
        spreadRadius?: number;
        blurStyle?: BlurStyle;
    });
    value(): string;
}
export { BoxShadow };
