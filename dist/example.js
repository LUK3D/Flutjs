// import { Column, Container, MaterialApp, Scaffold, Text, AppBar } from "./material/index.js";
// import { Colors } from "./painting/colors.js";
// import { TextStyle } from "./painting/text_style.js";
// import { ThemeData } from "./painting/themeData.js";
// import { FontWeight } from "./ui/text.js";
// import { Expanded } from "./widgets/exapnded.js";
import { Expanded } from "./widgets/exapnded.js";
import { Column, Container, Text } from "./material/index.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";
var el = WindiApp({
    title: "Flutjs test",
    home: Scaffold({
        appBar: new AppBar({
            title: Text("Teste basico de titulo"),
        }),
        body: Expanded({
            child: Container({
                width: 200,
                child: Column({
                    children: [
                        Text("Vamos la ver se iras "),
                        Container({
                            child: Column({
                                children: [Text("Aparentemente tudo vai funcionar")],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    }),
});
console.log(el);
