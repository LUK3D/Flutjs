import {ExtendedWidget, Widget} from "../widgets/framework";
import { Scaffold } from "./scaffold";

enum ThemeMode{
    system,
    light,
    dark
}


class MaterialApp extends Widget{
    
    home?:ExtendedWidget|Widget|Scaffold;

    constructor(args:{home:Widget,}){
        super({tagName:"div",child:args.home,})
        this.home = new Widget({tagName:"div"});
    }


}



export{
    ThemeMode,
    MaterialApp
}