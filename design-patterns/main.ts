import Category from './classes/Category';
import Meal from './classes/Meal';
// import { Logger } from "tslog";


// const log: Logger = new Logger({ name: "myLogger" });
// log.silly("hey");

const meal1 = new Meal("Pizza Calzone", new Category("Pizza"));

console.log('====================================');
meal1.cuire();
console.log('====================================');