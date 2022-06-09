import { App } from "../widgets/app.js";
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["system"] = 0] = "system";
    ThemeMode[ThemeMode["light"] = 1] = "light";
    ThemeMode[ThemeMode["dark"] = 2] = "dark";
})(ThemeMode || (ThemeMode = {}));
function WindiApp(args) {
    return App({
        title: args.title,
        theme: args.theme,
        home: args.home,
        classes: [
            'bg-gray-100'
        ]
    });
}
export { ThemeMode, WindiApp };
//# sourceMappingURL=windi_app.js.map