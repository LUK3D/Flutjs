"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const validator_1 = require("../utils/validator");
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
        if (args.key) {
            this.key = args.key;
        }
        this.classes = args.classes;
        if ((0, validator_1.isNumber)(args.width)) {
            this.tag.style.width = args.width.toString() + "%";
        }
        if ((0, validator_1.isNumber)(args.height)) {
            this.tag.style.height = args.height.toString() + "%";
        }
        return this;
    }
    render(args) {
        this.tag = document.createElement(args.tagName);
        document.body.appendChild(this.tag);
        if (this.classes) {
            this.tag.classList.add(this.classes.join(" "));
        }
        //  this.tag.style.width = `${this.width}`;
        //  this.tag.style.height = `${this.height}`;
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
