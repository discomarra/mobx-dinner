import React from "react";

export default ({onClick, dish}) => {
	return (
		<li>
			<a href="#" onClick={() => onClick(dish)}> <span>{dish.name}</span></a>
		</li>
	);
}