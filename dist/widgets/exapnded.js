"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expanded = void 0;
const framework_1 = __importDefault(require("./framework"));
class _Expanded extends framework_1.default {
    constructor(args) {
        super({
            key: args.key,
            tagName: "div",
            child: args.child
        });
        this.tag.style.width = "100%";
        this.tag.style.height = "100%";
        args.child.tag.style.width = "100%";
        args.child.tag.style.height = "100%";
    }
}
function Expanded(args) {
    return new _Expanded(args);
}
exports.Expanded = Expanded;
