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
    StateManager.prototype.Bind = function (widget) {
        if (!this.widget) {
            this.widget = widget;
        }
        return widget;
    };
    StateManager.prototype.obs = function (state) {
        this.state = state;
        return this;
    };
    StateManager.prototype.setState = function (val) {
        var _a;
        if (this.state) {
            var tmp = window.flutjs[this.state.key].replace("{".concat(this.state.key, "}"), val.toString());
            var html = htmlToElement(tmp);
            this.widget.tag.innerText = '';
            (_a = this.widget.tag) === null || _a === void 0 ? void 0 : _a.append(html);
            // this.widget!.tag!.innerHTML = htmlToElement(tmp).outerHTML;
            // this.widget!.render({
            //   tagName: this.widget!.tagName!,
            //   classes: this.widget!.classes,
            //   text: this.widget!.text,
            //   updating:true,
            // });
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