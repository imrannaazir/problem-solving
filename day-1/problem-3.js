/* 

Task: Function Composition
Question: Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/


const squareNumber = (number) => {
    return number * number;
}

const doubleNumber = (number) => {
    return number * 2
}

const addFive = (number) => {
    return number + 5
}

const composeFunction = (number) => {
    return addFive(doubleNumber(squareNumber(number)))
}

console.log(composeFunction(1)) 