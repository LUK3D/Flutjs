import { ThemeData } from "../painting/themeData";
import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex";
import Key from "../utils/uuid";
import { isNumber } from "../utils/validator";

/**
 * Flutjs class to generate a new Widget
 */
export default class Widget {
  /**
   * widget Id, when rendered, it will generate am id
   */
  key?: Key | string;

  width: number | string = "auto";
  height: number | string = "auto";

  tag?: HTMLElement;
  child?: Widget;
  children?: Array<Widget>;
  parent?: HTMLElement;
  textContent?: string;
  decoration?: ThemeData;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  classes?: Array<string>;

  constructor(args: {
    key?: Key | string;
    tagName: string;
    child?: Widget;
    children?: Array<Widget>;
    parent?: HTMLElement;
    text?: string;
    decoration?: ThemeData;
    width?: string | number;
    height?: string | number;
    classes?: Array<string>;
  }) {
    this.child = args.child;
    this.children = args.children;
    this.parent = args.parent;
    this.render({ tagName: args.tagName, text: args.text });
    this.width = args.width || this.width;
    this.height = args.height || this.height;

    if (args.key) {
      this.key = args.key;
    }

    this.classes = args.classes;

    if (isNumber(args.width!)) {
      this.tag!.style.width = args.width!.toString() + "%";
    }
    if (isNumber(args.height!)) {
      this.tag!.style.height = args.height!.toString() + "%";
    }

    return this;
  }

  render(args: { tagName: string; text?: string }) {
    this.tag = document.createElement(args.tagName);
    document.body.appendChild(this.tag);

    if (this.classes) {
      this.tag.classList.add(this.classes.join(" "));
    }
    //  this.tag.style.width = `${this.width}`;
    //  this.tag.style.height = `${this.height}`;
    this.addTextContent({ text: args.text });

    if (this.child) {
      this.appendChild(this.child.tag!);
    }
    if (this.children) {
      let ctx = this;
      this.children.map((widget) => {
        widget.parent = ctx.tag;
        this.appendChild(widget.tag!);
      });
    }
  }

  addTextContent(args: { text?: string }) {
    if (args.text) {
      if (args.text.length > 0) {
        // let textEl = document.createTextNode(args.text);
        this.tag!.textContent = args.text;
      }
    }
  }

  appendChild(el: HTMLElement) {
    this.tag?.appendChild(el);
  }
}

export { Widget };
