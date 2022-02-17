"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const text_theme_1 = require("../material/text_theme");
const colors_1 = require("./colors");
const text_style_1 = require("./text_style");
const text_1 = require("./text");
class Typography {
    constructor() {
        /// This [TextTheme] provides color but not geometry (font size, weight, etc).
        this.blackMountainView = new text_theme_1.TextTheme({
            displayLarge: new text_style_1._TextStyle({
                debugLabel: "blackMountainView displayLarge",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[50].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            displayMedium: new text_style_1._TextStyle({
                debugLabel: "blackMountainView displayMedium",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[50].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            displaySmall: new text_style_1._TextStyle({
                debugLabel: "blackMountainView displaySmall",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[50].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            headlineLarge: new text_style_1._TextStyle({
                debugLabel: "blackMountainView headlineLarge",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[50].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            headlineMedium: new text_style_1._TextStyle({
                debugLabel: "blackMountainView headlineMedium",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[50].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            headlineSmall: new text_style_1._TextStyle({
                debugLabel: "blackMountainView headlineSmall",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[100].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            titleLarge: new text_style_1._TextStyle({
                debugLabel: "blackMountainView titleLarge",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[100].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            titleMedium: new text_style_1._TextStyle({
                debugLabel: "blackMountainView titleMedium",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[100].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            titleSmall: new text_style_1._TextStyle({
                debugLabel: "blackMountainView titleSmall",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[800].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            bodyLarge: new text_style_1._TextStyle({
                debugLabel: "blackMountainView bodyLarge",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[100].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            bodyMedium: new text_style_1._TextStyle({
                debugLabel: "blackMountainView bodyMedium",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[100].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            bodySmall: new text_style_1._TextStyle({
                debugLabel: "blackMountainView bodySmall",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[50].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            labelLarge: new text_style_1._TextStyle({
                debugLabel: "blackMountainView labelLarge",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[100].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            labelMedium: new text_style_1._TextStyle({
                debugLabel: "blackMountainView labelMedium",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[800].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
            labelSmall: new text_style_1._TextStyle({
                debugLabel: "blackMountainView labelSmall",
                fontFamily: "Roboto",
                color: colors_1.Colors.Gray[800].value,
                decoration: new text_1.TextDecoration({}).none,
            }),
        });
    }
}
exports.Typography = Typography;
