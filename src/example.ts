/**Basic Flutjs App With Tailwind */
import {Spacer, Expanded,Row,RelativeUnits,BoxDecoration, Padding, Column, Container, Text, Colors, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, TextStyle, Radius, AbsoluteUnits } from "./index.js";
import { BorderRadius } from "./painting/BorderRadiusGeometry.js";
import { BoxShadow } from "./painting/boxShadow.js";
import { State, StateManager } from "./state/stateManager.js";
import { Offset } from "./utils/offset.js";
import { Button } from "./widgets/Button.js";
import { Image } from "./widgets/image.js";
import { Positioned } from "./widgets/positioned.js";
import { Stack } from "./widgets/stack.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";

var counter = new StateManager(new State({key:"counter", val:1}));

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
        width:100,
        height:100,
        child:
        counter.Bind( Expanded({
          child:  Column({
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
            
              Text("Hello World {counter} times!"), 
              
                // @ts-ignore
                ("{counter}" == '5')?
                   Text("🤩 {counter}", {textStyle: TextStyle({ fontSize: 20 })}):
                   Text("😩 {counter}", {textStyle: TextStyle({ fontSize: 20 })})
              
              ,

              Button({
                label: Text("Clica-Me"), onPressed: () => {
                  counter.setState((counter.state?.val as number)+1)
                 },
                 boxDecoration:BoxDecoration({
                  boxShadow:[
                    new BoxShadow({
                      color:Colors.Gray[300],
                      blurRadius:10,
                      spreadRadius:10,
                      offset:Offset(0,10)
                      
                    }),
                    new BoxShadow({
                      color:Colors.Gray[100],
                      blurRadius:10,
                      spreadRadius:10,
                      offset:Offset(0,15)
                      
                    }),
                  ]
                 })
              }),

            ],
        }),
        }))
    }),
  }),
});


