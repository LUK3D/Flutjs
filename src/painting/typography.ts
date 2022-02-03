import { TextTheme } from "../material/text_theme";
import { Colors } from "./colors";
import { TextStyle } from "./text_style";
import { TextDecoration } from "./text";

class Typography {
  constructor() {
  }

  /// This [TextTheme] provides color but not geometry (font size, weight, etc).
  blackMountainView: TextTheme = new TextTheme({


    displayLarge: new TextStyle({
      debugLabel: "blackMountainView displayLarge",
      fontFamily: "Roboto",
      color: Colors.Gray[50].value,
      decoration: new TextDecoration({}).none,
    }),
    displayMedium: new TextStyle({
      debugLabel: "blackMountainView displayMedium",
      fontFamily: "Roboto",
      color: Colors.Gray[50].value,
      decoration: new TextDecoration({}).none,
    }),
    displaySmall: new TextStyle({
      debugLabel: "blackMountainView displaySmall",
      fontFamily: "Roboto",
      color: Colors.Gray[50].value,
      decoration: new TextDecoration({}).none,
    }),
    headlineLarge: new TextStyle({
      debugLabel: "blackMountainView headlineLarge",
      fontFamily: "Roboto",
      color: Colors.Gray[50].value,
      decoration: new TextDecoration({}).none,
    }),
    headlineMedium: new TextStyle({
      debugLabel: "blackMountainView headlineMedium",
      fontFamily: "Roboto",
      color: Colors.Gray[50].value,
      decoration: new TextDecoration({}).none,
    }),
    headlineSmall: new TextStyle({
      debugLabel: "blackMountainView headlineSmall",
      fontFamily: "Roboto",
      color: Colors.Gray[100].value,
      decoration: new TextDecoration({}).none,
    }),
    titleLarge: new TextStyle({
      debugLabel: "blackMountainView titleLarge",
      fontFamily: "Roboto",
      color: Colors.Gray[100].value,
      decoration: new TextDecoration({}).none,
    }),
    titleMedium: new TextStyle({
      debugLabel: "blackMountainView titleMedium",
      fontFamily: "Roboto",
      color: Colors.Gray[100].value,
      decoration: new TextDecoration({}).none,
    }),
    titleSmall: new TextStyle({
      debugLabel: "blackMountainView titleSmall",
      fontFamily: "Roboto",
      color: Colors.Gray[800].value,
      decoration: new TextDecoration({}).none,
    }),
    bodyLarge: new TextStyle({
      debugLabel: "blackMountainView bodyLarge",
      fontFamily: "Roboto",
      color: Colors.Gray[100].value,
      decoration: new TextDecoration({}).none,
    }),
    bodyMedium: new TextStyle({
      debugLabel: "blackMountainView bodyMedium",
      fontFamily: "Roboto",
      color: Colors.Gray[100].value,
      decoration: new TextDecoration({}).none,
    }),
    bodySmall: new TextStyle({
      debugLabel: "blackMountainView bodySmall",
      fontFamily: "Roboto",
      color: Colors.Gray[50].value,
      decoration: new TextDecoration({}).none,
    }),
    labelLarge: new TextStyle({
      debugLabel: "blackMountainView labelLarge",
      fontFamily: "Roboto",
      color: Colors.Gray[100].value,
      decoration: new TextDecoration({}).none,
    }),
    labelMedium: new TextStyle({
      debugLabel: "blackMountainView labelMedium",
      fontFamily: "Roboto",
      color: Colors.Gray[800].value,
      decoration: new TextDecoration({}).none,
    }),
    labelSmall: new TextStyle({
      debugLabel: "blackMountainView labelSmall",
      fontFamily: "Roboto",
      color: Colors.Gray[800].value,
      decoration: new TextDecoration({}).none,
    }),
  });



}


export{
  Typography
}
