// Copyright 2022 The Flutjs Author. All rights reserved.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.
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
var MaterialTapTargetSize;
(function (MaterialTapTargetSize) {
    /// Expands the minimum tap target size to 48px by 48px.
    ///
    /// This is the default value of [ThemeData.materialTapTargetSize] and the
    /// recommended size to conform to Android accessibility scanner
    /// recommendations.
    MaterialTapTargetSize[MaterialTapTargetSize["padded"] = 0] = "padded";
    /// Shrinks the tap target size to the minimum provided by the Material
    /// specification.
    MaterialTapTargetSize[MaterialTapTargetSize["shrinkWrap"] = 1] = "shrinkWrap";
})(MaterialTapTargetSize || (MaterialTapTargetSize = {}));
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
var AppTheme = /** @class */ (function () {
    function AppTheme() {
    }
    return AppTheme;
}());
export { AppTheme };
