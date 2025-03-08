/*Define an interface named Vehicle with the following properties:
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