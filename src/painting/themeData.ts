import { Colors, Color } from "./colors";

class ThemeData {
  colorPrimary?: Color;
  colorPrimaryVariant?: Color;
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

  constructor(args:{
    colorPrimary?:Color,
    colorPrimaryVariant?:Color,
    colorOnPrimary:Color,
    colorSecondary?:Color,
    colorSecondaryVariant?:Color,
    colorOnSecondary?:Color,
    colorSurface?:Color,
    colorOnSurface?:Color,
    chrome?:Color,
    colorOnBackground?:Color,
    colorError?:Color,
    colorOnError?:Color,
  }) {
    this.colorPrimary = args.colorPrimary || Colors.Blue[200];
    this.colorPrimaryVariant = args.colorPrimaryVariant ||Colors.Blue[700];
    this.colorOnPrimary = args.colorOnPrimary || Colors.Gray[50];
    this.colorSecondary = args.colorSecondary || Colors.Green[400];
    this.colorSecondaryVariant = args.colorSecondaryVariant||Colors.Green[700];
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
