"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scaffold = void 0;
const framework_1 = require("../widgets/framework");
function Scaffold(args) {
    // var children = [];
    // if(args.appBar){
    //     children.push(args.appBar);
    // }
    // if(args.body){
    //     children.push(args.body);
    // }
    return new framework_1.ExtendedWidget({
        tagName: "div",
        children: [args.body]
    });
}
exports.Scaffold = Scaffold;
