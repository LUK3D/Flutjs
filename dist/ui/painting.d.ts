declare enum BlendMode {
    clear = "normal",
    screen = "screen",
    overlay = "overlay",
    darken = "darken",
    lighten = "lighten",
    colorDodge = "color-dodge",
    colorBurn = "color-burn",
    difference = "difference",
    exclusion = "exclusion",
    multiply = "multiply",
    hue = "hue",
    saturation = "saturation",
    color = "color",
    luminosity = "luminosity"
}
declare enum Clip {
    none = "visible",
    hardEdge = "clip",
    auto = "auto"
}
declare enum BlurStyle {
    outer = "",
    inner = "inset"
}
export { BlendMode, BlurStyle, Clip };
