import { Widget, ExtendedWidget } from "./widgets/framework";

// new Widget({tagName:"div"});

module.exports = {
  Widget,
  ExtendedWidget,
};

(<any>window).Flutjs = {
    Widget,
    ExtendedWidget,
};

