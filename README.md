![Flutjs Logo](./Logo.svg)

# Welcome to Flutjs project 😀


Flutjs is a javascript framework for creating beautiful, fast and lightweight websites.
As the name suggests, Flutes is based on Flutter for its simplicity and easy learning curve and the ability to easily extend.


## Example code:

```js
new ExtendedWidget({
  tagName: "div",
  children: [
    new Widget({ tagName: "div" , text:"Teste basico!!"}),
    new Widget({ tagName: "p" }),
    new ExtendedWidget({
      tagName: "div",
      children: [
        new Widget({
          tagName: "textarea",
          text:"LUK3D",
        }),
        new Widget({
          tagName: "div",
          child: new ExtendedWidget({
            tagName: "nav",
            children: [
              new Widget({ tagName: "a", text:"Vamos la ver se funciona" }),
              new Widget({ tagName: "a" }),
              new Widget({ tagName: "a" }),
              new Widget({ tagName: "a" }),
            ],
          }),
        }),
      ],
    }),
  ],
});


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





