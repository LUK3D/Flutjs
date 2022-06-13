/**Basic Flutjs App With Tailwind */
import {Spacer, Expanded,Row,RelativeUnits,BoxDecation, Padding, Column, Container, Text, Colors, EdgeInsets, MainAxisAlignment, CrossAxisAlignment, TextStyle, Radius } from "./index.js";
import { BorderRadius } from "./painting/BorderRadiusGeometry.js";
import { BoxDecoration } from "./painting/BoxDecoration.js";
import { Positioned } from "./widgets/positioned.js";
import { Stack } from "./widgets/stack.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";

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
        Expanded({
          child:  Column({
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text("Hello World"), 
              Text("🤩", {textStyle: TextStyle({ fontSize: 20 })}),
              Spacer(),
              Container({
                width:50,
                height:200,
                padding:EdgeInsets.all(20),
                decoration:BoxDecoration({
                  color:Colors.Amber[500],
                  borderRadius:BorderRadius.all(
                    Radius.circular(10)
                    )
                }),
                child:Stack({
                  
                  children:[
                    Text("Baboseiras hahshashas 😅😅😅"),
                    Positioned({
                      bottom:10,
                      right:10,
                      child:Text("Teste de baixo")
                    })
                  ]
                })
              }),
              Container(
                {
                  width_size_measurement_unit:RelativeUnits["%"],
                
                  child:Row(
                    {
                      mainAxisAlignment:MainAxisAlignment.start,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children:[
                        Container({child:Text("Outro Exemplo no final")}),
                        Spacer({child:Text("Estamos no meio")}),
                        Container({child:Text("Terminamos aqui")}),
                      ]
                    }
                  ),
                }
              ) 

            ],
        }),
        })
    }),
  }),
});
