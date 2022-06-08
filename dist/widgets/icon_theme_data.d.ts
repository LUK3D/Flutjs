import { Color } from "../painting/colors.js";
declare class IconThemeData {
    color: Color;
    opacity: number;
    size: number;
    constructor(args: {
        color: Color;
        opacity: number;
        size: number;
    });
    copyWith(args: {
        color?: Color;
        opacity?: number;
        size?: number;
    }): IconThemeData;
}
export { IconThemeData };
