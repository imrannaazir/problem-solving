// Task 7: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// if year is divided by 4 but not divided by 100 , or divided by 400 

const checkLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true
    } else {
        return false
    }
}

console.log(checkLeapYear(2020))