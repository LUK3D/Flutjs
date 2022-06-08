import { Widget } from "./widgets/framework.js";
import { ThemeData } from "./painting/themeData.js";
// new Widget({tagName:"div"});
var Flutjs = {
    Widget: Widget,
    ThemeData: ThemeData
};
export { Widget, ThemeData };
window.Flutjs = Flutjs;
