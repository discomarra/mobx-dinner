import React from "react";
import {observer} from "mobx-react";

@observer
class Table extends React.Component {
	render() {
		const {table, onTableClick, onDishClick} = this.props;

		const dishes = table.dishes.map((dishItem, index) => {
			return (
				<li key={dishItem.id}><a href="#" onClick={() => onDishClick(dishItem.id)}>{dishItem.dish.name}</a></li>
			);
		});

		return (
			<div className={table.isSelected ? "Table Table-selected" : "Table"} onClick={onTableClick}>
				<div className="Table-dishes">
					<ol>
						{dishes}
					</ol>
				</div>
				<div className="Table-number">
					{table.number}
				</div>
			</div>
		);
	}
}

export default Table;