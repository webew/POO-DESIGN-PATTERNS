"use strict";
exports.__esModule = true;
var Category_1 = require("./classes/Category");
var Meal_1 = require("./classes/Meal");
// import { Logger } from "tslog";
// const log: Logger = new Logger({ name: "myLogger" });
// log.silly("hey");
var meal1 = new Meal_1["default"]("Pizza Calzone", new Category_1["default"]("Pizza"));
console.log('====================================');
meal1.cuire();
console.log('====================================');
