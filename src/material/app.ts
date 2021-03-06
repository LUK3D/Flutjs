import { ThemeData } from "../painting/themeData.js";
import { App } from "../widgets/index.js";
import { Widget} from "../widgets/index.js";
import { Scaffold } from "./scaffold.js";

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