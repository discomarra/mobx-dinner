import {observable} from "mobx";
import Dish from "./Dish";

class DishesStore {
	@observable dishes;

	constructor(dishes = []) {
		this.dishes = dishes;
	}
}

const dishesStore = new DishesStore([
	new Dish(1, "Fish"),
	new Dish(2, "Veal"),
	new Dish(3, "Pork"),
	new Dish(4, "Salad 1"),
	new Dish(5, "Salad 2"),
	new Dish(6, "Wine"),
	new Dish(7, "Juice"),
	new Dish(8, "Beer"),
	new Dish(9, "Water")
]);

export default dishesStore;
export {DishesStore}