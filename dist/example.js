"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("./material");
var el = material_1.MaterialApp({
    title: "Flutjs Demo 😎",
    // theme: new ThemeData(
    //     {
    //     }
    // ),
    home: material_1.Container({
        child: material_1.Column({
            children: [
                material_1.Text("LUK3D", {}),
                material_1.Text("Vamos la ver se iras funcionar 😍", {}),
                //Here wi can put any widget we want 😁
            ]
        }),
    }),
});
console.log(el);
