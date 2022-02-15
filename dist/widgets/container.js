"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const framework_1 = require("./framework");
class _Container extends framework_1.Widget {
    constructor(args) {
        super({ tagName: "div", child: args.child, key: args.key });
        return this;
    }
}
function Container(args) {
    return new _Container({ child: args.child, key: args.key });
}
exports.Container = Container;
