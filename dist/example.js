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
var el = material_1.MaterialApp({
    title: "Flutjs Demo 😎",
    theme: new themeData_1.ThemeData({}),
    home: material_1.Scaffold({
        appBar: material_1.AppBar({
            title: material_1.Text("---Titulo da aplicação---"),
        }),
        body: exapnded_1.Expanded({
            child: material_1.Container({
                width: 200,
                child: material_1.Column({
                    children: [
                        material_1.Text("LUK3D", { textStyle: new text_style_1.TextStyle({ color: colors_1.Colors.Red[200].value }) }),
                        material_1.Text("Vamos la ver se iras funcionar 😍", {}),
                        material_1.Container({
                            child: material_1.Column({
                                children: [material_1.Text("Aparentemente tudo vai funcionar")],
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
