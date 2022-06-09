/**Basic Flutjs App With Tailwind */
import { Expanded, Padding, Column, Container, Text, Colors, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, TextStyle } from "./index.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";
WindiApp({
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
                color: Colors.Gray[50],
                child: Padding({
                    padding: EdgeInsets.all(10),
                    child: Column({
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                            Text("Hello World"), Text("🤩", {
                                textStyle: TextStyle({ fontSize: 20 })
                            })
                        ],
                    }),
                }),
            }),
        }),
    }),
});
//# sourceMappingURL=example.js.map