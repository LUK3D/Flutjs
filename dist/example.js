// import { Column, Container, MaterialApp, Scaffold, Text, AppBar } from "./material/index.js";
// import { Colors } from "./painting/colors.js";
// import { TextStyle } from "./painting/text_style.js";
// import { ThemeData } from "./painting/themeData.js";
// import { FontWeight } from "./ui/text.js";
// import { Expanded } from "./widgets/exapnded.js";
// var el = MaterialApp({
//   title: "Flutjs Demo 😎",
//   theme: new ThemeData({}),
//   home: Scaffold({
//     appBar: AppBar({
//       title: Text("---Titulo da aplicação---"),
//     }),
//     body: Expanded({
//       child: Container({
//         width: 200,
//         child: Column({
//           children: [
//             Text("LUK3D", {
//               textStyle: TextStyle(
//                 {
//                   color: Colors.Red[100].value,
//                   fontWeight: FontWeight.w800,
//                   fontSize: 200,
//                 }) }),
//             Text("Vamos la ver se iras funcionar 😍"),
//             Container({
//               child: Column({
//                 children: [Text("Aparentemente tudo vai funcionar")],
//               }),
//             }),
//             //Here we can put any widget we want 😁
//           ],
//         }),
//       }),
//     }),
//   }),
// });
import { Expanded, Padding } from "./widgets/index.js";
import { Column, Container, Text } from "./material/index.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";
import { Colors } from "./painting/colors.js";
import { BoxDecation, EdgeInsets } from "./painting/index.js";
var el = WindiApp({
    title: "Flutjs test",
    home: Scaffold({
        appBar: AppBar({
            backgroundColor: Colors.Blue[500],
            foregroundColor: Colors.Gray[100],
            title: Text("Welcome to Flutjs"),
            elevation: 2,
        }),
        body: Expanded({
            child: Container({
                child: Column({
                    children: [
                        Container({
                            decoratio: BoxDecation({ color: Colors.Gray[100] }),
                            child: Padding({
                                padding: EdgeInsets.all(100),
                                child: Column({
                                    children: [
                                        Padding({
                                            child: Text("Hello World"),
                                            padding: EdgeInsets.only({ top: 10 })
                                        })
                                    ],
                                })
                            }),
                        }),
                    ],
                }),
            })
        }),
    }),
});
//# sourceMappingURL=example.js.map