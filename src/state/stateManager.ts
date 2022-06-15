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

  /**Observes the state of a value and updates all elements binded    */
  constructor(state: State){
    this.state = state;

    if(!(window as any).flutjs){
      (window as any).flutjs = {};
    }

  }
  state?: State;
  element?: HTMLElement;

  initial: boolean = true;
  widget?: Widget;

  Bind(widget: Widget) {
    if (!this.widget) {
      this.widget = widget;
    }
    
    (window as any).flutjs[this.state!.key] = widget.tag?.outerHTML;
    //Defining the initial value 
    this.setState(this.state!.val);
    return widget;
  }

  setState(val: string | number | Object) {
    if (this.state) {
      this.state.val = val;
      console.log(this.state.key,":", (window as any).flutjs[this.state.key])

      var tmp = (window as any).flutjs[this.state.key].split(`{${this.state.key}}`).join(val.toString());
        var html = htmlToElement(tmp);

        this.widget!.tag!.innerText = '';
        this.widget!.tag?.append(html);
      

    } else {
      noStateExeption({
        message:
          "There was an error while trying to setState of umbinded value",
      });
    }
  }
}

export { State, StateManager };
