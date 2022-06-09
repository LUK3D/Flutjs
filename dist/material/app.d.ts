import { ThemeData } from "../painting/themeData.js";
import { Widget } from "../widgets/index.js";
declare enum ThemeMode {
    system = 0,
    light = 1,
    dark = 2
}
declare function MaterialApp(args: {
    title?: string;
    theme?: ThemeData;
    home: Widget;
}): string;
export { ThemeMode, MaterialApp };
