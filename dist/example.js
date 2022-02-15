"use strict";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(`<body><body>`).window.document; 
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("./material");
const app_bar_1 = require("./material/app_bar");
var el = material_1.MaterialApp({
    title: "Flutjs Demo 😎",
    // theme: new ThemeData(
    //     {
    //     }
    // ),
    home: material_1.Scaffold({
        appBar: app_bar_1.AppBar({
            title: material_1.Text("---Titulo da aplicação---")
        }),
        body: material_1.Container({
            child: material_1.Column({
                children: [
                    material_1.Text("LUK3D", {}),
                    material_1.Text("Vamos la ver se iras funcionar 😍", {}),
                    material_1.Container({ child: material_1.Column({
                            children: [
                                material_1.Text("Aparentemente tudo vai funcionar")
                            ]
                        }) })
                    //Here wi can put any widget we want 😁
                ]
            }),
        }),
    }),
});
console.log(el);
