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

     var children:Array<Widget> = [];

     

    if(args.appBar){
        children.push(args.appBar);
    }
   
    if(args.body){
        children.push(args.body);
    }

    var widget = new Widget({
        tagName:"div",
        children:children,
        classes:[
            "w-full",
            "h-full",
            "bg-gray-100"
        ]
    });

    if(args.body && args.appBar){
        widget.tag!.style.paddingTop = (args.appBar.tag!.offsetHeight+10+"px")??"100px";    
    }

    return widget;
}


export{
    Scaffold
}