![Flutjs Logo](./Logo.svg)

# Welcome to Flutjs project 😀


Flutjs is a javascript framework for creating beautiful, fast and lightweight websites.
As the name suggests, Flutejs is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.


## Example code:

```js


import { Column, Container, MaterialApp, Scaffold } from './material'
import { ThemeData } from './painting/themeData'

// This widget is the root of your application.
MaterialApp(
    {
        title: "Flutjs Demo 😎",
        theme: new ThemeData(
        ),
        home: Scaffold({
            body: Container({
                child: Column({
                    children: [
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

> NOTE: This example is a native way of creating a widget, just like in Flutter, every thing here is a widget...


## Under Development: 

* A Set of widgets like Material Design components.
* Route management
* State management
* Decorations (TextStyle, BoxDecoration etx...)
* Icons Library..
* Routing
* Custom cli tool for fast project creation.
* VsCode Extension for auto completion and snippets for fast coding...





