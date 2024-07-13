// function to square a number
function square(num) {
    return num * num;
}

// function to double a number
function double(num) {
    return num * 2;
}

// function to add 5 to a number
function addFive(num) {
    return num + 5;
}

// compose function
function composeFunction(num) {
    const squaredNum = square(num);
    const doubledNum = double(squaredNum);
    return addFive(doubledNum)
}

// print 
console.log(composeFunction(6));