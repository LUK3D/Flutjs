import { ThemeData } from "../painting/themeData";
import Widget, { ExtendedWidget } from "./framework";

class App extends ExtendedWidget{
    title?:string;
    theme?:ThemeData;
    home:Widget|ExtendedWidget;

    constructor(args:{title?:string,theme?:ThemeData, home:Widget|ExtendedWidget}){
        super({tagName:"div", children:[args.home]})
        this.title = args.title;
        this.theme  =args.theme;
        this.home = args.home;

       
    }

    build(){
        return this.home.tag!.outerHTML;
    }
}

export{
    App
}