import { Column, Container, MaterialApp, Scaffold } from './material'
import { ThemeData } from './painting/themeData'

MaterialApp(
    {
        title: "Flutjs Demo 😎",
        theme: new ThemeData(
        ),
        home: Scaffold({
            body: Container({
                child: Column({
                    children: [
                        //Here wi can put any widget we want 😁
                    ]
                },
                ),
            },
            ),
        },
        ),
    }
);
