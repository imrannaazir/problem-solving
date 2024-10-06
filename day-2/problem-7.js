// Task 7: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// 1. if year is divided by 4 but
// 2. not divided by 100 , or divided by 400 

const checkLeapYear = (year) => {
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    } else {
        return false
    }
}

console.log(checkLeapYear(1800))