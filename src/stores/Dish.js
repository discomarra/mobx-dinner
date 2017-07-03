import {v4} from "uuid";

class Dish {
	constructor(id = v4(), name) {
		this.id = id;
		this.name = name;
	}
}

export default Dish;