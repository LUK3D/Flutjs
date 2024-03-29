![Flutjs Logo](./Logo.svg)

# Welcome to Flutjs project 😀

Flutjs is a javascript framework for creating beautiful, fast and lightweight websites.
As the name suggests, Flutejs is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.

## Getting Stated:

To get start with Flutjs just follow the steps below:

### With boilerplate

Just go to [Flutjs Template Ts](https://github.com/LUK3D/flutjs-template-ts) repository and click on "Use This repository" and you are good to go.


### With Nodejs:

1 - Install the latest version of Nodejs.

2 - Start new nodejs project

  `npm init`

3 - Install Flutjs with npm or yarn:

>npm

`npm i @luk3d/flutjs`
>yarn

`yarn add @luk3d/flutjs`

Congrats!! 🎉 You have Installed Flujs successfully on your project. Now jump to hello world section the create a simple Flutjs website/webApp.


<img src="./docs/screenshots/flutjsCounterApp.png" width="500px">




### With Vanilla JS:


Add this link to the header tag of your html page:
```html
<script type="moduel" src="https://cdn.jsdelivr.net/npm/@luk3d/flutjs@0.2.0/dist/flutjs.min.js"></script>
```
>NOTE: you need to check the latest vesio here:
[Flutjs Latest](https://www.jsdelivr.com/package/npm/@luk3d/flutjs?path=dist)


## Simple Counter App: ⚡

```js
/**Basic Flutjs App With Tailwind */


WindiApp({
  title: "Flutjs test",

  home: Scaffold({
    appBar: AppBar({
      backgroundColor: Colors.Blue[500],
      foregroundColor: Colors.Gray[100],
      title: Text("Welcome to Flutjs"),
      elevation: 2,
    }),
    body: Stack({
      children: [
        Container({
          color: Colors.Gray[50],
          width: 100,
          height: 100,
          child: Expanded({
            child: Column({
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                //Binding The widget to the State
                counterState.Bind(
                  Container({
                    key: "counter",
                    child: Text("{counter}", {
                      textStyle: TextStyle({
                        fontWeight: FontWeight.w700,
                        fontSize: 40,
                        color: Colors.Gray[500],
                      }),
                    }),
                  })
                ),
              ],
            }),
          }),
        }),
        Container({
          key: "addButton",
          child: Positioned({
            bottom: 20,
            right: 20,
            child: Container({
              padding: EdgeInsets.symmetric({ horizontal: 13, vertical: 20 }),
              decoration: BoxDecoration({
                color: Colors.Sky[500],
                borderRadius: BorderRadius.all(Radius.circular(100)),
              }),
              child: Text("+", {
                textStyle: TextStyle({
                  fontWeight: FontWeight.w600,
                  fontSize: 20,
                  color: Colors.White,
                }),
              }),
            }),
          }),
        }),
      ],
    }),
  }),
 );

```

> NOTE: Just like in Flutter, every component is a widget...



## UPDATES TABLE 🚀

Date | Updates|
-|-|
 19-02-2022| `Text Widget` now supports `textStyle` property. Once compiled all values added on the textStyle attr will be translated to css attr of the text element |
 16-02-2022| The `App Widget` now fills the width and height of the screen by using 100% of `vw` and `vh` `css` units |
 16-02-2022| The `Extended Widget` now replaces himself with his child once compiled |
 16-02-2022| `Width` and `Height`  Where added on the widget constructor. |
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
