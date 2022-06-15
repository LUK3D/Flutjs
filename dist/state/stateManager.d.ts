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
    state?: State;
    element?: HTMLElement;
    initial: boolean;
    widget?: Widget;
    Bind(widget: Widget): Widget;
    obs(state: State): this;
    setState(val: string | number | Object): void;
}
export { State, StateManager };
