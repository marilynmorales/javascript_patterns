const myModule = (function(data = {}){
	let props = {
		name: "Marilyn Morales",
		location: "California"
	}
	
	console.log("old props", props)
	Object.assign(props, data);

	console.log("new props", props);
	
	return {
		getGreeting: (() => "Hi, my name is " + props.name + ". I live in " + props.location)
	}
}({
	location: "Los Angeles"
}))

console.log(myModule.getGreeting())
