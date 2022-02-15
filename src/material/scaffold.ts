import {Widget } from "../widgets/framework"
import { _AppBar } from "./app_bar";


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
        width:100,
        height:100,
    })
}


export{
    Scaffold
}