import { _TextStyle } from "../painting/text_style.js";
import _Key from "../utils/uuid.js";
import { Widget } from "./framework.js";
declare class _Text extends Widget {
    constructor(args: {
        text: string;
        key?: _Key | string;
        textStyle?: _TextStyle;
    });
}
declare function Text(value: string, args?: {
    textStyle?: _TextStyle;
}): _Text;
export { Text };
