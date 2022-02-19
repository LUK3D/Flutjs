import { ThemeData } from "../painting/themeData";
import { CrossAxisAlignment, MainAxisAlignment } from "../rendering/flex";
import { ExtractCss } from "../utils/processor";
import _Key, { Key } from "../utils/uuid";
import { isNumber } from "../utils/validator";

/**
 * Flutjs class to generate a new Widget
 */
export default class Widget {
  /**
   * widget key, when rendered, it will generate a key atribute to be used to track the element state.
   */
  key?: _Key | string;

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
  style?:string;

  constructor(args: {
    key?: _Key | string;
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
    this.key = args.key;
    this.child = args.child;
    this.children = args.children;
    this.parent = args.parent;
    this.render({ tagName: args.tagName, text: args.text });
    this.width = args.width || this.width;
    this.height = args.height || this.height;
    
    
    this.key = Key();
    this.setKey(args.key);
    
    this.classes = args.classes;

    if (isNumber(args.width!)) {
      this.tag!.style.width = args.width!.toString() + "%";
    }
    if (isNumber(args.height!)) {
      this.tag!.style.height = args.height!.toString() + "%";
    }

    return this;
  }

  
  setKey(key?:_Key|string){
    if (key) {
        this.tag?.setAttribute("key",key.toString());
    }else{
        this.tag?.setAttribute("key",`${this.tag!.tagName.toLowerCase()}_${this.key!.toString()}`);

    }
  }

  render(args: { tagName: string; text?: string }) {
    this.tag = document.createElement(args.tagName);
    document.body.appendChild(this.tag);


    if (this.classes) {
      this.tag.classList.add(this.classes.join(" "));
    }

    this.addTextContent({ text: args.text });

    if (this.child) {
      this.appendChild(this.child.tag!);
      this.extactStyle(this.child);
      
    }
    if (this.children) {
      let ctx = this;
      this.children.map((widget) => {
        widget.parent = ctx.tag;
        this.extactStyle(widget);
        this.appendChild(widget.tag!);
      });
    }
  }
  //So.., because we want to generate beautiful websites, we need to extract the inline  css for each element.
  //TODO: Finish removing the inline css
  // For now its just extracting the last element css..
  extactStyle(widget:Widget){
    
      if(!this.style){
        this.style = this.tag!.getAttribute("style")||"";
      }
    console.log("WIDGET STYLE: ", widget.style + this.style)
    this.style = ExtractCss(widget);
    //Removendo o atributo style para deixar o código mais limpo.
    // widget.tag!.removeAttribute("style");
    console.log("STYLE2: ", this.style)

  }

  addTextContent(args: { text?: string }) {
    if (args.text) {
      if (args.text.length > 0) {
        this.tag!.textContent = args.text;
      }
    }
  }

  appendChild(el: HTMLElement) {
    this.tag?.appendChild(el);
  }
}

export { Widget };
