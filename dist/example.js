"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("./material");
(0, material_1.MaterialApp)({
    title: "Flutjs Demo 😎",
    // theme: new ThemeData(
    //     {
    //     }
    // ),
    home: (0, material_1.Scaffold)({
        body: (0, material_1.Container)({
            child: (0, material_1.Column)({
                children: [
                //Here wi can put any widget we want 😁
                ]
            }),
        }),
    }),
});