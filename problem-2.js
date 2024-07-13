// books
const books = [
    { title: 'Habluder jonno proggramming', author: 'Jhankar Mahbub', year: 2020 },
    { title: 'Computer and programming ', author: 'Tamim "Shaharir Shubin', year: 2009 },
    { title: 'Book 2', author: 'Abul Hasan', year: 2025 },
    { title: 'Book 3', author: 'Kabul Rana', year: 2030 },
];

// Function to get an array of book titles
function getBookTitles(booksArray) {
    return booksArray.map(book => book.title);
}

//print
console.log(getBookTitles(books)); 