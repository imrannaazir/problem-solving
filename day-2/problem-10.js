/*
 Task 10: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.
 */


const numbers = [9, 234, 424, 2, 5, 10000, 6, 2, 6, 3, 33]

const getMaxNumber = (numbers) => {
    let maxNumber = 0
    numbers.forEach((number) => {
        if (number > maxNumber) {
            maxNumber = number
        }
    })
    return maxNumber
}

console.log(getMaxNumber(numbers));
