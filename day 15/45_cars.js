"use strict";
function createCar(details) {
    return details;
}
let myCar = createCar({
    manufacturer: 'Toyota',
    model: 'Corolla',
    color: 'Blue',
    year: 2020
});
console.log(myCar);
