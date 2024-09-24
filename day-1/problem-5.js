/* 
Task: Find and Modify
Question: Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

*/


const persons = [
    {
        name: "John Doe",
        age: 25,
        gender: "male"
    },
    {
        name: "Jane Smith",
        age: 30,
        gender: "female"
    },
    {
        name: "Alice Johnson",
        age: 30,
        gender: "female"
    },
    {
        name: "Alice Johnson",
        age: 28,
        gender: "female"
    }, {
        name: "Bob Brown",
        age: 22,
        gender: "male"
    }
]


const modifyPersonAge = (persons, specificPersonName, modifyingAge) => {
    const modifiedPersons = persons.map((person) => {
        if (person.name === specificPersonName) {
            person.age = modifyingAge
        }
        return person
    })

    return modifiedPersons
}

console.log(modifyPersonAge(persons, "Alice Johnson", 18))