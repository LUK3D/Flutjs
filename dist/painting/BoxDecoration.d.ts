import { BorderRadiusGeometry } from "./BorderRadiusGeometry.js";
import { Color } from "./colors.js";
declare class _BoxDecoration {
    color?: string;
    borderRadius?: BorderRadiusGeometry;
    constructor(args: {
        color?: Color;
        borderRadius?: BorderRadiusGeometry;
    });
}
declare function BoxDecoration(args: {
    color?: Color;
    borderRadius?: BorderRadiusGeometry;
}): _BoxDecoration;
export { BoxDecoration, _BoxDecoration };
