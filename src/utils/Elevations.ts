import { BoxShadow } from "../painting/boxShadow.js";
import {Colors} from "../painting/colors.js";
import { Offset } from "./offset.js";

var Elevation = {
  0: [
    new BoxShadow({
      offset: Offset(0, 1),
      blurRadius: 2,
      spreadRadius: 0,
      color: Colors.Gray[200],
    }),
  ],
  1: [
    new BoxShadow({
        offset: Offset(0, 1),
        blurRadius: 3,
        spreadRadius: 0,
        color: Colors.Gray[200],
      }),
    new BoxShadow({
        offset: Offset(0, 1),
        blurRadius: 2,
        spreadRadius: -1,
        color: Colors.Gray[200],
      }),
  ],
  2: [
    new BoxShadow({
        offset: Offset(0, 4),
        blurRadius: 6,
        spreadRadius: -1,
        color: Colors.Gray[300],
      }),
    new BoxShadow({
        offset: Offset(0, 2),
        blurRadius: 4,
        spreadRadius: -2,
        color: Colors.Gray[300],
      }),
  ],
  3:  [
    new BoxShadow({
        offset: Offset(0, 10),
        blurRadius: 15,
        spreadRadius: -3,
        color: Colors.Gray[400],
      }),
    new BoxShadow({
        offset: Offset(0, 4),
        blurRadius: 6,
        spreadRadius: -4,
        color: Colors.Gray[400],
      }),
  ],
  4: [
    new BoxShadow({
        offset: Offset(0, 20),
        blurRadius: 25,
        spreadRadius: -5,
        color: Colors.Gray[500],
      }),
    new BoxShadow({
        offset: Offset(0, 8),
        blurRadius: 10,
        spreadRadius: -6,
        color: Colors.Gray[500],
      }),
  ],
  5: [
    new BoxShadow({
        offset: Offset(0, 25),
        blurRadius: 50,
        spreadRadius: -12,
        color: Colors.Gray[500],
      })
  ],
};

export {
    Elevation
}