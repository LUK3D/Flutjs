"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialApp = exports.ThemeMode = void 0;
const framework_1 = require("../widgets/framework");
var ThemeMode;
(function (ThemeMode) {
    ThemeMode[ThemeMode["system"] = 0] = "system";
    ThemeMode[ThemeMode["light"] = 1] = "light";
    ThemeMode[ThemeMode["dark"] = 2] = "dark";
})(ThemeMode || (ThemeMode = {}));
exports.ThemeMode = ThemeMode;
function MaterialApp(args) {
    return new framework_1.Widget({
        tagName: "div",
        child: args.home
    });
}
exports.MaterialApp = MaterialApp;