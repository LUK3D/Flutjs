import { ThemeData } from "../painting/themeData.js";
import { Widget } from "../widgets/framework.js";
declare enum ThemeMode {
    system = 0,
    light = 1,
    dark = 2
}
/**
 * Flutjs base App Scaffold
 * @returns Widget
 */
declare function FlutApp(args: {
    title?: string;
    theme?: ThemeData;
    home: Widget;
    mounted?: Function;
}): string;
export { ThemeMode, FlutApp };
