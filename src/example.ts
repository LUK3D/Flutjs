




import { Column, Container, MaterialApp, Scaffold,Text } from './material'
import Key from './utils/uuid';

var el = MaterialApp(
    {
        title: "Flutjs Demo 😎",
        // theme: new ThemeData(
        //     {
                
        //     }
        // ),
        home: Scaffold({
            body: Container({
                child: Column({
                    children: [
                        Text("LUK3D",{}),
                        Text("Vamos la ver se iras funcionar 😍",{}),
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

console.log(el);