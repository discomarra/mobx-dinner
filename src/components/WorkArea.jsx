import React from "react";
import TablesArea from "./TablesArea.jsx";
import Menu from "./Menu.jsx";
import Separator from "./Separator.jsx";

class WorkArea extends React.Component {
	render() {
		const {dishesStore, tablesStore} = this.props;

		return (
			<div className="WorkArea">
				<TablesArea tablesStore={tablesStore}/>
				<Separator dishesStore={dishesStore}/>
				{/*<Menu />*/}
			</div>
		);
	}
};

export default WorkArea;