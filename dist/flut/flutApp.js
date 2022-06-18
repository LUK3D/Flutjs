import { App } from "../widgets/app.js";
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["system"] = 0] = "system";
    ThemeMode[ThemeMode["light"] = 1] = "light";
    ThemeMode[ThemeMode["dark"] = 2] = "dark";
})(ThemeMode || (ThemeMode = {}));
/**
 * Flutjs base App Scaffold
 * @returns Widget
 */
function FlutApp(args) {
    return App({
        title: args.title,
        theme: args.theme,
        home: args.home,
        mounted: args.mounted
    });
}
export { ThemeMode, FlutApp };
//# sourceMappingURL=flutApp.js.map