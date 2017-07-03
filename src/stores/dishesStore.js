import {observable, action} from "mobx";
import Dish from "./Dish";

class DishesStore {
	@observable dishes;
	@observable searchCriteria;

	constructor(dishes = []) {
		this.dishes = dishes;
		this.searchCriteria = "";
	}

	getDishById(id) {
		return this.dishes.find(dish => dish.id === id);
	}

	@action setSearchCriteria(crit) {
		this.searchCriteria = crit;
	}

	@action addNewDish(dishName) {
		this.dishes.push(new Dish(undefined, dishName));
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