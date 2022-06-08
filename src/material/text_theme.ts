import { _TextStyle } from "../painting/text_style.js";

class TextTheme {


      displayLarge?:_TextStyle;
      displayMedium?:_TextStyle;
      displaySmall?:_TextStyle;
      headlineLarge?:_TextStyle;
      headlineMedium?:_TextStyle;
      headlineSmall?:_TextStyle;
      titleLarge?:_TextStyle;
      titleMedium?:_TextStyle;
      titleSmall?:_TextStyle;
      bodyLarge?:_TextStyle;
      bodyMedium?:_TextStyle;
      bodySmall?:_TextStyle;
      labelLarge?:_TextStyle;
      labelMedium?:_TextStyle;
      labelSmall?:_TextStyle;
      headline1?:_TextStyle;
      headline2?:_TextStyle;
      headline3?:_TextStyle;
      headline4?:_TextStyle;
      headline5?:_TextStyle;
      headline6?:_TextStyle;
      subtitle1?:_TextStyle;
      subtitle2?:_TextStyle;
      bodyText1?:_TextStyle;
      bodyText2?:_TextStyle;
      caption?:_TextStyle;
      button?:_TextStyle;
      overline?:_TextStyle;

      
    constructor(
      args:{
        displayLarge?:_TextStyle;
        displayMedium?:_TextStyle;
        displaySmall?:_TextStyle;
       headlineLarge?:_TextStyle;
        headlineMedium?:_TextStyle;
        headlineSmall?:_TextStyle;
        titleLarge?:_TextStyle;
        titleMedium?:_TextStyle;
        titleSmall?:_TextStyle;
        bodyLarge?:_TextStyle;
        bodyMedium?:_TextStyle;
        bodySmall?:_TextStyle;
        labelLarge?:_TextStyle;
       labelMedium?:_TextStyle;
        labelSmall?:_TextStyle;
        headline1?:_TextStyle;
        headline2?:_TextStyle;
        headline3?:_TextStyle;
        headline4?:_TextStyle;
        headline5?:_TextStyle;
        headline6?:_TextStyle;
        subtitle1?:_TextStyle;
        subtitle2?:_TextStyle;
        bodyText1?:_TextStyle;
        bodyText2?:_TextStyle;
        caption?:_TextStyle;
        button?:_TextStyle;
        overline?:_TextStyle;
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