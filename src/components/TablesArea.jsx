import React from "react";
import {observer} from "mobx-react";
import Tables from "./Tables.jsx";

export default observer(({tablesStore}) => {
	return (
		<div className="TablesArea">
			<h3>Tables</h3>
			<Tables tablesStore={tablesStore}/>
		</div>
	);
});