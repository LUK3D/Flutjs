// How a box should be inscribed into another box.
enum BoxFit {
    /// Fill the target box by distorting the source's aspect ratio.
  
    initial ="initial",

    inherit ="inherit",

    fill ="fill",
  
    /// As large as possible while still containing the source entirely within the
    /// target box.
    contain = "contain",
  
    /// As small as possible while still covering the entire target box.
    ///
    /// To actually clip the content, use `clipBehavior: Clip.hardEdge` alongside
    /// this in a [FittedBox].
    cover = "cover",
  
    /// Align the source within the target box (by default, centering) and discard
    /// any portions of the source that lie outside the box.
    ///
    /// The source image is not resized.
    ///
    none = "none",
  
    /// Align the source within the target box (by default, centering) and, if
    /// necessary, scale the source down to ensure that the source fits within the
    /// box.
    ///
    /// This is the same as `contain` if that would shrink the image, otherwise it
    /// is the same as `none`.
    scaleDown = "scale-down",
  }

  export{
    BoxFit
  }