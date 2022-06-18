import { Colors } from "../painting/colors.js";
import { CssProperties } from "../utils/cssprops.js";
import { Widget } from "../widgets/framework.js";
import { _AppBar } from "./appBar.js";

function Scaffold(args: {
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
}): Widget {
  var children: Array<Widget> = [];

  if (args.appBar) {
    children.push(args.appBar);
  }

  if (args.body) {
    children.push(args.body);
  }

  var widget = new Widget({
    tagName: "div",
    children: children,

    css: new CssProperties({
      backgroundColor: Colors.Gray[100].value,
      width: "100%",
      height: "100%",
      overflow:"hidden"
    }),
  });

  if (args.body && args.appBar) {
    // widget.tag!.style.paddingTop =
    //   args.appBar.tag!.offsetHeight +  "px" ?? "100px";
    widget.tag!.setAttribute("component", "body");
  }

  return widget;
}

export { Scaffold };
