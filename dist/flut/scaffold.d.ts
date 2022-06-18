import { Widget } from "../widgets/framework.js";
import { _AppBar } from "./appBar.js";
declare function Scaffold(args: {
    body?: Widget;
    appBar?: _AppBar;
    bodyScrim?: Widget;
    bottomSheet?: Widget;
    snackBar?: Widget;
    materialBanner?: Widget;
    persistentFooter?: Widget;
    bottomNavigationBar?: Widget;
    floatingActionButton?: Widget;
    drawer?: Widget;
    endDrawer?: Widget;
    statusBar?: Widget;
}): Widget;
export { Scaffold };
