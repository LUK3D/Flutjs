import { ThemeData } from "../painting/themeData";
import Widget from "./framework";

class _App extends Widget{
    title?:string;
    theme?:ThemeData;
    home:Widget;

    constructor(args:{title?:string,theme?:ThemeData, home:Widget}){
        super({tagName:"div", children:[args.home]})
        this.title = args.title;
        this.theme  =args.theme;
        this.home = args.home;
        // this.tag = document.createElement("div");
        // this.tag.id  = "baseApp";

       
    }

    build(){
        return document.body.outerHTML;
    }
}

function App(args:{title?:string,theme?:ThemeData, home:Widget}){
    var app = new _App({title:args.title, theme:args.theme, home:args.home});
    return app.tag?.outerHTML;
}

export{
    App
}