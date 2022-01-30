"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedWidget = exports.Widget = void 0;
const uuid_1 = __importDefault(require("../utils/uuid"));
/**
 * Flutjs class to generate a new Widget
 */
class Widget {
    constructor(args) {
        /**
         * widget Id, when rendered, it will generate am id
         */
        this.key = new uuid_1.default().uuidv4();
        this.child = args.child;
        this.parent = args.parent;
        this.render({ tagName: args.tagName });
        this.addTextContent({ text: args.text });
        return this;
    }
    render(args) {
        this.tag = document.createElement(args.tagName);
        this.tag.id = this.key;
        if (this.child) {
            this.tag.appendChild(this.child.tag);
        }
        else {
            this.addParent(this.tag);
        }
    }
    addParent(el) {
        if (this.parent) {
            this.tag.appendChild(el);
        }
        else {
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
        this.tag.appendChild(el);
    }
}
exports.default = Widget;
exports.Widget = Widget;
class ExtendedWidget extends Widget {
    constructor(args) {
        super({ tagName: args.tagName });
        this.buildChilds({ children: args.children });
    }
    addStyle() {
        var _a;
        (_a = this.tag) === null || _a === void 0 ? void 0 : _a.classList.add("flex");
    }
    buildChilds(args) {
        if (args.children) {
            args.children.forEach(element => {
                this.appendChild(element.tag);
            });
        }
    }
}
exports.ExtendedWidget = ExtendedWidget;
