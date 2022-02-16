![Flutjs Logo](./Logo.svg)

# Welcome to Flutjs project 😀

Flutjs is a javascript framework for creating beautiful, fast and lightweight websites.
As the name suggests, Flutejs is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.

## Flutjs Example: ⚡

```js
import { Column,  Container,  MaterialApp,  Scaffold,  Text,  AppBar, } from "./material";
import { ThemeData } from "./painting/themeData";

// This widget is the root of your application.
MaterialApp({
  title: "Flutjs Demo 😎",
  theme: new ThemeData({}),
  home: Scaffold({
    appBar: AppBar({
      title: Text("---Titulo da aplicação---"),
    }),
    body: Expanded({
      child: Container({
        width: 200,
        child: Column({
          children: [
            Text("LUK3D", {}),
            Text("Vamos la ver se iras funcionar 😍", {}),
            Container({
              child: Column({
                children: [Text("Aparentemente tudo vai funcionar")],
              }),
            }),
            //Here we can put any widget we want 😁
          ],
        }),
      }),
    }),
  }),
});
```

> NOTE: Just like in Flutter, every thing here is a widget...

### The above Flutjs code produces the following html output: ⚡

```html
<div style="width: 100vw; height: 100vh;">
    <div style="width: 100%; height: 100%;">
        <div style="width: 100%; height: 50%;">
            <p>---Titulo da aplicação---</p>
        </div>
        <div style="width: 100%; height: 100%;">
            <div>
                <p>LUK3D</p>
                <p>Vamos la ver se iras funcionar 😍</p>
                <div>
                    <div>
                        <p>Aparentemente tudo vai funcionar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```


## UPDATES TABLE 🚀

Date | Updates|
-|-|
 16-02-2022| The `App Widget` now fills the width and height of the screen by using 100% of `vw` and `vh` `css` units |
 16-02-2022| The `Extended Widget` now replaces himself with his child once compiled |
 16-02-2022| The `Width` and `Height`  Where added on the widget constructor. |
 16-02-2022| Html output improvement |

  

## Under Development:🚧

- A Set of widgets like Material Design components.
- Route management
- State management
- Decorations (TextStyle, BoxDecoration etx...)
- Icons Library..
- Routing
- Custom cli tool for fast project creation.
- VsCode Extension for auto completion and snippets for fast coding...

<!--

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(`<body><body>`).window.document;


-->
