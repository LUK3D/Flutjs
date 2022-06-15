/**Basic Flutjs App With Tailwind */
import { academicCap } from "./heroIcons/index.js";
import { Expanded, BoxDecoration, Column, Container, Text, Colors, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, TextStyle, } from "./index.js";
import { BoxShadow } from "./painting/boxShadow.js";
import { State, StateManager } from "./state/stateManager.js";
import { Offset } from "./utils/offset.js";
import { Button } from "./widgets/Button.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";
var counter = new StateManager(new State({ key: "counter", val: 1 }));
WindiApp({
    title: "Flutjs test",
    home: Scaffold({
        appBar: AppBar({
            backgroundColor: Colors.Blue[500],
            foregroundColor: Colors.Gray[100],
            title: Text("Welcome to Flutjs"),
            elevation: 2,
        }),
        body: Container({
            color: Colors.Gray[50],
            width: 100,
            height: 100,
            child: counter.Bind(Expanded({
                child: Column({
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                        Text("Hello World {counter} times!"),
                        // @ts-ignore
                        ("{counter}" == '5') ?
                            Text("🤩 {counter}", { textStyle: TextStyle({ fontSize: 20 }) }) :
                            Text("😩 {counter}", { textStyle: TextStyle({ fontSize: 20 }) }),
                        Button({
                            icon: academicCap({}),
                            padding: EdgeInsets.only({ top: 10, bottom: 10, right: 15, left: 15 }),
                            label: Text("Clica-Me"), onPressed: function () {
                                var _a;
                                counter.setState(((_a = counter.state) === null || _a === void 0 ? void 0 : _a.val) + 1);
                            },
                            boxDecoration: BoxDecoration({
                                boxShadow: [
                                    new BoxShadow({
                                        color: Colors.Gray[300],
                                        blurRadius: 10,
                                        spreadRadius: 10,
                                        offset: Offset(0, 10)
                                    }),
                                    new BoxShadow({
                                        color: Colors.Gray[100],
                                        blurRadius: 10,
                                        spreadRadius: 10,
                                        offset: Offset(0, 15)
                                    }),
                                ]
                            })
                        }),
                    ],
                }),
            }))
        }),
    }),
});
//# sourceMappingURL=example.js.map