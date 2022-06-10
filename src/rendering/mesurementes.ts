/**
 * ## Absolute Lengths
 * The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.
 *
 * Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.
 * 
 * 📜Source: https://www.w3schools.com/cssref/css_units.asp
 */
enum AbsoluteUnits{
    centimeters = "cm",
    millimeters = "mm",
    inches = "in",
    /** ### Pixels (px)
     * Are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels. 
     * 
     * */
    pixels ="px",
    points ="pt",
    picas ="pc",
}
/**
 * ## Relative Lengths
 * Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.
 *
 * > ### Tip:
 *  The em and rem units are practical in creating perfectly scalable layout!
 * Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.
 * 
 * */
enum RelativeUnits{
    /**Relative to the font-size of the Widget (2em means 2 times the size of the current font) */
    em = "em",
    /**Relative to the x-height of the current font (rarely used) */
    ex = "ex",
    /**Relative to the width of the \"0\" (zero) */
    ch = "ch",
    /** 
     * Relative to font-size of the root element
     * */
     rem ="rem",
     /**Relative to 1% of the width of the viewport */
     vw ="vw",
     /**Relative to 1% of viewport's* smaller dimensio */
     vmin ="vmin",
     /**
      * Relative to 1% of viewport's* larger dimension
      */
     vmax ="vmax",
     /**Relative to the parent element */
     '%' ="%",
}


export{
    RelativeUnits,
    AbsoluteUnits
}