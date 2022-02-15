import { ThemeData } from "../painting/themeData";
import { App } from "../widgets/app";
import { Widget} from "../widgets/framework";
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
        home:Widget
    }
){
    return  App({
        title: args.title,
        theme: args.theme,
        home: args.home
    });
}





export{
    ThemeMode,
    MaterialApp
}