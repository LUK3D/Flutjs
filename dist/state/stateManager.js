import { htmlToElement } from "../utils/domUtils.js";
import { noStateExeption } from "../utils/FlutExeption.js";
var State = /** @class */ (function () {
    function State(args) {
        this.key = args.key;
        this.val = args.val;
    }
    return State;
}());
var StateManager = /** @class */ (function () {
    /**Observes the state of a value and updates all elements binded    */
    function StateManager(state) {
        this.initial = true;
        this.state = state;
        if (!window.flutjs) {
            window.flutjs = {};
        }
    }
    StateManager.prototype.Bind = function (widget) {
        var _a;
        if (!this.widget) {
            this.widget = widget;
        }
        window.flutjs[this.state.key] = (_a = widget.tag) === null || _a === void 0 ? void 0 : _a.outerHTML;
        //Defining the initial value 
        this.setState(this.state.val);
        return widget;
    };
    StateManager.prototype.setState = function (val) {
        var _a;
        if (this.state) {
            this.state.val = val;
            console.log(this.state.key, ":", window.flutjs[this.state.key]);
            var tmp = window.flutjs[this.state.key].split("{".concat(this.state.key, "}")).join(val.toString());
            var html = htmlToElement(tmp);
            this.widget.tag.innerText = '';
            (_a = this.widget.tag) === null || _a === void 0 ? void 0 : _a.append(html);
        }
        else {
            noStateExeption({
                message: "There was an error while trying to setState of umbinded value",
            });
        }
    };
    return StateManager;
}());
export { State, StateManager };
//# sourceMappingURL=stateManager.js.map