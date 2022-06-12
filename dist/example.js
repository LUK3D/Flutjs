/**Basic Flutjs App With Tailwind */
import { Spacer, Expanded, Row, RelativeUnits, BoxDecation, Column, Container, Text, Colors, MainAxisAlignment, CrossAxisAlignment, TextStyle } from "./index.js";
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
        body: Container({
            color: Colors.Gray[50],
            width: 100,
            height: 100,
            child: Expanded({
                child: Column({
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                        Text("Hello World"),
                        Text("🤩", { textStyle: TextStyle({ fontSize: 20 }) }),
                        Spacer(),
                        Container({
                            width: 100,
                            height: 200,
                            color: Colors.Green[400],
                            decoratio: BoxDecation({
                                color: Colors.Amber[500]
                            })
                        }),
                        Container({
                            width: 100,
                            width_size_measurement_unit: RelativeUnits["%"],
                            child: Row({
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                    Container({ child: Text("Outro Exemplo no final") }),
                                    Spacer({ child: Text("Estamos no meio") }),
                                    Container({ child: Text("Terminamos aqui") }),
                                ]
                            }),
                        })
                    ],
                }),
            })
        }),
    }),
});
//# sourceMappingURL=example.js.map