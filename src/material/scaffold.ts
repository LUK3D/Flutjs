import {Widget, ExtendedWidget } from "../widgets/framework"


function Scaffold(
    args:{
        body?:ExtendedWidget|Widget,
        appBar?:Widget|ExtendedWidget,
        bodyScrim?:Widget|ExtendedWidget,
        bottomSheet?:Widget|ExtendedWidget,
        snackBar?:Widget|ExtendedWidget,
        materialBanner?:Widget|ExtendedWidget,
        persistentFooter?:Widget|ExtendedWidget,
        bottomNavigationBar?:Widget|ExtendedWidget,
        floatingActionButton?:Widget|ExtendedWidget,
        drawer?:Widget|ExtendedWidget,
        endDrawer?:Widget|ExtendedWidget,
        statusBar?:Widget|ExtendedWidget,
    }
):ExtendedWidget{

    // var children = [];

    // if(args.appBar){
    //     children.push(args.appBar);
    // }
    // if(args.body){
    //     children.push(args.body);
    // }

    return new ExtendedWidget({
        tagName:"div",
        children:[args.body!]
    })
}


export{
    Scaffold
}