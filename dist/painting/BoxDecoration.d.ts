import { Color } from "./colors.js";
declare class _BoxDecation {
    color?: string;
    constructor(args: {
        color?: Color;
    });
}
declare function BoxDecation(args: {
    color?: Color;
}): _BoxDecation;
export { BoxDecation, _BoxDecation };
