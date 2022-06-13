import { ThemeData } from "../painting/themeData.js";
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
  }) {
    super({ tagName: "div", children: [args.home] });
    this.title = args.title;
    this.theme = args.theme;
    this.home = args.home;
    this.tag!.style.width = "100vw";
    this.tag!.style.height = "100vh";
    this.classes = args.classes;
    document.title = args.title ?? document.title;

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
}) {
  var app = new _App({
    title: args.title,
    theme: args.theme,
    home: args.home,
    classes: args.classes,
  });
  return app.tag?.outerHTML + `\n\n<style>\n${app.style}\n</style>`;
}

export { App };
