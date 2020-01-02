const myRevealingModule = function() {
	let privateVar = "Ben Cherry",
			publicVar = "Hey There!";

	function privateFunction() {
		return "Name: " + privateVar
	}
	
	function publicSetName(name) {
		privateVar = name;
	}

	function publicGetName() {
		return privateFunction();
	}

	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	}
}();

myRevealingModule.setName("Marilyn Morales")
console.log(myRevealingModule.greeting, myRevealingModule.getName())
