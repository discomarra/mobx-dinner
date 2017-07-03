import {v4} from "uuid";
import {observable, action} from "mobx";
import Table from "./Table";

class TablesStore {
	@observable tables;

	constructor(tables = []) {
		this.tables = tables;
	}

	@action selectTable = (tableId) => {
		this.tables.forEach(table => table.isSelected = tableId === table.id);
	}

	@action addDishToTable = (dish) => {
		let newDish = {
			dish: {...dish, tableId: 0},
			id: v4()
		};

		const selectedTableArray = this.tables.filter(table => {
			if(table.isSelected) {
				newDish.dish.tableId = table.id;
				return true;
			}

			return false;
		});
		
		if(selectedTableArray === undefined || selectedTableArray.length === 0) {
			console.error("Select a table first");
			return;
		}

		selectedTableArray[0].dishes.push(newDish);
	}

	@action removeDishFromTable = (tableId, dishItemId) => {
		const table = this.tables.filter(table => table.id === tableId)[0];
		table.dishes = table.dishes.filter(dishItem => dishItem.id !== dishItemId);
	}
}

const tablesStore = new TablesStore([
	new Table(1, 1, false),
	new Table(2, 2, false),
	new Table(3, 3, false),
	new Table(4, 4, false),
	new Table(5, 5, false),
	new Table(6, 6, false),
	new Table(7, 7, false),
	new Table(8, 8, false)
]);

export default tablesStore;
export {TablesStore}