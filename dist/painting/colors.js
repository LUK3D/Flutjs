"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
class Colors {
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
    constructor() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.alpha = 0;
        this.value = "#ffffff";
    }
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
    fromARGB({ a = 1, r, g, b }) {
        this.value = `rgb(${r}, ${g}, ${b}, ${a})`;
        /** Red chanel of this color */
        this.red = r;
        this.blue = b;
        this.green = g;
        this.blue = b;
        return this;
    }
    /** Converts an Hex value to RGB color
     *
     * invalid values will have unexpected effects.
     **/
    hexToRgb({ hex, alpha = 1 }) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
        var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
        var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
        if (alpha) {
            return this.fromARGB({ r: r, g: g, b: b, a: alpha });
        }
        else {
            return this.fromARGB({ r: r, g: g, b: b });
        }
    }
    /**
     * Returns a new color that matches this color with the alpha channel
     * replaced with `a` (which ranges from 0 to 255).
     * Out of range values will have unexpected effects.
     * @param a
     * @returns
     */
    withAlpha(a) {
        // var vals = this.value.replace("rgb(","").replace(")","").split(",").map(x=>parseFloat(x));
        return this.fromARGB({ r: this.red, g: this.green, b: this.blue, a: a });
    }
    /** Returns a new color that matches this color with the alpha channel
    * replaced with the given `opacity` (which ranges from 0.0 to 1.0).
    *
    * Out of range values will have unexpected effects.
    **/
    withOpacity(opacity) {
        var vals = this.value.replace("rgb(", "").replace(")", "").split(",").map(x => parseFloat(x));
        return this.fromARGB({ r: this.red, g: this.green, b: this.blue, a: Math.round(255.0 * opacity) });
    }
    /** Returns a new color that matches this color with the red channel replaced
    * with `r` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    * */
    withRed(r) {
        return this.fromARGB({ a: this.alpha, r: r, g: this.green, b: this.blue });
    }
    /** Returns a new color that matches this color with the green channel
    * replaced with `g` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    **/
    withGreen(g) {
        return this.fromARGB({ a: this.alpha, r: this.red, g: g, b: this.blue });
    }
    /** Returns a new color that matches this color with the blue channel replaced
    * with `b` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    * */
    withBlue(b) {
        return this.fromARGB({ a: this.alpha, r: this.red, g: this.green, b: b });
    }
    fromUtil(className) {
        return this.value = className;
        return this;
    }
}
exports.default = Colors;
exports.Colors = Colors;
