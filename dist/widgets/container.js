"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const framework_1 = require("./framework");
class _Container extends framework_1.Widget {
    constructor(args) {
        super(Object.assign({ tagName: "div" }, args));
        return this;
    }
}
function Container(args) {
    return new _Container(args);
}
exports.Container = Container;
