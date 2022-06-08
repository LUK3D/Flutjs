import { TextTheme } from "../material/text_theme.js";
import { IconThemeData } from "../widgets/icon_theme_data.js";
import { Color } from "./colors.js";
import { Typography } from "./typography.js";
declare class ThemeData {
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
    fontFamily?: String;
    typography?: Typography;
    textTheme?: TextTheme;
    primaryTextTheme?: TextTheme;
    iconTheme?: IconThemeData;
    primaryIconTheme?: IconThemeData;
    constructor(args: {
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
    });
}
export { ThemeData };
