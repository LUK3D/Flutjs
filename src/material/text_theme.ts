import { TextStyle } from "../painting/text_style";

class TextTheme {


      displayLarge?:TextStyle;
      displayMedium?:TextStyle;
      displaySmall?:TextStyle;
      headlineLarge?:TextStyle;
      headlineMedium?:TextStyle;
      headlineSmall?:TextStyle;
      titleLarge?:TextStyle;
      titleMedium?:TextStyle;
      titleSmall?:TextStyle;
      bodyLarge?:TextStyle;
      bodyMedium?:TextStyle;
      bodySmall?:TextStyle;
      labelLarge?:TextStyle;
      labelMedium?:TextStyle;
      labelSmall?:TextStyle;
      headline1?:TextStyle;
      headline2?:TextStyle;
      headline3?:TextStyle;
      headline4?:TextStyle;
      headline5?:TextStyle;
      headline6?:TextStyle;
      subtitle1?:TextStyle;
      subtitle2?:TextStyle;
      bodyText1?:TextStyle;
      bodyText2?:TextStyle;
      caption?:TextStyle;
      button?:TextStyle;
      overline?:TextStyle;

      
    constructor(
      args:{
        displayLarge?:TextStyle;
        displayMedium?:TextStyle;
        displaySmall?:TextStyle;
       headlineLarge?:TextStyle;
        headlineMedium?:TextStyle;
        headlineSmall?:TextStyle;
        titleLarge?:TextStyle;
        titleMedium?:TextStyle;
        titleSmall?:TextStyle;
        bodyLarge?:TextStyle;
        bodyMedium?:TextStyle;
        bodySmall?:TextStyle;
        labelLarge?:TextStyle;
       labelMedium?:TextStyle;
        labelSmall?:TextStyle;
        headline1?:TextStyle;
        headline2?:TextStyle;
        headline3?:TextStyle;
        headline4?:TextStyle;
        headline5?:TextStyle;
        headline6?:TextStyle;
        subtitle1?:TextStyle;
        subtitle2?:TextStyle;
        bodyText1?:TextStyle;
        bodyText2?:TextStyle;
        caption?:TextStyle;
        button?:TextStyle;
        overline?:TextStyle;
     }



    ) {

      this.displayLarge = args.displayLarge || this.displayLarge;
      this.displayMedium = args.displayMedium || this.displayMedium;
      this.displaySmall = args.displaySmall || this.displaySmall;
      this.headlineLarge = args.headlineLarge || this.headlineLarge;
      this.headlineMedium = args.headlineMedium || this.headlineMedium;
      this.headlineSmall = args.headlineSmall || this.headlineSmall;
      this.titleLarge = args.titleLarge || this.titleLarge;
      this.titleMedium = args.titleMedium || this.titleMedium;
      this.titleSmall = args.titleSmall || this.titleSmall;
      this.bodyLarge = args.bodyLarge || this.bodyLarge;
      this.bodyMedium = args.bodyMedium || this.bodyMedium;
      this.bodySmall = args.bodySmall || this.bodySmall;
      this.labelLarge = args.labelLarge || this.labelLarge;
      this.labelMedium = args.labelMedium || this.labelMedium;
      this.labelSmall = args.labelSmall || this.labelSmall;
      this.headline1 = args.headline1 || this.headline1;
      this.headline2 = args.headline2 || this.headline2;
      this.headline3 = args.headline3 || this.headline3;
      this.headline4 = args.headline4 || this.headline4;
      this.headline5 = args.headline5 || this.headline5;
      this.headline6 = args.headline6 || this.headline6;
      this.subtitle1 = args.subtitle1 || this.subtitle1;
      this.subtitle2 = args.subtitle2 || this.subtitle2;
      this.bodyText1 = args.bodyText1 || this.bodyText1;
      this.bodyText2 = args.bodyText2 || this.bodyText2;
      this.caption = args.caption || this.caption;
      this.button = args.button || this.button;
      this.overline = args.overline || this.overline;
        
    }
}

export{
  TextTheme
}