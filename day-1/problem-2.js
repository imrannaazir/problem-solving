/*
Task: Object Manipulation

Questions: Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. 
*/

const books = [
    { title: 'Book 1', author: 'John Doe', year: 2000 },
    { title: 'Book 2', author: 'Jane Smith', year: 2010 },
    { title: 'Book 3', author: 'Kabul Rana', year: 2030 }
];

const getBookTitles = (books) => {
    const bookTitles = books.map((book) => book.title)
    return bookTitles
}

console.log(getBookTitles(books)) 