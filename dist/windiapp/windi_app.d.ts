import { ThemeData } from "../painting/themeData.js";
import { Widget } from "../widgets/framework.js";
declare enum ThemeMode {
    system = 0,
    light = 1,
    dark = 2
}
declare function WindiApp(args: {
    title?: string;
    theme?: ThemeData;
    home: Widget;
}): string;
export { ThemeMode, WindiApp };
