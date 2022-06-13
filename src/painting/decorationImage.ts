/// How to paint any portions of a box not covered by an image.
enum ImageRepeat {
    /// Repeat the image in both the x and y directions until the box is filled.
    repeat = "repeat",
  
    /// Repeat the image in the x direction until the box is filled horizontally.
    repeatX = "repeat-x",
  
    /// Repeat the image in the y direction until the box is filled vertically.
    repeatY = "repeat-y",
  
    /// Leave uncovered portions of the box transparent.
    noRepeat = "no-repeat",
    space = "space",
    round = "round",
    initial = "initial",
    inherit = "inherit",
  }

  export{
    ImageRepeat
  }