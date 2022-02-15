![Flutjs Logo](./Logo.svg)

# Welcome to Flutjs project 😀


Flutjs is a javascript framework for creating beautiful, fast and lightweight websites.
As the name suggests, Flutejs is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.


## Flutjs Example:

```js
import { Column, Container, MaterialApp, Scaffold,Text,AppBar } from './material'
import { ThemeData } from './painting/themeData';

// This widget is the root of your application.
MaterialApp(
    {
        title: "Flutjs Demo 😎",
        theme: new ThemeData(
            {

            }
        ),
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

```

> NOTE: Just like in Flutter, every thing here is a widget...


## HTML OUTPUT 

```html
<div id="af705cf3-6953-4882-95b0-d824b1f241a9">
    <div id="68ba2d64-1503-4ddb-98ca-09932f7f396a">
        <div id="79667a3c-5e67-4aed-a38c-af05e3298d7f">
            <p id="9e2f1d51-d5c5-49d0-b792-c68a47246097">---Titulo da aplicação---</p>
        </div>
        <div id="017cb2ab-85ec-420a-b1d0-8a1dff8c68da">
            <div id="8d62ee88-295e-4053-a9e0-a9e0-abe237f4ded5">
                <p id="fdd451a4-572c-4be5-a1cd-b920c498a9b1">LUK3D</p>
                <p id="859dca0b-63b4-46e8-9fe9-e2db98bad976">Vamos la ver se iras funcionar 😍</p>
                <div id="6560151e-b00c-40a4-8fb2-d5f5ac3ba943">
                    <div id="d1a5047c-feee-42a6-9d74-e77d5d3d9605">
                        <p id="5c6a7563-f0fe-445f-b981-291cedd40d67">Apenentarentemente tudo vai funcionar</p>
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
