declare class Color {
    a?: number;
    r?: number;
    g?: number;
    b?: number;
    value?: string;
    withAlpha?: Function;
    withOpacity?: Function;
    withRed?: Function;
    withGreen?: Function;
    withBlue?: Function;
    constructor(args: {
        a?: number;
        r?: number;
        g?: number;
        b?: number;
        value?: string;
        withAlpha?: Function;
        withOpacity?: Function;
        withRed?: Function;
        withGreen?: Function;
        withBlue?: Function;
    });
}
interface hexToRgbInterface {
    hex: string;
    alpha?: number;
}
/** {@tool snippet}
*
* To select a specific color from one of the swatches, index into the swatch
* using an integer for the specific color desired, as follows:
*
* ```dart
* Color selection = Colors.green[400]!; // Selects a mid-range green.
* ```
* {@end-tool}
* {@tool snippet}
*
* Each [ColorSwatch] constant is a color and can used directly. For example:
*
* ```dart
* Container(
*   color: Colors.blue, // same as Colors.blue[500] or Colors.blue.shade500
* )
* ```
* {@end-tool}
*
* ## Color palettes
**/
export default class Colors {
    /**
     *
     */
    White: Color;
    Black: Color;
    Rose: {
        /**
         * Cor basico de teste
         */
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Pink: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Fuchsia: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Purple: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Violet: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Indigo: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Blue: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Sky: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Cyan: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Teal: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Emerald: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Green: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Lime: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Yellow: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Amber: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Orange: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Red: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Stone: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Neutral: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Zinc: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Gray: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    Slate: {
        50: Color;
        100: Color;
        200: Color;
        300: Color;
        400: Color;
        500: Color;
        600: Color;
        700: Color;
        800: Color;
        900: Color;
    };
    color: Color;
    /** An immutable 32 bit color value in ARGB format.
*
* Consider the light teal of the Flutter logo. It is fully opaque, with a red
* channel value of 0x42 (66), a green channel value of 0xA5 (165), and a blue
* channel value of 0xF5 (245). In the common "hash syntax" for color values,
* it would be described as `#42A5F5`.
*
* Here are some ways it could be constructed:
*
* ```js
* Color c = Color(0xFF42A5F5);
* Color c = Color.fromARGB(0xFF, 0x42, 0xA5, 0xF5);
* Color c = Color.fromARGB(255, 66, 165, 245);
* Color c = Color.fromRGBO(66, 165, 245, 1.0);
* ```
*
* If you are having a problem with `Color` wherein it seems your color is just
* not painting, check to make sure you are specifying the full 8 hexadecimal
* digits. If you only specify six, then the leading two digits are assumed to
* be zero, which means fully-transparent:
*
* ```js
* Color c1 = Color(0xFFFFFF); // fully transparent white (invisible)
* Color c2 = Color(0xFFFFFFFF); // fully opaque white (visible)
* ```
*
* See also:
*
*   [Colors](https://api.flutter.dev/flutter/material/Colors-class.html), which
*    defines the colors found in the Material Design specification.
**/
    constructor({ a, r, g, b }: Color);
    /**  Construct a color from 3 or 4 float numbers.
.
    *
    *  `a` is the alpha value, with 0 being transparent and 255 being fully
    *  opaque.
    *
    *
    *  `r` is [red], from 0 to 255.
    *
    *
    *  `g` is [green], from 0 to 255.
    *
    *
    *  `b` is [blue], from 0 to 255.
    *
    * Out of range values are brought into range using modulo 255.
    **/
    fromARGB({ a, r, g, b }: Color): Color;
    /** Converts an Hex value to RGB color
     *
     * invalid values will have unexpected effects.
     **/
    hexToRgb({ hex, alpha }: hexToRgbInterface): Color;
    /**
     * Returns a new color that matches this color with the alpha channel
     * replaced with `a` (which ranges from 0 to 255).
     * Out of range values will have unexpected effects.
     * @param a
     * @returns
     */
    withAlpha(a: number): string;
    /** Returns a new color that matches this color with the alpha channel
    * replaced with the given `opacity` (which ranges from 0.0 to 1.0).
    *
    * Out of range values will have unexpected effects.
    **/
    withOpacity(opacity: number): string;
    /** Returns a new color that matches this color with the red channel replaced
    * with `r` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    * */
    withRed(r: number): string;
    /** Returns a new color that matches this color with the green channel
    * replaced with `g` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    **/
    withGreen(g: number): string;
    /** Returns a new color that matches this color with the blue channel replaced
    * with `b` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    * */
    withBlue(b: number): string;
    fromUtil(className: string): string;
}
declare let c: Colors;
export { c as Colors, Color };
