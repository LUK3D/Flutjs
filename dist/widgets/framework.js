"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const processor_1 = require("../utils/processor");
const uuid_1 = require("../utils/uuid");
const validator_1 = require("../utils/validator");
/**
 * Flutjs class to generate a new Widget
 */
class Widget {
    constructor(args) {
        this.width = "auto";
        this.height = "auto";
        this.key = args.key;
        this.child = args.child;
        this.children = args.children;
        this.parent = args.parent;
        this.render({ tagName: args.tagName, text: args.text });
        this.width = args.width || this.width;
        this.height = args.height || this.height;
        this.key = (0, uuid_1.Key)();
        this.setKey(args.key);
        this.classes = args.classes;
        if ((0, validator_1.isNumber)(args.width)) {
            this.tag.style.width = args.width.toString() + "%";
        }
        if ((0, validator_1.isNumber)(args.height)) {
            this.tag.style.height = args.height.toString() + "%";
        }
        return this;
    }
    setKey(key) {
        var _a, _b;
        if (key) {
            (_a = this.tag) === null || _a === void 0 ? void 0 : _a.setAttribute("key", key.toString());
        }
        else {
            (_b = this.tag) === null || _b === void 0 ? void 0 : _b.setAttribute("key", `${this.tag.tagName.toLowerCase()}_${this.key.toString()}`);
        }
    }
    render(args) {
        this.tag = document.createElement(args.tagName);
        document.body.appendChild(this.tag);
        if (this.classes) {
            this.tag.classList.add(this.classes.join(" "));
        }
        this.addTextContent({ text: args.text });
        if (this.child) {
            this.appendChild(this.child.tag);
            this.addStyle(this.child);
        }
        if (this.children) {
            let ctx = this;
            this.children.map((widget) => {
                widget.parent = ctx.tag;
                this.addStyle(widget);
                this.appendChild(widget.tag);
            });
        }
    }
    addStyle(widget) {
        if (!this.style) {
            this.style = this.tag.getAttribute("style") || "";
        }
        console.log("WIDGET STYLE: ", widget.style + this.style);
        this.style = (0, processor_1.ExtractCss)(widget);
        //Removendo o atributo style para deixar o código mais limpo.
        // widget.tag!.removeAttribute("style");
        console.log("STYLE2: ", this.style);
    }
    addTextContent(args) {
        if (args.text) {
            if (args.text.length > 0) {
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
