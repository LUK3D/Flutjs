import { TextTheme } from "../material/text_theme.js";
import { Colors } from "./colors.js";
import { _TextStyle } from "./text_style.js";
import { TextDecoration } from "../ui/text.js";
var Typography = /** @class */ (function () {
    function Typography() {
        /// This [TextTheme] provides color but not geometry (font size, weight, etc).
        this.blackMountainView = new TextTheme({
            displayLarge: new _TextStyle({
                debugLabel: "blackMountainView displayLarge",
                fontFamily: "Roboto",
                color: Colors.Gray[50].value,
                decoration: new TextDecoration({}).none,
            }),
            displayMedium: new _TextStyle({
                debugLabel: "blackMountainView displayMedium",
                fontFamily: "Roboto",
                color: Colors.Gray[50].value,
                decoration: new TextDecoration({}).none,
            }),
            displaySmall: new _TextStyle({
                debugLabel: "blackMountainView displaySmall",
                fontFamily: "Roboto",
                color: Colors.Gray[50].value,
                decoration: new TextDecoration({}).none,
            }),
            headlineLarge: new _TextStyle({
                debugLabel: "blackMountainView headlineLarge",
                fontFamily: "Roboto",
                color: Colors.Gray[50].value,
                decoration: new TextDecoration({}).none,
            }),
            headlineMedium: new _TextStyle({
                debugLabel: "blackMountainView headlineMedium",
                fontFamily: "Roboto",
                color: Colors.Gray[50].value,
                decoration: new TextDecoration({}).none,
            }),
            headlineSmall: new _TextStyle({
                debugLabel: "blackMountainView headlineSmall",
                fontFamily: "Roboto",
                color: Colors.Gray[100].value,
                decoration: new TextDecoration({}).none,
            }),
            titleLarge: new _TextStyle({
                debugLabel: "blackMountainView titleLarge",
                fontFamily: "Roboto",
                color: Colors.Gray[100].value,
                decoration: new TextDecoration({}).none,
            }),
            titleMedium: new _TextStyle({
                debugLabel: "blackMountainView titleMedium",
                fontFamily: "Roboto",
                color: Colors.Gray[100].value,
                decoration: new TextDecoration({}).none,
            }),
            titleSmall: new _TextStyle({
                debugLabel: "blackMountainView titleSmall",
                fontFamily: "Roboto",
                color: Colors.Gray[800].value,
                decoration: new TextDecoration({}).none,
            }),
            bodyLarge: new _TextStyle({
                debugLabel: "blackMountainView bodyLarge",
                fontFamily: "Roboto",
                color: Colors.Gray[100].value,
                decoration: new TextDecoration({}).none,
            }),
            bodyMedium: new _TextStyle({
                debugLabel: "blackMountainView bodyMedium",
                fontFamily: "Roboto",
                color: Colors.Gray[100].value,
                decoration: new TextDecoration({}).none,
            }),
            bodySmall: new _TextStyle({
                debugLabel: "blackMountainView bodySmall",
                fontFamily: "Roboto",
                color: Colors.Gray[50].value,
                decoration: new TextDecoration({}).none,
            }),
            labelLarge: new _TextStyle({
                debugLabel: "blackMountainView labelLarge",
                fontFamily: "Roboto",
                color: Colors.Gray[100].value,
                decoration: new TextDecoration({}).none,
            }),
            labelMedium: new _TextStyle({
                debugLabel: "blackMountainView labelMedium",
                fontFamily: "Roboto",
                color: Colors.Gray[800].value,
                decoration: new TextDecoration({}).none,
            }),
            labelSmall: new _TextStyle({
                debugLabel: "blackMountainView labelSmall",
                fontFamily: "Roboto",
                color: Colors.Gray[800].value,
                decoration: new TextDecoration({}).none,
            }),
        });
    }
    return Typography;
}());
export { Typography };
//# sourceMappingURL=typography.js.map