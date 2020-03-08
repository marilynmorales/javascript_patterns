const myCar = {
    name: "Ford Focus",
    drive: function() {
        console.log("WEEEEE. I'm driving!")
    },
    panic: function() {
        console.log("Wait. How do you stop this thing?")
    }
}

var yourCar = Object.create(myCar);
console.log(yourCar.name)
yourCar.drive()


/*****/

const vehicle = {
    getModel: function() {
        console.log("The model of this vehicle is.." + this.model)
    }
}
