"use strict";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(`<body><body>`).window.document;
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("./material");
const colors_1 = require("./painting/colors");
const text_style_1 = require("./painting/text_style");
const themeData_1 = require("./painting/themeData");
const exapnded_1 = require("./widgets/exapnded");
var el = (0, material_1.MaterialApp)({
    title: "Flutjs Demo 😎",
    theme: new themeData_1.ThemeData({}),
    home: (0, material_1.Scaffold)({
        appBar: (0, material_1.AppBar)({
            title: (0, material_1.Text)("---Titulo da aplicação---"),
        }),
        body: (0, exapnded_1.Expanded)({
            child: (0, material_1.Container)({
                width: 200,
                child: (0, material_1.Column)({
                    children: [
                        (0, material_1.Text)("LUK3D", { textStyle: (0, text_style_1.TextStyle)({ color: colors_1.Colors.Red[200].value }) }),
                        (0, material_1.Text)("Vamos la ver se iras funcionar 😍"),
                        (0, material_1.Container)({
                            child: (0, material_1.Column)({
                                children: [(0, material_1.Text)("Aparentemente tudo vai funcionar")],
                            }),
                        }),
                        //Here we can put any widget we want 😁
                    ],
                }),
            }),
        }),
    }),
});
console.log(el);
