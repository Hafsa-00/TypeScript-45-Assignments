interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(details: Car) {
    return details;
}

let myCar = createCar({
    manufacturer: 'Toyota',
    model: 'Corolla',
    color: 'Blue',
    year: 2020
});

console.log(myCar);

