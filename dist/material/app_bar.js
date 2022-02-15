"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._AppBar = exports.AppBar = void 0;
const framework_1 = __importDefault(require("../widgets/framework"));
class _AppBar extends framework_1.default {
    constructor(args) {
        var children = [];
        if (args.leading) {
            children.push(args.leading);
        }
        if (args.title) {
            children.push(args.title);
        }
        if (args.actions) {
            children = [...children, ...args.actions];
        }
        super({ tagName: "div", children: children });
    }
}
exports._AppBar = _AppBar;
/** Creates a material design app bar.
*
* The arguments [primary], [toolbarOpacity], [bottomOpacity],
* [backwardsCompatibility], and [automaticallyImplyLeading] must
* not be null. Additionally, if [elevation] is specified, it must
* be non-negative.
*
* Typically used in the [Scaffold.appBar] property.
*/
function AppBar(args) {
    return new _AppBar(args);
}
exports.AppBar = AppBar;
