"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("./widgets/framework");
// new Widget({tagName:"div"});
module.exports = {
    Widget: framework_1.Widget,
    ExtendedWidget: framework_1.ExtendedWidget,
};
window.Flutjs = {
    Widget: framework_1.Widget,
    ExtendedWidget: framework_1.ExtendedWidget,
};
//** THIS IS AN EXAMPLE CODE */
new framework_1.ExtendedWidget({
    tagName: "div",
    children: [
        new framework_1.Widget({ tagName: "div", text: "Teste basico!!" }),
        new framework_1.Widget({ tagName: "p" }),
        new framework_1.ExtendedWidget({
            tagName: "div",
            children: [
                new framework_1.Widget({
                    tagName: "textarea",
                    text: "LUK3D",
                }),
                new framework_1.Widget({
                    tagName: "div",
                    child: new framework_1.ExtendedWidget({
                        tagName: "nav",
                        children: [
                            new framework_1.Widget({ tagName: "a", text: "Vamos la ver se funciona" }),
                            new framework_1.Widget({ tagName: "a" }),
                            new framework_1.Widget({ tagName: "a" }),
                            new framework_1.Widget({ tagName: "a" }),
                        ],
                    }),
                }),
            ],
        }),
    ],
});
