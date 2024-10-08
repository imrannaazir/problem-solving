/*
Task 15: Function Memoization
Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
*/


const expensiveFunction = (input) => {
    return input + 1;
}

const caches = {}

const memoizedFunction = (fn, input) => {
    if (caches[input]) {
        console.log('Logged cashed result.')
        return caches[input]
    } else {
        console.log('return new result')
        const newResult = fn(input)
        caches[input] = newResult;
        return newResult
    }
}

console.log(memoizedFunction(expensiveFunction, 5))
console.log(memoizedFunction(expensiveFunction, 4))
console.log(memoizedFunction(expensiveFunction, 5))
console.log(memoizedFunction(expensiveFunction, 5))