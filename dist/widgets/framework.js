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
        this.render({ tagName: args.tagName });
        this.addTextContent({ text: args.text });
        this.width = args.width || this.width;
        this.height = args.height || this.height;
        this.key = args.key || new uuid_1.default().uuidv4();
        return this;
    }
    render(args) {
        this.tag = document.createElement(args.tagName);
        this.tag.id = (this.key || new uuid_1.default().uuidv4()).toString();
        this.tag.style.width = `${this.width}`;
        this.tag.style.height = `${this.height}`;
        if (this.child) {
            this.tag.appendChild(this.child.tag);
        }
        else if (this.children) {
            let ctx = this;
            this.children.map((widget) => {
                var _a;
                widget.parent = ctx.tag;
                console.log("TAGS: ", widget.tag.tagName);
                ctx.tag.appendChild(widget.tag);
                console.log("TAGS->: ", (_a = ctx.tag) === null || _a === void 0 ? void 0 : _a.outerHTML);
            });
        }
        else {
            // console.log("No parent: ",this.tag);
            // this.addParent(this.tag);
        }
    }
    addParent(el) {
        if (this.parent) {
            console.log("NO_BODY->: ", el.outerHTML);
            this.tag.appendChild(el);
        }
        else {
            console.log("BODY->: ", el.outerHTML);
            document.body.appendChild(el);
        }
    }
    addTextContent(args) {
        var _a;
        if (args.text) {
            if (args.text.length > 0) {
                let textEl = document.createTextNode(args.text);
                (_a = this.tag) === null || _a === void 0 ? void 0 : _a.appendChild(textEl);
            }
        }
    }
    appendChild(el) {
        console.log("Parent: ", this.tag.tagName, " Child: ", el.tagName);
        this.tag.appendChild(el);
    }
}
exports.default = Widget;
exports.Widget = Widget;
