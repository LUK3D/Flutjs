import { Color } from "./colors";

class ThemeData {
    constructor(
        args:{
             // GENERAL CONFIGURATION
             androidOverscrollIndicator: AndroidOverscrollIndicator,
             applyElevationOverlayColor: boolean,
             cupertinoOverrideTheme: NoDefaultCupertinoThemeData,
             inputDecorationTheme: InputDecorationTheme,
             materialTapTargetSize: MaterialTapTargetSize,
             pageTransitionsTheme: PageTransitionsTheme,
             platform: TargetPlatform,
             scrollbarTheme: ScrollbarThemeData,
             splashFactory: InteractiveInkFeatureFactory,
             visualDensity: VisualDensity,
             useMaterial3: boolean,

            // COLOR
            
             colorScheme: ColorScheme,
             colorSchemeSeed: Color,
             brightness: Brightness,
             primarySwatch: MaterialColor,
             primaryColor: Color,
             primaryColorLight: Color,
             primaryColorDark: Color,
             focusColor: Color,
             hoverColor: Color,
             shadowColor: Color,
             canvasColor: Color,
             scaffoldBackgroundColor: Color,
             bottomAppBarColor: Color,
             cardColor: Color,
             dividerColor: Color,
             highlightColor: Color,
             splashColor: Color,
             selectedRowColor: Color,
             unselectedWidgetColor: Color,
             disabledColor: Color,
             secondaryHeaderColor: Color,
             backgroundColor: Color,
             dialogBackgroundColor: Color,
             indicatorColor: Color,
             hintColor: Color,
             errorColor: Color,
             toggleableActiveColor: Color,



            //TYPOGRAPHY & ICONOGRAPHY
             fontFamily: String,
             typography: Typography,
             textTheme: TextTheme,
             primaryTextTheme: TextTheme,
             iconTheme: IconThemeData,
             primaryIconTheme: IconThemeData,

            //COMPONENT THEMES
             appBarTheme: AppBarTheme,
             bannerTheme: MaterialBannerThemeData,
             bottomAppBarTheme: BottomAppBarTheme,
             bottomNavigationBarTheme: BottomNavigationBarThemeData,
             bottomSheetTheme: BottomSheetThemeData,
             buttonBarTheme: ButtonBarThemeData,
             buttonTheme: ButtonThemeData,
             cardTheme: CardTheme,
             checkboxTheme: CheckboxThemeData,
             chipTheme: ChipThemeData,
             dataTableTheme: DataTableThemeData,
             dialogTheme: DialogTheme,
             dividerTheme: DividerThemeData,
             drawerTheme: DrawerThemeData,
             elevatedButtonTheme: ElevatedButtonThemeData,
             floatingActionButtonTheme: FloatingActionButtonThemeData,
             listTileTheme: ListTileThemeData,
             navigationBarTheme: NavigationBarThemeData,
             navigationRailTheme: NavigationRailThemeData,
             outlinedButtonTheme: OutlinedButtonThemeData,
             popupMenuTheme: PopupMenuThemeData,
             progressIndicatorTheme: ProgressIndicatorThemeData,
             radioTheme: RadioThemeData,
             sliderTheme: SliderThemeData,
             snackBarTheme: SnackBarThemeData,
             switchTheme: SwitchThemeData,
             tabBarTheme: TabBarTheme,
             textButtonTheme: TextButtonThemeData,
             textSelectionTheme: TextSelectionThemeData,
             timePickerTheme: TimePickerThemeData,
             toggleButtonsTheme: ToggleButtonsThemeData,
             tooltipTheme: TooltipThemeData,
        }
    ) {
        
    }
}

export{
    ThemeData
}