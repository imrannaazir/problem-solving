/* Task 6: Array Reduction

Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumber = (numbers) => {
    const result = numbers.reduce((acc, number) => {
        if (number % 2 === 0) {
            return acc + number
        } else {
            return acc
        }
    }, 0)

    return result;
}

console.log(sumEvenNumber(numbers))