import { TextTheme } from "../material/text_theme";
import { Colors, Color } from "./colors";
import { Typography } from "./typography";

class ThemeData {
  primaryColor?: Color;
  primaryColorVariant?: Color;
  colorOnPrimary?: Color;
  colorSecondary?: Color;
  colorSecondaryVariant?: Color;
  colorOnSecondary?: Color;
  colorSurface?: Color;
  colorOnSurface?: Color;
  chrome?: Color;
  colorOnBackground?: Color;
  colorError?: Color;
  colorOnError?: Color;

  focusColor?: Color;
  hoverColor?: Color;
  shadowColor?: Color;
  canvasColor?: Color;
  scaffoldBackgroundColor?: Color;
  bottomAppBarColor?: Color;
  cardColor?: Color;
  dividerColor?: Color;
  highlightColor?: Color;
  splashColor?: Color;
  selectedRowColor?: Color;
  unselectedWidgetColor?: Color;
  disabledColor?: Color;
  secondaryHeaderColor?: Color;
  backgroundColor?: Color;
  dialogBackgroundColor?: Color;
  indicatorColor?: Color;
  hintColor?: Color;
  errorColor?: Color;
  toggleableActiveColor?: Color;

  // TYPOGRAPHY & ICONOGRAPHY
  fontFamily?: String;
  typography?:  Typography;
  textTheme?: TextTheme;
  primaryTextTheme?: TextTheme;
  iconTheme?: IconThemeData;
  primaryIconTheme?: IconThemeData;

  constructor(args: {
    primaryColor?: Color;
    primaryColorVariant?: Color;
    colorOnPrimary: Color;
    colorSecondary?: Color;
    colorSecondaryVariant?: Color;
    colorOnSecondary?: Color;
    colorSurface?: Color;
    colorOnSurface?: Color;
    chrome?: Color;
    colorOnBackground?: Color;
    colorError?: Color;
    colorOnError?: Color;
  }) {
    this.primaryColor = args.primaryColor || Colors.Blue[200];
    this.primaryColorVariant = args.primaryColorVariant || Colors.Blue[700];
    this.colorOnPrimary = args.colorOnPrimary || Colors.Gray[50];
    this.colorSecondary = args.colorSecondary || Colors.Green[400];
    this.colorSecondaryVariant =
      args.colorSecondaryVariant || Colors.Green[700];
    this.colorOnSecondary = args.colorOnSecondary || Colors.Gray[50];
    this.colorSurface = args.colorSurface || Colors.Gray[50];
    this.colorOnSurface = args.colorOnSurface || Colors.Gray[800];
    this.chrome = args.chrome || Colors.Yellow[600];
    this.colorOnBackground = args.colorOnBackground || Colors.Gray[800];
    this.colorError = args.colorError || Colors.Red[400];
    this.colorOnError = args.colorOnError || Colors.Gray[50];
  }
}

export { ThemeData };
