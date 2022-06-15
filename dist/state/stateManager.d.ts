import Widget from "../widgets/framework.js";
declare class State {
    key: string;
    val: string | number | Object;
    constructor(args: {
        key: string;
        val: string | number | Object;
    });
}
declare class StateManager {
    /**Observes the state of a value and updates all elements binded    */
    constructor(state: State);
    state?: State;
    element?: HTMLElement;
    initial: boolean;
    widget?: Widget;
    Bind(widget: Widget): Widget;
    setState(val: string | number | Object): void;
}
export { State, StateManager };
