import {Widget, ExtendedWidget } from "../widgets/framework"

class Scaffold extends ExtendedWidget {
    body?:ExtendedWidget|Widget;
    appBar?:Widget|ExtendedWidget;
    bodyScrim?:Widget|ExtendedWidget;
    bottomSheet?:Widget|ExtendedWidget;
    snackBar?:Widget|ExtendedWidget;
    materialBanner?:Widget|ExtendedWidget;
    persistentFooter?:Widget|ExtendedWidget;
    bottomNavigationBar?:Widget|ExtendedWidget;
    floatingActionButton?:Widget|ExtendedWidget;
    drawer?:Widget|ExtendedWidget;
    endDrawer?:Widget|ExtendedWidget;
    statusBar?:Widget|ExtendedWidget;
    
    constructor(args:{
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

    }) {
        super({tagName:"div", });

        this.body = args.body;
        this.appBar = args.appBar;
        this.bodyScrim = args.bodyScrim;
        this.bottomSheet = args.bottomSheet;
        this.snackBar = args.snackBar;
        this.materialBanner = args.materialBanner;
        this.persistentFooter = args.persistentFooter;
        this.bottomNavigationBar = args.bottomNavigationBar;
        this.floatingActionButton = args.floatingActionButton;
        this.drawer = args.drawer;
        this.endDrawer = args.endDrawer;
        this.statusBar = args.statusBar;

        if(this.appBar){
            this.children?.push(this.appBar);
        }
        if(this.body){
            this.children?.push(this.body);
        }

        
        return this;
    }
}

export{
    Scaffold
}