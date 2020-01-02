var basketModule = (function(){
	// private 
	var basket = [];

	function doSomethingPrivate() {}

	function doSomethingElsePrivate() {}
	
	return {
		// add times to our basket
		addItem(values) {
			basket.push(values)
			console.log("added: " + values.item + " - " + values.price)
		},

		// get the count of items in the basket
		getItemCount: () => {
			return basket.length;
		},
		
		// public alias to a private function
		doSomething: doSomethingPrivate,

		// get the total value of items in the basket
		getTotal() {
			let itemCount = this.getItemCount(),
					total = 0;

			while(itemCount--) {
				total += basket[itemCount].price;
			}
			return total;
		}
	}
}());


basketModule.addItem({
	item: "Bread",
	price: 0.5
})

basketModule.addItem({
	item: "Butter",
	price: 0.3
})

console.log("Item Count: " + basketModule.getItemCount());

console.log("Item Total " + basketModule.getTotal());
