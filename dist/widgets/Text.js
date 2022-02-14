"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const framework_1 = require("./framework");
class _Text extends framework_1.Widget {
    constructor(args) {
        super({ tagName: "div", key: args.key, text: args.text });
        return this;
    }
}
function Text(value, args) {
    return new _Text({ text: value });
}
exports.Text = Text;
