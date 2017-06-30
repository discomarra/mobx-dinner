import React from "react";
import {observer} from "mobx-react";
import Table from "./Table.jsx";

@observer
class Tables extends React.Component {
	constructor(props) {
		super(props);

		this.selectTable = this.selectTable.bind(this);
		this.removeDishFromTable = this.removeDishFromTable.bind(this);
	}

	removeDishFromTable(tableId, dishId) {

	}

	selectTable(tableId) {
		this.props.tablesStore.selectTable(tableId);
	}

	render() {
		const {tablesStore} = this.props;

		const tablesArray = tablesStore.tables.map((table, index) => {
			const _onTableClick = () => this.selectTable(table.id);

			return (
				<Table 
					key={table.id} 
					table={table} 
					onTableClick={_onTableClick}
					onDishClick={this.removeDishFromTable}
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