"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialApp = exports.ThemeMode = void 0;
const app_1 = require("../widgets/app");
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["system"] = 0] = "system";
    ThemeMode[ThemeMode["light"] = 1] = "light";
    ThemeMode[ThemeMode["dark"] = 2] = "dark";
})(ThemeMode || (ThemeMode = {}));
exports.ThemeMode = ThemeMode;
function MaterialApp(args) {
    return (0, app_1.App)({
        title: args.title,
        theme: args.theme,
        home: args.home
    });
}
exports.MaterialApp = MaterialApp;
