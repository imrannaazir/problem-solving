/*
Task: Sorting Objects
Question: Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. 
*/

const cars = [
    { make: 'Chevrolet', model: 'Camaro', year: 2012 },
    { make: 'Tesla', model: 'Model S', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2008 }
];

const getSortedCars = (cars) => {
    const sortedCars = cars.sort((a, b) => a.year - b.year)
    return sortedCars
}

console.log(getSortedCars(cars));
