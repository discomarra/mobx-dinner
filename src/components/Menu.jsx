import React from "react";
import {observer} from "mobx-react";
import dishesStore from "../stores/dishesStore";

import DishSearch from "./DishSearch.jsx";
import DishAdd from "./DishAdd.jsx";
import DishList from "./DishList.jsx";

export default observer(() => {
	return (
		<div className="Menu">
			<h3>Menu</h3>
			<DishSearch onSearch={dishesStore.setSearchCriteria.bind(dishesStore)}/>
			<DishAdd onAddClick={dishesStore.addNewDish.bind(dishesStore)}/>
			<DishList dishes={dishesStore.dishes} crit={dishesStore.searchCriteria}/>
		</div>
	);
});