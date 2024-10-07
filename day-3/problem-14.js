/* 
Task: Object Transformation
Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

*/

const customers = [
    { name: "Alice", purchases: 3, loyaltyPoints: 10 },
    { name: "Bob", purchases: 2, loyaltyPoints: 5 },
    { name: "Charlie", purchases: 4, loyaltyPoints: 20 },
    { name: "David", purchases: 6, loyaltyPoints: 30 },
];

const doubleLoyaltyPoints = (customers) => {
    const transformedCustomer = customers.map((customer) => {
        if (customer.purchases > 5) {
            customer.loyaltyPoints = customer.loyaltyPoints * 2
        }
        return customer
    })
    return transformedCustomer
}


console.log(doubleLoyaltyPoints(customers))