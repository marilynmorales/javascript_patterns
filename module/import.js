const myModule = (function(data = {}){
	let props = {
		name: "Marilyn Morales",
		location: "California"
	}
	
	console.log("old props", props)
	Object.assign(props, data);

	console.log("new props", props);
}({
	location: "Los Angeles"
}))
