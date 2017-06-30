import {observable} from "mobx";

class Table {
	@observable dishes;

	constructor(id, number, isSelected, dishes = []) {
		this.id = id;
		this.number = number;
		this.isSelected = isSelected;
		this.dishes = dishes;
	}
}

export default Table;