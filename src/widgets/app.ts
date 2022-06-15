import { Colors } from "../painting/colors.js";
import { ThemeData } from "../painting/themeData.js";
import { CssProperties } from "../utils/cssprops.js";
import { Widget } from "./framework.js";

class _App extends Widget {
  title?: string;
  theme?: ThemeData;
  home: Widget;

  constructor(args: {
    title?: string;
    theme?: ThemeData;
    home: Widget;
    classes?: Array<string>;
    mounted?:Function
  }) {
    super({ tagName: "div", children: [args.home], css:new CssProperties({background:Colors.Gray[100].value}) });
    this.title = args.title;
    this.theme = args.theme;
    this.home = args.home;
    this.tag!.style.width = "100vw";
    this.tag!.style.height = "100vh";
    this.classes = args.classes;
    document.title = args.title ?? document.title;

    if(args.mounted)
    args.mounted();

    // this.tag = document.createElement("div");
    // this.tag.id  = "baseApp";
  }

  build() {
    return document.body.outerHTML;
  }
}

function App(args: {
  title?: string;
  theme?: ThemeData;
  home: Widget;
  width?: number | string;
  height?: number | string;
  classes?: Array<string>;
  mounted?:Function
}) {
  var app = new _App({
    title: args.title,
    theme: args.theme,
    home: args.home,
    classes: args.classes,
    mounted:args.mounted
  });
  return app.tag?.outerHTML + `\n\n<style>\n${app.style}\n</style>`;
}

export { App };
