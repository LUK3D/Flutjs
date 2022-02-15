"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const uuid_1 = __importDefault(require("../utils/uuid"));
/**
 * Flutjs class to generate a new Widget
 */
class Widget {
    constructor(args) {
        this.width = "auto";
        this.height = "auto";
        this.child = args.child;
        this.children = args.children;
        this.parent = args.parent;
        this.render({ tagName: args.tagName, text: args.text });
        this.width = args.width || this.width;
        this.height = args.height || this.height;
        this.key = args.key || new uuid_1.default().uuidv4();
        return this;
    }
    render(args) {
        this.tag = document.createElement(args.tagName);
        document.body.appendChild(this.tag);
        this.tag.id = (this.key || new uuid_1.default().uuidv4()).toString();
        this.tag.style.width = `${this.width}`;
        this.tag.style.height = `${this.height}`;
        this.addTextContent({ text: args.text });
        if (this.child) {
            this.appendChild(this.child.tag);
        }
        if (this.children) {
            let ctx = this;
            this.children.map((widget) => {
                widget.parent = ctx.tag;
                this.appendChild(widget.tag);
            });
        }
    }
    addTextContent(args) {
        if (args.text) {
            if (args.text.length > 0) {
                // let textEl = document.createTextNode(args.text);
                this.tag.textContent = args.text;
            }
        }
    }
    appendChild(el) {
        var _a;
        (_a = this.tag) === null || _a === void 0 ? void 0 : _a.appendChild(el);
    }
}
exports.default = Widget;
exports.Widget = Widget;
