/* 
Task: Array Filtering and Mapping


Question: Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. 
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
        age: 28,
        gender: "female"
    }, {
        name: "Bob Brown",
        age: 22,
        gender: "male"
    }
]

const getMaleNames = (persons) => {
    const malePersons = persons.filter((person) => person.gender !== "female")
    const malePersonNames = malePersons.map((person) => person.name)
    return malePersonNames
}

console.log(getMaleNames(persons))