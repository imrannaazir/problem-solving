/* 
Task 9: Unique Values
Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
      */

const myNumbers = [1, 3, 2, 3, 5, 3, 3, 3, 4, 5];

const getUniqueNumbers = (numbers) => {
    const uniqueNumbers = []
    numbers.forEach((number) => {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number)
        }
    })

    return uniqueNumbers
}

console.log(getUniqueNumbers(myNumbers))