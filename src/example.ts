




import { Column, Container, MaterialApp, Scaffold, Text, AppBar } from './material'
import { ThemeData } from './painting/themeData';

var el = MaterialApp(
    {
        title: "Flutjs Demo 😎",
        // theme: new ThemeData(
        //     {

        //     }
        // ),
        home: Scaffold({
            appBar: AppBar({
                title: Text("---Titulo da aplicação---")
            }),
            body: Container({
                child: Column({
                    children: [
                        Text("LUK3D", {}),
                        Text("Vamos la ver se iras funcionar 😍", {}),
                        Container({
                            child: Column({
                                children: [
                                    Text("Aparentemente tudo vai funcionar")
                                ]
                            }),
                        })
                        //Here we can put any widget we want 😁
                    ]
                },
                ),
            },
            ),
        },
        ),
    }
);

console.log(el);