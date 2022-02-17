import { ThemeData } from "../painting/themeData";
import Widget from "./framework";

class _App extends Widget {
  title?: string;
  theme?: ThemeData;
  home: Widget;

  constructor(args: { title?: string; theme?: ThemeData; home: Widget }) {
    super({ tagName: "div", children: [args.home] });
    this.title = args.title;
    this.theme = args.theme;
    this.home = args.home;
    this.tag!.style.width = "100vw";
    this.tag!.style.height = "100vh";
    // this.tag = document.createElement("div");
    // this.tag.id  = "baseApp";
  }

  build() {
    return document.body.outerHTML ;
  }
}

function App(args: { title?: string; theme?: ThemeData; home: Widget,width?:number|string, height?:number|string }) {
  var app = new _App({ title: args.title, theme: args.theme, home: args.home });
  return app.tag?.outerHTML + `\n\n<style>\n${app.style}\n</style>`;
}

export { App };
