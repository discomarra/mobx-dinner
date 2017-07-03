import React from "react";
import {observer} from "mobx-react";
import Table from "./Table.jsx";
import tablesStore from "../stores/tablesStore";

@observer
class Tables extends React.Component {
	constructor(props) {
		super(props);

		this.selectTable = this.selectTable.bind(this);
		this.removeDishFromTable = this.removeDishFromTable.bind(this);
	}

	removeDishFromTable(tableId, dishItemId) {
		tablesStore.removeDishFromTable(tableId, dishItemId);
	}

	selectTable(tableId) {
		tablesStore.selectTable(tableId);
	}

	render() {
		const tablesArray = tablesStore.tables.map((table, index) => {
			const _onTableClick = () => this.selectTable(table.id);
			const _onDishClick = (dishItemId) => this.removeDishFromTable(table.id, dishItemId);

			return (
				<Table 
					key={table.id} 
					table={table} 
					onTableClick={_onTableClick}
					onDishClick={_onDishClick}
				/>
			);
		});

		return (
			<div className="Tables">
				{tablesArray}
			</div>
		);
	}
};

export default Tables;