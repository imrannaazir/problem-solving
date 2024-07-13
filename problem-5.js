// Peoples
const people = [
    { name: 'Jhankar', age: 25 },
    { name: 'Mezhba', age: 30 },
    { name: 'Mir', age: 22 },
    { name: 'Shuvo', age: 28 }
];

// Function to find and modify the age of a specific person by name
function updatePersonAge(peopleArray, personName, newAge) {
    const person = peopleArray.find(person => person.name === personName);

    if (person) {
        person.age = newAge;
    }

    console.log(peopleArray);
}

// Update age of the person named 'Mir'
updatePersonAge(people, 'Mir', 23);

