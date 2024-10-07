/* 
Task: Array Intersection
Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

*/


const array1 = [1, 2, 3, 4, 5];

const array2 = [4, 5, 6, 7, 8];

const getSimilarElements = (array1, array2) => {
    const commonElements = array1.filter((item) => array2.includes(item))
    return commonElements
}

console.log(getSimilarElements(array1, array2))