import React from "react";
import {observer} from "mobx-react";
import tablesStore from "../stores/tablesStore";
import Dish from "./Dish.jsx";

export default observer(({onDishClick, dishes, crit}) => {
	const dishComponents = dishes
		.filter((dish) => {
			return dish.name.indexOf(crit) > -1;
		})
		.map((dish) => {
			return (
				<Dish key={dish.id} dish={dish} onClick={tablesStore.addDishToTable.bind(tablesStore)}/>
			);
		});

	return (
		<ol>
			{dishComponents}
		</ol>
	);
});