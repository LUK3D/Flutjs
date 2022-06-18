/**Basic Flutjs App With Tailwind */
import { Expanded, Padding, Row, Column, AbsoluteUnits, Container, Text, Colors, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, TextStyle } from "./index.js";
import { FontWeight } from "./ui/text.js";
import { Scaffold, FlutApp, AppBar } from "./flut/index.js";
FlutApp({
    title: "Flutjs test",
    home: Scaffold({
        appBar: AppBar({
            backgroundColor: Colors.Blue[500],
            foregroundColor: Colors.Gray[100],
            title: Text("Welcome to Flutjs"),
            elevation: 2,
        }),
        body: Padding({
            padding: EdgeInsets.symmetric({ vertical: 10, horizontal: 10 }),
            child: Expanded({
                child: Container({
                    color: Colors.Gray[100],
                    child: Column({
                        children: [
                            Row({
                                children: [
                                    Column({
                                        children: [
                                            Text("Welcome Back", { textStyle: TextStyle({
                                                    color: Colors.Gray[100],
                                                    fontWeight: FontWeight.bold
                                                }) }),
                                            Text("Filipe Lukebana"),
                                        ]
                                    }),
                                    Container({
                                        color: Colors.White,
                                        height: 40,
                                        width: 70,
                                        widthSizeMeasurementUnit: AbsoluteUnits.pixels,
                                        heightSizeMeasurementUnit: AbsoluteUnits.pixels,
                                        child: Row({
                                            mainAxisAlignment: MainAxisAlignment.center,
                                            crossAxisAlignment: CrossAxisAlignment.center,
                                            children: [
                                                Text("25 Feb")
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                }),
            })
        }),
    }),
});
//# sourceMappingURL=example.js.map
//# sourceMappingURL=example2.js.map