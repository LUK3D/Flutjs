// Copyright 2022 The Flutjs Author. All rights reserved.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

import { TargetPlatform } from "../foundation/platform";
import { Color } from "../painting/colors";



/** Configures the tap target and layout size of certain Material widgets.
*
* Changing the value in [ThemeData.materialTapTargetSize] will affect the
* accessibility experience.
*
* Some of the impacted widgets include:
*
*   * [FloatingActionButton], only the mini tap target size is increased.
*   * [MaterialButton]
*   * [OutlinedButton]
*   * [TextButton]
*   * [ElevatedButton]
*   * [OutlineButton]
*   * [FlatButton]
*   * [RaisedButton]
*   * The time picker widget ([showTimePicker])
*   * [SnackBar]
*   * [Chip]
*   * [RawChip]
*   * [InputChip]
*   * [ChoiceChip]
*   * [FilterChip]
*   * [ActionChip]
*   * [Radio]
*   * [Switch]
*   * [Checkbox]
*/
enum MaterialTapTargetSize {
    /// Expands the minimum tap target size to 48px by 48px.
    ///
    /// This is the default value of [ThemeData.materialTapTargetSize] and the
    /// recommended size to conform to Android accessibility scanner
    /// recommendations.
    padded,
  
    /// Shrinks the tap target size to the minimum provided by the Material
    /// specification.
    shrinkWrap,
  }

/** Overrides the default values of visual properties for descendant
* [AppBar] widgets.
*
* Descendant widgets obtain the current [AppBarTheme] object with
* `AppBarTheme.of(context)`. Instances of [AppBarTheme] can be customized
* with [AppBarTheme.copyWith].
*
* Typically an [AppBarTheme] is specified as part of the overall [Theme] with
* [ThemeData.appBarTheme].
*
* All [AppBarTheme] properties are `null` by default. When null, the [AppBar]
* compute its own default values, typically based on the overall theme's
* [ThemeData.colorScheme], [ThemeData.textTheme], and [ThemeData.iconTheme].
*/

class AppTheme {

  // GENERAL CONFIGURATION
//TODO:   androidOverscrollIndicator?:AndroidOverscrollIndicator;
  applyElevationOverlayColor?:boolean;
//TODO:   cupertinoOverrideTheme?:NoDefaultCupertinoThemeData;
//TODO:  inputDecorationTheme?:InputDecorationTheme;
  materialTapTargetSize?:MaterialTapTargetSize;
//TODO:  pageTransitionsTheme?:PageTransitionsTheme;   
  platform?:TargetPlatform;
// TODO:  scrollbarTheme?:ScrollbarThemeData;
// Todo:  splashFactory?:InteractiveInkFeatureFactory;
// TODO:  visualDensity?:VisualDensity;
  useMaterial3?:boolean;
  // COLOR
  // [colorScheme] is the preferred way to configure colors. The other color
  // properties (as well as primaryColorBrightness; and primarySwatch)
  // will gradually be phased out; see https://github.com/flutter/flutter/issues/91772.
   colorScheme?:ColorScheme;
   colorSchemeSeed?:Color;
   brightness?:Brightness;
   primarySwatch?:MaterialColor;
   primaryColor?:Color;
   primaryColorLight?:Color;
   primaryColorDark?:Color;
   focusColor?:Color;
   hoverColor?:Color;
   shadowColor?:Color;
   canvasColor?:Color;
   scaffoldBackgroundColor?:Color;
   bottomAppBarColor?:Color;
   cardColor?:Color;
   dividerColor?:Color;
   highlightColor?:Color;
   splashColor?:Color;
   selectedRowColor?:Color;
   unselectedWidgetColor?:Color;
   disabledColor?:Color;
   secondaryHeaderColor?:Color;
   backgroundColor?:Color;
   dialogBackgroundColor?:Color;
   indicatorColor?:Color;
   hintColor?:Color;
   errorColor?:Color;
   toggleableActiveColor?:Color;
  // TYPOGRAPHY & ICONOGRAPHY
   fontFamily?:String;
   typography?:Typography;
   textTheme?:TextTheme;
   primaryTextTheme?:TextTheme;
   iconTheme?:IconThemeData;
   primaryIconTheme?:IconThemeData;
  // COMPONENT THEMES
   appBarTheme?:AppBarTheme;
   bannerTheme?:MaterialBannerThemeData;
   bottomAppBarTheme?:BottomAppBarTheme;
   bottomNavigationBarTheme?:BottomNavigationBarThemeData;
   bottomSheetTheme?:BottomSheetThemeData;
   buttonBarTheme?:ButtonBarThemeData;
   buttonTheme?:ButtonThemeData;
   cardTheme?:CardTheme;
   checkboxTheme?:CheckboxThemeData;
   chipTheme?:ChipThemeData;
   dataTableTheme?:DataTableThemeData;
   dialogTheme?:DialogTheme;
   dividerTheme?:DividerThemeData;
   drawerTheme?:DrawerThemeData;
   elevatedButtonTheme?:ElevatedButtonThemeData;
   floatingActionButtonTheme?:FloatingActionButtonThemeData;
   listTileTheme?:ListTileThemeData;
   navigationBarTheme?:NavigationBarThemeData;
   navigationRailTheme?:NavigationRailThemeData;
   outlinedButtonTheme?:OutlinedButtonThemeData;
   popupMenuTheme?:PopupMenuThemeData;
   progressIndicatorTheme?:ProgressIndicatorThemeData;
   radioTheme?:RadioThemeData;
   sliderTheme?:SliderThemeData;
   snackBarTheme?:SnackBarThemeData;
   switchTheme?:SwitchThemeData;
   tabBarTheme?:TabBarTheme;
   textButtonTheme?:TextButtonThemeData;
   textSelectionTheme?:TextSelectionThemeData;
   timePickerTheme?:TimePickerThemeData;
   toggleButtonsTheme?:ToggleButtonsThemeData;
   tooltipTheme?:TooltipThemeData;
  

}
