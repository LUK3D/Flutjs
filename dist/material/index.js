"use strict";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(`<body><body>`).window.document; 

Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Scaffold = exports.MaterialApp = exports.Container = exports.Column = void 0;
const container_1 = require("../widgets/container");
Object.defineProperty(exports, "Container", { enumerable: true, get: function () { return container_1.Container; } });
const column_1 = require("../widgets/column");
Object.defineProperty(exports, "Column", { enumerable: true, get: function () { return column_1.Column; } });
const app_1 = require("./app");
Object.defineProperty(exports, "MaterialApp", { enumerable: true, get: function () { return app_1.MaterialApp; } });
const scaffold_1 = require("./scaffold");
Object.defineProperty(exports, "Scaffold", { enumerable: true, get: function () { return scaffold_1.Scaffold; } });
const Text_1 = require("../widgets/Text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return Text_1.Text; } });
