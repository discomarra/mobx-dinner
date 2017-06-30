import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import WorkArea from "./WorkArea.jsx";
import dishesStore from "../stores/dishesStore";
import tablesStore from "../stores/tablesStore";

import './DinnerApp.css';

class DinnerApp extends Component {
	render() {
		return (
			<div className="DinnerApp">
				<div className="DinnerApp-header">
					<h2>Welcome to Redux Dinner! Table for two please :-)</h2>
				</div>
				<WorkArea tablesStore={tablesStore} dishesStore={dishesStore}/>
				<DevTools />
			</div>
		);
	}	
}

export default DinnerApp;
