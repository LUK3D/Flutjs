import { Color } from "../painting/colors.js";
import { Widget } from "../widgets/index.js";
declare function academicCap(args: {
    color?: Color;
    size?: number;
}): Widget;
declare function adjustments(args: {
    color?: Color;
    size?: number;
}): Widget;
export { academicCap, adjustments };
