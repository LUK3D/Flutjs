"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeData = void 0;
const colors_1 = require("./colors");
class ThemeData {
    constructor(args) {
        this.colorPrimary = args.colorPrimary || colors_1.Colors.Blue[200];
        this.colorPrimaryVariant = args.colorPrimaryVariant || colors_1.Colors.Blue[700];
        this.colorOnPrimary = args.colorOnPrimary || colors_1.Colors.Gray[50];
        this.colorSecondary = args.colorSecondary || colors_1.Colors.Green[400];
        this.colorSecondaryVariant = args.colorSecondaryVariant || colors_1.Colors.Green[700];
        this.colorOnSecondary = args.colorOnSecondary || colors_1.Colors.Gray[50];
        this.colorSurface = args.colorSurface || colors_1.Colors.Gray[50];
        this.colorOnSurface = args.colorOnSurface || colors_1.Colors.Gray[800];
        this.chrome = args.chrome || colors_1.Colors.Yellow[600];
        this.colorOnBackground = args.colorOnBackground || colors_1.Colors.Gray[800];
        this.colorError = args.colorError || colors_1.Colors.Red[400];
        this.colorOnError = args.colorOnError || colors_1.Colors.Gray[50];
    }
}
exports.ThemeData = ThemeData;
