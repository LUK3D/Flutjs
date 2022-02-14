"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const framework_1 = require("./framework");
class App extends framework_1.ExtendedWidget {
    constructor(args) {
        super({ tagName: "div", children: [args.home] });
        this.title = args.title;
        this.theme = args.theme;
        this.home = args.home;
    }
    build() {
        return this.home.tag.outerHTML;
    }
}
exports.App = App;
