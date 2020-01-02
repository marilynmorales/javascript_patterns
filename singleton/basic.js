const mySingleton = (function() {
	var instance;

	function init() {
		const privateVar = "I am a private var",
					privateNumber = Math.random();

		function privateMethod() {
			return "I am a private method";
		}

		return {
			publicMethod() {
				return "The public can see me!"
			},
			publicProperty: "I am public",

			getRandomNumber: () => {
				return privateNumber
			}
		}
	}
	
	return {
		getInstance: () => {
			if(!instance) {
				instance = init()
			}

			return instance;
		}
	}

}());

const a = mySingleton.getInstance(),
			b = mySingleton.getInstance();
console.log(a === b);

console.log(a.publicMethod(), a.publicProperty, a.getRandomNumber())
