/*
1. Define an interface named Vehicle with the following properties:
        make of type string
        model of type string
        year of type number
        start method which returns void and logs "Engine started" to the console.
*/
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

/*
2. Implement a class named Car that implements the Vehicle interface. The Car class should have:
        A constructor that initializes the make, model, and year properties.
        Implement the start method to log "Car engine started" to the console.
*/
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

//3. Create an instance of the Car class and initialize it with some values for make, model, and year.
const myCar = new Car("Toyota", "Corolla", 2020);

//4. Call the start method on the instance of the Car class to verify that it logs the appropriate message to the console
myCar.start();




