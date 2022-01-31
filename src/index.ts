import { Widget, ExtendedWidget } from "./widgets/framework";
import {MaterialApp} from "./material/app";
import {Scaffold} from "./material/scaffold";

// new Widget({tagName:"div"});

let widgets = {
  Widget,
  ExtendedWidget,
  MaterialApp
};
module.exports = widgets;

(<any>window).Flutjs = widgets;

