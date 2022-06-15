/**Basic Flutjs App With Tailwind */
import {
  Spacer,
  Expanded,
  Row,
  RelativeUnits,
  BoxDecoration,
  Padding,
  Column,
  Container,
  Text,
  Colors,
  EdgeInsets,
  MainAxisAlignment,
  CrossAxisAlignment,
  TextStyle,
  Radius,
  AbsoluteUnits,
} from "./index.js";
import { BorderRadius } from "./painting/BorderRadiusGeometry.js";
import { State, StateManager } from "./state/stateManager.js";
import { FontWeight } from "./ui/text.js";
import { Image } from "./widgets/image.js";
import { Positioned } from "./widgets/positioned.js";
import { Stack } from "./widgets/stack.js";
import { Scaffold, WindiApp, AppBar } from "./windiapp/index.js";

// Stateful Variable 
var counterState = new StateManager();
//Defining an Observable State
counterState.obs(new State({ key: "counter", val: 0 }));

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
  mounted: () => {
    var i = 0;
    counterState.setState(`0`);
    document
      .querySelector('[key="addButton"]')
      ?.addEventListener("click", () => {
        //Updating the value of state
        counterState.setState(`${i++}`);
      });
  },
});
