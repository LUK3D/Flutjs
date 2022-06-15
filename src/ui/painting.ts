

enum BlendMode {
   
  
   
    clear = "normal",
  

  
  
    // Following blend modes are defined in the CSS Compositing standard.
  
    /// Multiply the inverse of the components of the source and destination
    /// images, and inverse the result.
    ///
    /// Inverting the components means that a fully saturated channel (opaque
    /// white) is treated as the value 0.0, and values normally treated as 0.0
    /// (black, transparent) are treated as 1.0.
    ///
    /// This is essentially the same as [modulate] blend mode, but with the values
    /// of the colors inverted before the multiplication and the result being
    /// inverted back before rendering.
    ///
    /// This can only result in the same or lighter colors (multiplying by black,
    /// 1.0, results in no change; multiplying by white, 0.0, results in white).
    /// Similarly, in the alpha channel, it can only result in more opaque colors.
    ///
    /// This has similar effect to two projectors displaying their images on the
    /// same screen simultaneously.
   
    screen = "screen",  // The last coeff mode.
  
    /// Multiply the components of the source and destination images after
    /// adjusting them to favor the destination.
    ///
    /// Specifically, if the destination value is smaller, this multiplies it with
    /// the source value, whereas is the source value is smaller, it multiplies
    /// the inverse of the source value with the inverse of the destination value,
    /// then inverts the result.
    ///
    /// Inverting the components means that a fully saturated channel (opaque
    /// white) is treated as the value 0.0, and values normally treated as 0.0
    /// (black, transparent) are treated as 1.0.
  
    overlay = "overlay",
  
    /// Composite the source and destination image by choosing the lowest value
    /// from each color channel.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver].
 
    darken = "darken",
  
    /// Composite the source and destination image by choosing the highest value
    /// from each color channel.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver].
   
    lighten = "lighten",
  
    /// Divide the destination by the inverse of the source.
    ///
    /// Inverting the components means that a fully saturated channel (opaque
    /// white) is treated as the value 0.0, and values normally treated as 0.0
    /// (black, transparent) are treated as 1.0.
  
    colorDodge = "color-dodge",
  
    /// Divide the inverse of the destination by the source, and inverse the result.
    ///
    /// Inverting the components means that a fully saturated channel (opaque
    /// white) is treated as the value 0.0, and values normally treated as 0.0
    /// (black, transparent) are treated as 1.0.
 
    colorBurn = "color-burn",
  
    /// Subtract the smaller value from the bigger value for each channel.
    ///
    /// Compositing black has no effect; compositing white inverts the colors of
    /// the other image.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver].
    ///
    /// The effect is similar to [exclusion] but harsher.
   
    difference = "difference",
  
    /// Subtract double the product of the two images from the sum of the two
    /// images.
    ///
    /// Compositing black has no effect; compositing white inverts the colors of
    /// the other image.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver].
    ///
    /// The effect is similar to [difference] but softer.

    exclusion = "exclusion",
  
    /// Multiply the components of the source and destination images, including
    /// the alpha channel.
    ///
    /// This can only result in the same or darker colors (multiplying by white,
    /// 1.0, results in no change; multiplying by black, 0.0, results in black).
    ///
    /// Since the alpha channel is also multiplied, a fully-transparent pixel
    /// (opacity 0.0) in one image results in a fully transparent pixel in the
    /// output. This is similar to [dstIn], but with the colors combined.
    ///
    /// For a variant that multiplies the colors but does not multiply the alpha
    /// channel, consider [modulate].

    multiply = "multiply",  // The last separable mode.
  
    /// Take the hue of the source image, and the saturation and luminosity of the
    /// destination image.
    ///
    /// The effect is to tint the destination image with the source image.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver]. Regions that are entirely transparent in the source image take
    /// their hue from the destination.
    hue = "hue",
  
    /// Take the saturation of the source image, and the hue and luminosity of the
    /// destination image.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver]. Regions that are entirely transparent in the source image take
    /// their saturation from the destination.

    saturation = "saturation",
  
    /// Take the hue and saturation of the source image, and the luminosity of the
    /// destination image.
    ///
    /// The effect is to tint the destination image with the source image.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver]. Regions that are entirely transparent in the source image take
    /// their hue and saturation from the destination.
    color = "color",
  
    /// Take the luminosity of the source image, and the hue and saturation of the
    /// destination image.
    ///
    /// The opacity of the output image is computed in the same way as for
    /// [srcOver]. Regions that are entirely transparent in the source image take
    /// their luminosity from the destination.
    ///
 
    luminosity = "luminosity",
  }


  
/// Styles to use for blurs in [MaskFilter] objects.
// These enum values must be kept in sync with SkBlurStyle.
enum BlurStyle {

  /// Nothing inside, fuzzy outside. This is useful for painting shadows for
  /// partially transparent shapes, when they are painted separately but without
  /// an offset, so that the shadow doesn't paint below the shape.
  outer="",

  /// Fuzzy inside, nothing outside. This can make shapes appear to be lit from
  /// within.
  inner = "inset",
}
  
  export{
    BlendMode,
    BlurStyle
  }