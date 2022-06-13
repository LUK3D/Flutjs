import { Widget } from "../widgets/index.js";
import { _BoxDecoration } from "../painting/index.js";

/**
 * Function to process the decorations and bind them to css properties 
 * @param widget The widget on witch the decorations will be applied to
 * @param boxDecoration The decoration Properties
 * @returns Widget
 */
function defineDecoration(widget:Widget, boxDecoration?:_BoxDecoration):Widget{
    console.log("TAGS",widget.tag);
    console.log("DECORATION",boxDecoration);

    if(!boxDecoration){
        return widget;
    }
    if(boxDecoration?.borderRadius){
        if(boxDecoration?.borderRadius.value){
          var radius = boxDecoration?.borderRadius.value;
          widget.tag!.style.borderTopLeftRadius = radius[0] ;
          widget.tag!.style.borderTopRightRadius = radius[1] ;
          widget.tag!.style.borderBottomLeftRadius = radius[2] ;
          widget.tag!.style.borderBottomRightRadius = radius[3] ;
  
        }
      }

     


    return widget;

}

export{
    defineDecoration
}