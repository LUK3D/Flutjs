var Color = /** @class */ (function () {
    function Color(args) {
        this.a = args.a;
        this.r = args.r;
        this.g = args.g;
        this.b = args.b;
        this.value = args.value;
        this.withAlpha = args.withAlpha;
        this.withOpacity = args.withOpacity;
        this.withRed = args.withRed;
        this.withGreen = args.withGreen;
        this.withBlue = args.withBlue;
    }
    return Color;
}());
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
var Colors = /** @class */ (function () {
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
    function Colors(_a) {
        var _b = _a.a, a = _b === void 0 ? 255 : _b, _c = _a.r, r = _c === void 0 ? 255 : _c, _d = _a.g, g = _d === void 0 ? 255 : _d, _e = _a.b, b = _e === void 0 ? 255 : _e;
        /**
         *
         */
        this.Rose = {
            /**
             * Cor basico de teste
             */
            50: this.hexToRgb({ hex: "fff1f2" }),
            100: this.hexToRgb({ hex: "ffe4e6" }),
            200: this.hexToRgb({ hex: "fecdd3" }),
            300: this.hexToRgb({ hex: "fda4af" }),
            400: this.hexToRgb({ hex: "fb7185" }),
            500: this.hexToRgb({ hex: "f43f5e" }),
            600: this.hexToRgb({ hex: "e11d48" }),
            700: this.hexToRgb({ hex: "be123c" }),
            800: this.hexToRgb({ hex: "9f1239" }),
            900: this.hexToRgb({ hex: "881337" }),
        };
        this.Pink = {
            50: this.hexToRgb({ hex: "fdf2f8" }),
            100: this.hexToRgb({ hex: "fce7f3" }),
            200: this.hexToRgb({ hex: "fbcfe8" }),
            300: this.hexToRgb({ hex: "f9a8d4" }),
            400: this.hexToRgb({ hex: "f472b6" }),
            500: this.hexToRgb({ hex: "f472b6" }),
            600: this.hexToRgb({ hex: "db2777" }),
            700: this.hexToRgb({ hex: "be185d" }),
            800: this.hexToRgb({ hex: "9d174d" }),
            900: this.hexToRgb({ hex: "831843" }),
        };
        this.Fuchsia = {
            50: this.hexToRgb({ hex: "fdf4ff" }),
            100: this.hexToRgb({ hex: "f472b6" }),
            200: this.hexToRgb({ hex: "f5d0fe" }),
            300: this.hexToRgb({ hex: "f0abfc" }),
            400: this.hexToRgb({ hex: "e879f9" }),
            500: this.hexToRgb({ hex: "d946ef" }),
            600: this.hexToRgb({ hex: "c026d3" }),
            700: this.hexToRgb({ hex: "a21caf" }),
            800: this.hexToRgb({ hex: "a21caf" }),
            900: this.hexToRgb({ hex: "701a75" }),
        };
        this.Purple = {
            50: this.hexToRgb({ hex: "faf5ff" }),
            100: this.hexToRgb({ hex: "f3e8ff" }),
            200: this.hexToRgb({ hex: "e9d5ff" }),
            300: this.hexToRgb({ hex: "d8b4fe" }),
            400: this.hexToRgb({ hex: "c084fc" }),
            500: this.hexToRgb({ hex: "a855f7" }),
            600: this.hexToRgb({ hex: "9333ea" }),
            700: this.hexToRgb({ hex: "7e22ce" }),
            800: this.hexToRgb({ hex: "6b21a8" }),
            900: this.hexToRgb({ hex: "581c87" }),
        };
        this.Violet = {
            50: this.hexToRgb({ hex: "f5f3ff" }),
            100: this.hexToRgb({ hex: "ede9fe" }),
            200: this.hexToRgb({ hex: "ddd6fe" }),
            300: this.hexToRgb({ hex: "c4b5fd" }),
            400: this.hexToRgb({ hex: "a78bfa" }),
            500: this.hexToRgb({ hex: "8b5cf6" }),
            600: this.hexToRgb({ hex: "7c3aed" }),
            700: this.hexToRgb({ hex: "6d28d9" }),
            800: this.hexToRgb({ hex: "5b21b6" }),
            900: this.hexToRgb({ hex: "4c1d95" }),
        };
        this.Indigo = {
            50: this.hexToRgb({ hex: "eef2ff" }),
            100: this.hexToRgb({ hex: "e0e7ff" }),
            200: this.hexToRgb({ hex: "c7d2fe" }),
            300: this.hexToRgb({ hex: "a5b4fc" }),
            400: this.hexToRgb({ hex: "818cf8" }),
            500: this.hexToRgb({ hex: "6366f1" }),
            600: this.hexToRgb({ hex: "4f46e5" }),
            700: this.hexToRgb({ hex: "4338ca" }),
            800: this.hexToRgb({ hex: "3730a3" }),
            900: this.hexToRgb({ hex: "312e81" }),
        };
        this.Blue = {
            50: this.hexToRgb({ hex: "eff6ff" }),
            100: this.hexToRgb({ hex: "dbeafe" }),
            200: this.hexToRgb({ hex: "bfdbfe" }),
            300: this.hexToRgb({ hex: "93c5fd" }),
            400: this.hexToRgb({ hex: "60a5fa" }),
            500: this.hexToRgb({ hex: "3b82f6" }),
            600: this.hexToRgb({ hex: "2563eb" }),
            700: this.hexToRgb({ hex: "1d4ed8" }),
            800: this.hexToRgb({ hex: "1d4ed8" }),
            900: this.hexToRgb({ hex: "1e3a8a" }),
        };
        this.Sky = {
            50: this.hexToRgb({ hex: "f0f9ff" }),
            100: this.hexToRgb({ hex: "e0f2fe" }),
            200: this.hexToRgb({ hex: "bae6fd" }),
            300: this.hexToRgb({ hex: "7dd3fc" }),
            400: this.hexToRgb({ hex: "38bdf8" }),
            500: this.hexToRgb({ hex: "0ea5e9" }),
            600: this.hexToRgb({ hex: "0284c7" }),
            700: this.hexToRgb({ hex: "0369a1" }),
            800: this.hexToRgb({ hex: "075985" }),
            900: this.hexToRgb({ hex: "0c4a6e" }),
        };
        this.Cyan = {
            50: this.hexToRgb({ hex: "ecfeff" }),
            100: this.hexToRgb({ hex: "cffafe" }),
            200: this.hexToRgb({ hex: "a5f3fc" }),
            300: this.hexToRgb({ hex: "67e8f9" }),
            400: this.hexToRgb({ hex: "22d3ee" }),
            500: this.hexToRgb({ hex: "06b6d4" }),
            600: this.hexToRgb({ hex: "0891b2" }),
            700: this.hexToRgb({ hex: "0e7490" }),
            800: this.hexToRgb({ hex: "155e75" }),
            900: this.hexToRgb({ hex: "164e63" }),
        };
        this.Teal = {
            50: this.hexToRgb({ hex: "f0fdfa" }),
            100: this.hexToRgb({ hex: "ccfbf1" }),
            200: this.hexToRgb({ hex: "99f6e4" }),
            300: this.hexToRgb({ hex: "5eead4" }),
            400: this.hexToRgb({ hex: "2dd4bf" }),
            500: this.hexToRgb({ hex: "14b8a6" }),
            600: this.hexToRgb({ hex: "0d9488" }),
            700: this.hexToRgb({ hex: "0f766e" }),
            800: this.hexToRgb({ hex: "115e59" }),
            900: this.hexToRgb({ hex: "134e4a" }),
        };
        this.Emerald = {
            50: this.hexToRgb({ hex: "ecfdf5" }),
            100: this.hexToRgb({ hex: "d1fae5" }),
            200: this.hexToRgb({ hex: "a7f3d0" }),
            300: this.hexToRgb({ hex: "6ee7b7" }),
            400: this.hexToRgb({ hex: "34d399" }),
            500: this.hexToRgb({ hex: "10b981" }),
            600: this.hexToRgb({ hex: "059669" }),
            700: this.hexToRgb({ hex: "047857" }),
            800: this.hexToRgb({ hex: "065f46" }),
            900: this.hexToRgb({ hex: "064e3b" }),
        };
        this.Green = {
            50: this.hexToRgb({ hex: "f0fdf4" }),
            100: this.hexToRgb({ hex: "dcfce7" }),
            200: this.hexToRgb({ hex: "bbf7d0" }),
            300: this.hexToRgb({ hex: "86efac" }),
            400: this.hexToRgb({ hex: "4ade80" }),
            500: this.hexToRgb({ hex: "22c55e" }),
            600: this.hexToRgb({ hex: "16a34a" }),
            700: this.hexToRgb({ hex: "15803d" }),
            800: this.hexToRgb({ hex: "166534" }),
            900: this.hexToRgb({ hex: "14532d" }),
        };
        this.Lime = {
            50: this.hexToRgb({ hex: "f7fee7" }),
            100: this.hexToRgb({ hex: "ecfccb" }),
            200: this.hexToRgb({ hex: "d9f99d" }),
            300: this.hexToRgb({ hex: "bef264" }),
            400: this.hexToRgb({ hex: "a3e635" }),
            500: this.hexToRgb({ hex: "84cc16" }),
            600: this.hexToRgb({ hex: "65a30d" }),
            700: this.hexToRgb({ hex: "4d7c0f" }),
            800: this.hexToRgb({ hex: "3f6212" }),
            900: this.hexToRgb({ hex: "365314" }),
        };
        this.Yellow = {
            50: this.hexToRgb({ hex: "fefce8" }),
            100: this.hexToRgb({ hex: "fef9c3" }),
            200: this.hexToRgb({ hex: "fef08a" }),
            300: this.hexToRgb({ hex: "fde047" }),
            400: this.hexToRgb({ hex: "facc15" }),
            500: this.hexToRgb({ hex: "eab308" }),
            600: this.hexToRgb({ hex: "ca8a04" }),
            700: this.hexToRgb({ hex: "a16207" }),
            800: this.hexToRgb({ hex: "854d0e" }),
            900: this.hexToRgb({ hex: "713f12" }),
        };
        this.Amber = {
            50: this.hexToRgb({ hex: "fffbeb" }),
            100: this.hexToRgb({ hex: "fef3c7" }),
            200: this.hexToRgb({ hex: "fde68a" }),
            300: this.hexToRgb({ hex: "fcd34d" }),
            400: this.hexToRgb({ hex: "fbbf24" }),
            500: this.hexToRgb({ hex: "f59e0b" }),
            600: this.hexToRgb({ hex: "d97706" }),
            700: this.hexToRgb({ hex: "b45309" }),
            800: this.hexToRgb({ hex: "92400e" }),
            900: this.hexToRgb({ hex: "78350f" }),
        };
        this.Orange = {
            50: this.hexToRgb({ hex: "fff7ed" }),
            100: this.hexToRgb({ hex: "ffedd5" }),
            200: this.hexToRgb({ hex: "fed7aa" }),
            300: this.hexToRgb({ hex: "fdba74" }),
            400: this.hexToRgb({ hex: "fb923c" }),
            500: this.hexToRgb({ hex: "f97316" }),
            600: this.hexToRgb({ hex: "ea580c" }),
            700: this.hexToRgb({ hex: "c2410c" }),
            800: this.hexToRgb({ hex: "9a3412" }),
            900: this.hexToRgb({ hex: "7c2d12" }),
        };
        this.Red = {
            50: this.hexToRgb({ hex: "fef2f2" }),
            100: this.hexToRgb({ hex: "fee2e2" }),
            200: this.hexToRgb({ hex: "fecaca" }),
            300: this.hexToRgb({ hex: "fca5a5" }),
            400: this.hexToRgb({ hex: "f87171" }),
            500: this.hexToRgb({ hex: "ef4444" }),
            600: this.hexToRgb({ hex: "dc2626" }),
            700: this.hexToRgb({ hex: "b91c1c" }),
            800: this.hexToRgb({ hex: "991b1b" }),
            900: this.hexToRgb({ hex: "7f1d1d" }),
        };
        this.Stone = {
            50: this.hexToRgb({ hex: "fafaf9" }),
            100: this.hexToRgb({ hex: "f5f5f4" }),
            200: this.hexToRgb({ hex: "e7e5e4" }),
            300: this.hexToRgb({ hex: "d6d3d1" }),
            400: this.hexToRgb({ hex: "a8a29e" }),
            500: this.hexToRgb({ hex: "78716c" }),
            600: this.hexToRgb({ hex: "57534e" }),
            700: this.hexToRgb({ hex: "44403c" }),
            800: this.hexToRgb({ hex: "292524" }),
            900: this.hexToRgb({ hex: "1c1917" }),
        };
        this.Neutral = {
            50: this.hexToRgb({ hex: "fafafa" }),
            100: this.hexToRgb({ hex: "f5f5f5" }),
            200: this.hexToRgb({ hex: "e5e5e5" }),
            300: this.hexToRgb({ hex: "d4d4d4" }),
            400: this.hexToRgb({ hex: "a3a3a3" }),
            500: this.hexToRgb({ hex: "737373" }),
            600: this.hexToRgb({ hex: "525252" }),
            700: this.hexToRgb({ hex: "404040" }),
            800: this.hexToRgb({ hex: "262626" }),
            900: this.hexToRgb({ hex: "171717" }),
        };
        this.Zinc = {
            50: this.hexToRgb({ hex: "fafafa" }),
            100: this.hexToRgb({ hex: "f4f4f5" }),
            200: this.hexToRgb({ hex: "e4e4e7" }),
            300: this.hexToRgb({ hex: "d4d4d8" }),
            400: this.hexToRgb({ hex: "a1a1aa" }),
            500: this.hexToRgb({ hex: "71717a" }),
            600: this.hexToRgb({ hex: "52525b" }),
            700: this.hexToRgb({ hex: "3f3f46" }),
            800: this.hexToRgb({ hex: "3f3f46" }),
            900: this.hexToRgb({ hex: "18181b" }),
        };
        this.Gray = {
            50: this.hexToRgb({ hex: "f9fafb" }),
            100: this.hexToRgb({ hex: "f3f4f6" }),
            200: this.hexToRgb({ hex: "f3f4f6" }),
            300: this.hexToRgb({ hex: "d1d5db" }),
            400: this.hexToRgb({ hex: "9ca3af" }),
            500: this.hexToRgb({ hex: "6b7280" }),
            600: this.hexToRgb({ hex: "4b5563" }),
            700: this.hexToRgb({ hex: "374151" }),
            800: this.hexToRgb({ hex: "1f2937" }),
            900: this.hexToRgb({ hex: "111827" }),
        };
        this.Slate = {
            50: this.hexToRgb({ hex: "f8fafc" }),
            100: this.hexToRgb({ hex: "f1f5f9" }),
            200: this.hexToRgb({ hex: "e2e8f0" }),
            300: this.hexToRgb({ hex: "cbd5e1" }),
            400: this.hexToRgb({ hex: "94a3b8" }),
            500: this.hexToRgb({ hex: "64748b" }),
            600: this.hexToRgb({ hex: "475569" }),
            700: this.hexToRgb({ hex: "334155" }),
            800: this.hexToRgb({ hex: "1e293b" }),
            900: this.hexToRgb({ hex: "0f172a" }),
        };
        this.color = new Color({ r: 0, g: 0, b: 0, a: 1 });
        this.color = this.fromARGB({ a: a, r: r, g: g, b: b });
        this.color.withAlpha = this.withAlpha;
        this.color.withOpacity = this.withOpacity;
        this.color.withRed = this.withRed;
        this.color.withGreen = this.withGreen;
        this.color.withBlue = this.withBlue;
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
    Colors.prototype.fromARGB = function (_a) {
        var _b = _a.a, a = _b === void 0 ? 1 : _b, r = _a.r, g = _a.g, b = _a.b;
        if (this.color) {
            this.color.value = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
        }
        /** Red chanel of this color */
        this.color = new Color({ r: r, g: g, b: b, a: a });
        return this.color;
    };
    /** Converts an Hex value to RGB color
     *
     * invalid values will have unexpected effects.
     **/
    Colors.prototype.hexToRgb = function (_a) {
        var hex = _a.hex, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
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
    };
    /**
     * Returns a new color that matches this color with the alpha channel
     * replaced with `a` (which ranges from 0 to 255).
     * Out of range values will have unexpected effects.
     * @param a
     * @returns
     */
    Colors.prototype.withAlpha = function (a) {
        // var vals = this.value.replace("rgb(","").replace(")","").split(",").map(x=>parseFloat(x));
        return this.fromARGB({ r: this.color.r, g: this.color.g, b: this.color.b, a: a }).value;
    };
    /** Returns a new color that matches this color with the alpha channel
    * replaced with the given `opacity` (which ranges from 0.0 to 1.0).
    *
    * Out of range values will have unexpected effects.
    **/
    Colors.prototype.withOpacity = function (opacity) {
        // var vals = this.color.value?.replace("rgb(","").replace(")","").split(",").map(x=>parseFloat(x));
        return this.fromARGB({ r: this.color.r, g: this.color.g, b: this.color.b, a: Math.round(255.0 * opacity) }).value;
    };
    /** Returns a new color that matches this color with the red channel replaced
    * with `r` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    * */
    Colors.prototype.withRed = function (r) {
        return this.fromARGB({ a: this.color.a, r: r, g: this.color.g, b: this.color.b }).value;
    };
    /** Returns a new color that matches this color with the green channel
    * replaced with `g` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    **/
    Colors.prototype.withGreen = function (g) {
        return this.fromARGB({ a: this.color.a, r: this.color.r, g: g, b: this.color.b }).value;
    };
    /** Returns a new color that matches this color with the blue channel replaced
    * with `b` (which ranges from 0 to 255).
    *
    * Out of range values will have unexpected effects.
    * */
    Colors.prototype.withBlue = function (b) {
        return this.fromARGB({ a: this.color.a, r: this.color.r, g: this.color.g, b: b }).value;
    };
    Colors.prototype.fromUtil = function (className) {
        this.color.value = className;
        return this.color.value;
    };
    return Colors;
}());
export default Colors;
var c = new Colors({});
export { c as Colors, Color };
//# sourceMappingURL=colors.js.map