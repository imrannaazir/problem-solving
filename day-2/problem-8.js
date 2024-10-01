// Task 8: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year

const countVowels = (inputString) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    const arrOfChar = (inputString.split(""))
    arrOfChar.forEach((char) => {
        if (vowels.includes(char.toLowerCase())) {
            count += 1
        }
    })
    return count
}

console.log(countVowels("Happy New Year"))