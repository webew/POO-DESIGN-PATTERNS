import Category from './Category.js';
import Cuisson from '../interfaces/Cuisson';

export default class Meal implements Cuisson{
    private name: string;
    private category: Category;
    constructor(name : string, category : Category) {
        this.name = name;
        this.category = category;
    }
    public cuire() : void {
        console.log('====================================');
        console.log("en cuisson");
        console.log('====================================');
    }
}