"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeData = exports.Widget = void 0;
const framework_1 = require("./widgets/framework");
Object.defineProperty(exports, "Widget", { enumerable: true, get: function () { return framework_1.Widget; } });
const themeData_1 = require("./painting/themeData");
Object.defineProperty(exports, "ThemeData", { enumerable: true, get: function () { return themeData_1.ThemeData; } });
// new Widget({tagName:"div"});
let Flutjs = {
    Widget: framework_1.Widget,
    ThemeData: themeData_1.ThemeData
};
window.Flutjs = Flutjs;
