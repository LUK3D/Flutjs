![Flutjs Logo](./Logo.svg)

# Welcome to Flutjs project 😀


Flutjs is a javascript framework for creating beautiful, fast and lightweight websites.
As the name suggests, Flutejs is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.


## Flutjs Example:

```js

import { Column, Container, MaterialApp, Scaffold } from './material'
import { ThemeData } from './painting/themeData'

// This widget is the root of your application.

MaterialApp(
    {
        title: "Flutjs Demo 😎",
         theme: new ThemeData(
             {
          
             }
         ),
        home: Scaffold({
            body: Container({
                child: Column({
                    children: [
                        Text("LUK3D",{}),
                        Text("Vamos la ver se iras funcionar 😍",{}),
                        Container({child:Column({
                                children:[
                                    Text("Aparentemente tudo vai funcionar")
                                ]
                            }),
                        }),
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


```

> NOTE: Just like in Flutter, every thing here is a widget...


## HTML OUTPUT 

```html
<div id="0ddecf13-c692-419a-bc61-609c2a2acfe9" style="width: auto; height: auto;">
    <div id="d7032671-baf0-44fa-bad9-4458152c0c45" style="width: auto; height: auto;">
        <div id="735b31c3-6b07-478b-aba7-12a793371f01" style="width: auto; 
    height: auto;">
            <div id="0331a7d5-250c-4dee-9118-e1c91882e5c2" style="width: auto; height: auto;">
                <p id="60a33660-755f-497a-ba9b-88b40aaf6f38" style="width: auto; height: auto;">LUK3D</p>
                <p id="82959955-ebbd-4d5e-ae66-25d6e1500c49" style="width: auto; height: auto;">Vamos la ver se iras
                    funcionar 😍</p>
                <div id="a175a505-8d43-492c-976d-a348ad46e835" style="width: auto; height: auto;">
                    <div id="336cc18d-f45c-4ffc-bfda-4aa841c5469f" style="width: auto; height: auto;">
                        <p id="18119861-ddf3-4176-a3ba-32952d2b05f0" style="width: auto; height: auto;">Aparentemente
                            tudo vai funcionar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```



## Under Development: 

* A Set of widgets like Material Design components.
* Route management
* State management
* Decorations (TextStyle, BoxDecoration etx...)
* Icons Library..
* Routing
* Custom cli tool for fast project creation.
* VsCode Extension for auto completion and snippets for fast coding...




<!-- 

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(`<body><body>`).window.document; 


-->
