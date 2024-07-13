
// parsons 
const peoples = [
    { name: 'Sumaiya', age: 25, gender: 'female' },
    { name: 'Jankar', age: 30, gender: 'male' },
    { name: 'Mir', age: 22, gender: 'male' },
    { name: 'Karina', age: 28, gender: 'female' },
    { name: 'Shejuti', age: 35, gender: 'female' },
    { name: 'Mezba', age: 40, gender: 'male' }
];

// function to filter out
function getMaleNames(peopleArray) {
    return peopleArray
        .filter(person => person.gender === 'male')
        .map(person => person.name);
}
// print 
console.log(getMaleNames(peoples));