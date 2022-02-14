import { ThemeData } from "../painting/themeData";
import { App } from "../widgets/app";
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
        home:Widget|ExtendedWidget
    }
){
    return new App({
        title: args.title,
        theme: args.theme,
        home: args.home
    }).build();
}





export{
    ThemeMode,
    MaterialApp
}