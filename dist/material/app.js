import { App } from "../widgets/app.js";
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["system"] = 0] = "system";
    ThemeMode[ThemeMode["light"] = 1] = "light";
    ThemeMode[ThemeMode["dark"] = 2] = "dark";
})(ThemeMode || (ThemeMode = {}));
function MaterialApp(args) {
    return App({
        title: args.title,
        theme: args.theme,
        home: args.home
    });
}
export { ThemeMode, MaterialApp };
//# sourceMappingURL=app.js.map