import { ThemeData } from "../painting/themeData.js";
import { App } from "../widgets/app.js";
import { Widget } from "../widgets/framework.js";

enum ThemeMode {
  system,
  light,
  dark,
}

function WindiApp(args: { title?: string; theme?: ThemeData; home: Widget }) {
  return App({
    title: args.title,
    theme: args.theme,
    home: args.home,
  });
}

export { ThemeMode, WindiApp };
