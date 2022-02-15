"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const framework_1 = __importDefault(require("./framework"));
class _Column extends framework_1.default {
    constructor(args) {
        super({
            tagName: "div",
            children: args.children,
        });
    }
}
function Column(args) {
    return new _Column(args);
}
exports.Column = Column;
