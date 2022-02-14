"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const framework_1 = require("./framework");
class _Column extends framework_1.ExtendedWidget {
    constructor(args) {
        super({
            tagName: "div",
            children: args.children
        });
    }
}
function Column(args) {
    return new _Column({ children: args.children });
}
exports.Column = Column;
