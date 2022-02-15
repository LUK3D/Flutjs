"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const framework_1 = __importDefault(require("./framework"));
class _App extends framework_1.default {
    constructor(args) {
        super({ tagName: "div", children: [args.home] });
        this.title = args.title;
        this.theme = args.theme;
        this.home = args.home;
        this.tag.style.width = "100vw";
        this.tag.style.height = "100vh";
        // this.tag = document.createElement("div");
        // this.tag.id  = "baseApp";
    }
    build() {
        return document.body.outerHTML;
    }
}
function App(args) {
    var _a;
    var app = new _App({ title: args.title, theme: args.theme, home: args.home });
    return (_a = app.tag) === null || _a === void 0 ? void 0 : _a.outerHTML;
}
exports.App = App;
