import {observable, action} from "mobx";
import Table from "./Table";

class TablesStore {
	@observable tables;

	constructor(tables = []) {
		this.tables = tables;
	}

	@action selectTable = (tableId) => {
		this.tables.forEach((table) => {
			table.isSelected = tableId === table.id;
		});
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