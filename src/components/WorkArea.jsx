import React from "react";
import TablesArea from "./TablesArea.jsx";
import Menu from "./Menu.jsx";
import Separator from "./Separator.jsx";

class WorkArea extends React.Component {
	render() {
		const {dishesStore} = this.props;

		return (
			<div className="WorkArea">
				<TablesArea/>
				<Separator/>
				<Menu dishesStore={dishesStore}/>
			</div>
		);
	}
};

export default WorkArea;