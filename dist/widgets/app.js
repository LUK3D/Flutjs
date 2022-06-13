var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Widget } from "./framework.js";
var _App = /** @class */ (function (_super) {
    __extends(_App, _super);
    function _App(args) {
        var _this = this;
        var _a;
        _this = _super.call(this, { tagName: "div", children: [args.home] }) || this;
        _this.title = args.title;
        _this.theme = args.theme;
        _this.home = args.home;
        _this.tag.style.width = "100vw";
        _this.tag.style.height = "100vh";
        _this.classes = args.classes;
        document.title = (_a = args.title) !== null && _a !== void 0 ? _a : document.title;
        return _this;
        // this.tag = document.createElement("div");
        // this.tag.id  = "baseApp";
    }
    _App.prototype.build = function () {
        return document.body.outerHTML;
    };
    return _App;
}(Widget));
function App(args) {
    var _a;
    var app = new _App({ title: args.title, theme: args.theme, home: args.home, classes: args.classes });
    return ((_a = app.tag) === null || _a === void 0 ? void 0 : _a.outerHTML) + "\n\n<style>\n".concat(app.style, "\n</style>");
}
export { App };
//# sourceMappingURL=app.js.map