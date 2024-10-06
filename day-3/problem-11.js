/* 
Task 11: Advanced Sorting
Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
*/


const students = [
    { name: "Alice", grades: [5, 25, 15] },
    { name: "Bob", grades: [100, 100, 100] },
    { name: "Charlie", grades: [75, 80, 70] },
];

const getSortedStudents = (students) => {
    const sortedStudents = students.sort((a, b) => {
        const averageOfA = a.grades.reduce(
            (acc, current) => acc + current,
            0,
        );
        const averageOfB = b.grades.reduce(
            (acc, current) => acc + current,
            0,
        );
        return averageOfB - averageOfA;
    });

    return sortedStudents;
};

console.log(getSortedStudents(students));