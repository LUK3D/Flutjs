"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const framework_1 = require("./framework");
class _Text extends framework_1.Widget {
    constructor(args) {
        super({ tagName: "p", key: args.key, text: args.text });
        if (args) {
            if (args.textStyle) {
                if (args.textStyle.color) {
                    this.tag.style.color = args.textStyle.color;
                }
            }
        }
        return this;
    }
}
function Text(value, args) {
    return new _Text({ text: value, textStyle: args === null || args === void 0 ? void 0 : args.textStyle });
}
exports.Text = Text;
