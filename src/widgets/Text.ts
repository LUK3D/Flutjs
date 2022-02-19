import { TextStyle, _TextStyle } from "../painting/text_style";
import _Key from "../utils/uuid";
import {Widget } from "./framework";

class  _Text extends Widget {
    constructor(args:{
        text:string, 
        key?:_Key|string,
        textStyle?:_TextStyle
    }){
        super({tagName:"p", key:args.key, text:args.text});
        if(args){
            if(args.textStyle){
                args.textStyle.color &&  (this.tag!.style.color = args.textStyle?.color);
                args.textStyle.backgroundColor &&  (this.tag!.style.backgroundColor = args.textStyle?.backgroundColor);
                args.textStyle.fontSize &&  (this.tag!.style.fontSize = args.textStyle?.fontSize);
                args.textStyle.fontWeight &&  (this.tag!.style.fontWeight = args.textStyle?.fontWeight);
                args.textStyle.fontStyle &&  (this.tag!.style.fontStyle = args.textStyle?.fontStyle);
                args.textStyle.wordSpacing &&  (this.tag!.style.wordSpacing = args.textStyle?.wordSpacing);
                // args.textStyle.textBaseline &&  (this.tag!.style.textBaseline = args.textStyle?.textBaseline);
                args.textStyle.height &&  (this.tag!.style.height = args.textStyle?.height);
                // args.textStyle.leadingDistribution &&  (this.tag!.style.leadingDistribution = args.textStyle?.leadingDistribution);
                // args.textStyle.locale &&  (this.tag!.style.locale = args.textStyle?.locale);
                // args.textStyle.foreground &&  (this.tag!.style.foreground = args.textStyle?.foreground);
                args.textStyle.shadows &&  (this.tag!.style.boxShadow = args.textStyle?.shadows);
                // args.textStyle.fontFeatures &&  (this.tag!.style.fontFeatures = args.textStyle?.fontFeatures);
                // args.textStyle.decoration &&  (this.tag!.style.decoration = args.textStyle?.decoration);
                // args.textStyle.decorationColor &&  (this.tag!.style.decorationColor = args.textStyle?.decorationColor);
                // args.textStyle.decorationStyle &&  (this.tag!.style.decorationStyle = args.textStyle?.decorationStyle);
                // args.textStyle.decorationThickness &&  (this.tag!.style.decorationThickness = args.textStyle?.decorationThickness);
                // args.textStyle.debugLabel &&  (this.tag!.style.debugLabel = args.textStyle?.debugLabel);
                args.textStyle.fontFamily &&  (this.tag!.style.fontFamily = args.textStyle?.fontFamily);
                args.textStyle.fontFamilyFallback &&  (this.tag!.style.fontFamily += args.textStyle?.fontFamilyFallback.join(''));
                args.textStyle.package &&  (this.tag!.style.fontFamily += args.textStyle?.package);
                args.textStyle.overflow &&  (this.tag!.style.overflow = args.textStyle?.overflow);
                
            }
        }
        return this;
    }
}

function Text(value:string,args?:{textStyle?:_TextStyle}){
   
    return new _Text({text:value, textStyle:args?.textStyle});
}

export{
    Text
}   