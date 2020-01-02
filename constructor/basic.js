function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
	this.toString = (() => this.model + " has done " + this.miles + " miles");
}

//usage

const civic = new Car("Honda Civic", 2009, 20000);
const mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString())
console.log(mondeo.toString())
