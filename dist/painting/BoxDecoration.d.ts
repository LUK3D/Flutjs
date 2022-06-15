import { BorderRadiusGeometry } from "./BorderRadiusGeometry.js";
import { BoxShadow } from "./boxShadow.js";
import { Color } from "./colors.js";
declare class _BoxDecoration {
    color?: string;
    borderRadius?: BorderRadiusGeometry;
    boxShadow?: Array<BoxShadow>;
    constructor(args: {
        color?: Color;
        borderRadius?: BorderRadiusGeometry;
        boxShadow?: Array<BoxShadow>;
    });
}
declare function BoxDecoration(args: {
    color?: Color;
    borderRadius?: BorderRadiusGeometry;
    boxShadow?: Array<BoxShadow>;
}): _BoxDecoration;
export { BoxDecoration, _BoxDecoration };
