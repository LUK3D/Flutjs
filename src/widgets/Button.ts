import { Alignment, AlignmentGeometry } from "../painting/alignment.js";
import { BoxShadow } from "../painting/boxShadow.js";
import { Color, Colors } from "../painting/colors.js";
import { EdgeInsets, EdgeInsetsGeometry } from "../painting/edge_insets.js";
import { _BoxDecoration } from "../painting/index.js";
import { CssProperties } from "../utils/cssprops.js";
import _Key from "../utils/uuid.js";
import {Widget} from "./framework.js";
import { Row } from "./row.js";

class _Button extends Widget {
    padding?:EdgeInsetsGeometry =  EdgeInsets.all(8.0);
    alignment?:AlignmentGeometry = new Alignment({}).center();
    iconSize?:number;
    splashRadius?:number;
    color?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    disabledColor?:Color;
    onPressed:Function;
    autofocus?:boolean;
    tooltip?:string;
    icon?:Widget;
    label:Widget;
    constructor(args:{
        key?:string | _Key,
        iconSize?:number,
        padding?:EdgeInsetsGeometry,
        alignment?:AlignmentGeometry,
        splashRadius?:number,
        color?:Color,
        focusColor?:Color,
        hoverColor?:Color,
        highlightColor?:Color,
        splashColor?:Color,
        disabledColor?:Color,
        onPressed:Function,
        // mouseCursor,
        // focusNode,
        autofocus?:boolean,
        tooltip?:string,
        // enableFeedback = true,
        // constraints,
        icon?:Widget,
        label:Widget,
        boxDecoration?: _BoxDecoration;

    }) {
        
        super({key:args.key, tagName:"button", child:Row({children:[args.icon,args.label]}), boxDecoration: args.boxDecoration, padding:args.padding});

        this.alignment = args.alignment;
        this.iconSize = args.iconSize;
        this.splashRadius = args.splashRadius;
        this.color = args.color;
        this.focusColor = args.focusColor;
        this.hoverColor = args.hoverColor;
        this.highlightColor = args.highlightColor;
        this.splashColor = args.splashColor;
        this.disabledColor = args.disabledColor;
        this.onPressed= args.onPressed;
        this.autofocus = args.autofocus;
        this.tooltip = args.tooltip;
        this.icon = args.icon;
        this.label= args.label;

        this.tag!.addEventListener('click',(event)=>{
            this.onPressed(event);
        });


    }
}

function Button(args:{
    key?:string | _Key,
    iconSize?:number,
    padding?:EdgeInsetsGeometry,
    alignment?:AlignmentGeometry,
    splashRadius?:number,
    color?:Color,
    focusColor?:Color,
    hoverColor?:Color,
    highlightColor?:Color,
    splashColor?:Color,
    disabledColor?:Color,
    onPressed:Function,
    // mouseCursor,
    // focusNode,
    autofocus?:boolean,
    tooltip?:string,
    // enableFeedback = true,
    // constraints,
    icon?:Widget,
    label:Widget,
    boxDecoration?: _BoxDecoration;

}){
    var button = new _Button(args)
    button.css = new CssProperties({
        padding:"15px 32px",
        color:Colors.Gray[50].value,
        textAlign:"center",
        background:Colors.Sky[500].value,
        border:"none",
        borderRadius:"5px",
        cursor:"pointer",

    })
    button.css.apply(button);
    
    return button;
}
export{
    Button
}