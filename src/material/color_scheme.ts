/// A set of 25 colors based on the
/// [Material spec](https://m3.material.io/styles/color/the-color-system/color-roles)
/// that can be used to configure the color properties of most components.
///
/// The main accent color groups in the scheme are [primary], [secondary],
/// and [tertiary].
///
/// * Primary colors are used for key components across the UI, such as the FAB,
///   prominent buttons, and active states.
///
/// * Secondary colors are used for less prominent components in the UI, such as
///   filter chips, while expanding the opportunity for color expression.
///
/// * Tertiary colors are used for contrasting accents that can be used to
///   balance primary and secondary colors or bring heightened attention to
///   an element, such as an input field. The tertiary colors are left
///   for makers to use at their discretion and are intended to support
///   broader color expression in products.
///
/// The remaining colors of the scheme are comprised of neutral colors used for
/// backgrounds and surfaces, as well as specific colors for errors, dividers
/// and shadows.
///
/// Many of the colors have matching 'on' colors, which are used for drawing
/// content on top of the matching color. For example, if something is using
/// [primary] for a background color, [onPrimary] would be used to paint text
/// and icons on top of it. For reason, the 'on' colors should have a
/// contrast ratio with their matching colors of at least 4.5:1 in order to
/// be readable.
///
/// The [Theme] has a color scheme, [ThemeData.colorScheme], which can either be
/// passed in as a parameter to the constructor or by using 'brightness' and
/// 'colorSchemeSeed' parameters (which are used to generate a scheme with

import Colors, { Color } from "../painting/colors.js";

/// [ColorScheme.fromSeed]).
class ColorScheme {

    constructor(
    args:{
        // brightness:required,
        primary:Color,
        onPrimary:Color,
        primaryContainer:Color,
        onPrimaryContainer:Color,
        secondary:Color,
        onSecondary:Color,
        secondaryContainer:Color,
        onSecondaryContainer:Color,
        tertiary:Color,
        onTertiary:Color,
        tertiaryContainer:Color,
        onTertiaryContainer:Color,
        error:Color,
        onError:Color,
        errorContainer:Color,
        onErrorContainer:Color,
        background:Color,
        onBackground:Color,
        surface:Color,
        onSurface:Color,
        surfaceVariant:Color,
        onSurfaceVariant:Color,
        outline:Color,
        shadow:Color,
        inverseSurface:Color,
        onInverseSurface:Color,
        inversePrimary:Color,
        }
    ){

    }

}