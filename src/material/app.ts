import { ThemeData } from "../painting/themeData";
import {ExtendedWidget, Widget} from "../widgets/framework";
import { Scaffold } from "./scaffold";

enum ThemeMode{
    system,
    light,
    dark
}


function MaterialApp (
    args:{
        title?:string,
        theme?:ThemeData,
        home?:Widget|ExtendedWidget
    }
):Widget{
    return new Widget({
        tagName:"div",
        child:args.home
        

    })
}





export{
    ThemeMode,
    MaterialApp
}