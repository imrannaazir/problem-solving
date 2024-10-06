/* 
Task 12: Functional Programming - Reduce
Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.
*/

const orders = [
    {
        price: 45,
        quantity: 2
    },
    {
        price: 30,
        quantity: 6
    },
    {
        price: 20,
        quantity: 4
    }
]

const calculateTotal = (orders) => {
    const total = orders.reduce((acc, current) => {
        return acc + (current.price * current.quantity)
    }, 0)

    return total
}

console.log(calculateTotal(orders))