import { ThemeData } from "../painting/themeData.js";
import { Widget } from "./framework.js";
declare function App(args: {
    title?: string;
    theme?: ThemeData;
    home: Widget;
    width?: number | string;
    height?: number | string;
    classes?: Array<string>;
}): string;
export { App };
