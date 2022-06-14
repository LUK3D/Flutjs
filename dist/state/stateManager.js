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
    function StateManager() {
        this.initial = true;
    }
    StateManager.prototype.Obx = function (widget) {
        if (!this.widget) {
            this.widget = widget;
        }
        return widget;
    };
    StateManager.prototype.bind = function (state) {
        this.state = state;
        return this;
    };
    StateManager.prototype.setState = function (val) {
        if (this.state) {
            var tmp = window.flutjs[this.state.key].replace("{".concat(this.state.key, "}"), val.toString());
            this.widget.tag.innerHTML = htmlToElement(tmp).innerHTML;
            this.widget.render({
                tagName: this.widget.tagName,
                classes: this.widget.classes,
                text: this.widget.text,
            });
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