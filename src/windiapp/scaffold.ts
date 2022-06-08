import {Widget } from "../widgets/framework.js"
import { _AppBar } from "./app_bar.js";


function Scaffold(
    args:{
        body?:Widget,
        appBar?:_AppBar,
        bodyScrim?:Widget,
        bottomSheet?:Widget,
        snackBar?:Widget,
        materialBanner?:Widget,
        persistentFooter?:Widget,
        bottomNavigationBar?:Widget,
        floatingActionButton?:Widget,
        drawer?:Widget,
        endDrawer?:Widget,
        statusBar?:Widget,
    }
):Widget{

    var children = [];

    if(args.appBar){
        children.push(args.appBar);
    }
    if(args.body){
        children.push(args.body);
    }

    return new Widget({
        tagName:"div",
        children:children,
        classes:[
            "w-full",
            "h-full",
            "bg-gray-100"
        ]
    })
}


export{
    Scaffold
}