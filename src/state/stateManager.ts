import { htmlToElement, replaceOrCreate } from "../utils/domUtils.js";
import { noStateExeption } from "../utils/FlutExeption.js";
import Widget from "../widgets/framework.js";

class State {
  key: string;
  val: string | number | Object;
  constructor(args: { key: string; val: string | number | Object }) {
    this.key = args.key;
    this.val = args.val;
  }
}

class StateManager {
  state?: State;
  element?: HTMLElement;

  initial: boolean = true;
  widget?: Widget;

  Bind(widget: Widget) {
    if (!this.widget) {
      this.widget = widget;
    }
    return widget;
  }

  obs(state: State) {
    this.state = state;
    return this;
  }

  setState(val: string | number | Object) {
    if (this.state) {
      var tmp = (window as any).flutjs[this.state.key].replace(
        `{${this.state.key}}`,
        val.toString()
      );
        var html = htmlToElement(tmp);

        this.widget!.tag!.innerText = '';
        this.widget!.tag?.append(html);
      
      // this.widget!.tag!.innerHTML = htmlToElement(tmp).outerHTML;
      // this.widget!.render({
      //   tagName: this.widget!.tagName!,
      //   classes: this.widget!.classes,
      //   text: this.widget!.text,
      //   updating:true,
      // });
    } else {
      noStateExeption({
        message:
          "There was an error while trying to setState of umbinded value",
      });
    }
  }
}

export { State, StateManager };
