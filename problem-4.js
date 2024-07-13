// cars
const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 1969 },
    { make: 'Chevrolet', model: 'Camaro', year: 2012 },
    { make: 'Tesla', model: 'Model S', year: 2020 }
];

// Function to sort  
function sortCarsByYear(carsArray) {
    return carsArray.sort((a, b) => a.year - b.year);
}


// Print the sorted array
console.log(sortCarsByYear(cars)); 