"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeData = exports.Widget = exports.ExtendedWidget = void 0;
const framework_1 = require("./widgets/framework");
Object.defineProperty(exports, "Widget", { enumerable: true, get: function () { return framework_1.Widget; } });
Object.defineProperty(exports, "ExtendedWidget", { enumerable: true, get: function () { return framework_1.ExtendedWidget; } });
const themeData_1 = require("./painting/themeData");
Object.defineProperty(exports, "ThemeData", { enumerable: true, get: function () { return themeData_1.ThemeData; } });
// new Widget({tagName:"div"});
let Flutjs = {
    Widget: framework_1.Widget,
    ExtendedWidget: framework_1.ExtendedWidget,
    ThemeData: themeData_1.ThemeData
};
window.Flutjs = Flutjs;
