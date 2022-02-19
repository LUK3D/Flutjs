import { Column, Container, MaterialApp, Scaffold, Text, AppBar } from "./material";
import { Colors } from "./painting/colors";
import { TextStyle } from "./painting/text_style";
import { ThemeData } from "./painting/themeData";
import { FontWeight } from "./ui/text";
import { Expanded } from "./widgets/exapnded";

var el = MaterialApp({
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
            Text("LUK3D", { 
              textStyle: TextStyle(
                { 
                  color: Colors.Red[100].value, 
                  fontWeight: FontWeight.w800, 
                  fontSize: 200, 
                }) }),
            Text("Vamos la ver se iras funcionar 😍"),
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

console.log(el);
