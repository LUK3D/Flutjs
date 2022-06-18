import { ThemeData } from "../painting/themeData.js";
import { App } from "../widgets/app.js";
import { Widget } from "../widgets/framework.js";

enum ThemeMode {
  system,
  light,
  dark,
}

/**
 * Flutjs base App Scaffold 
 * @returns Widget
 */
function FlutApp(args: { title?: string; theme?: ThemeData; home: Widget ,mounted?:Function}) {
  return App({
    title: args.title,
    theme: args.theme,
    home: args.home,
    mounted:args.mounted
  });
}

export { ThemeMode,  FlutApp };
