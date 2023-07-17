let customers = [
    {
        customerId: '12345',
        name: 'John Doe',
        email: 'johndoe@example.com',
        balance: 5000.00
    },
    {
        customerId: '12346',
        name: 'Ryan A',
        email: 'ryan.apratamaaa@gmail.com',
        balance: 0
    }
];

function getAllCustomers() {
    return customers;
}

function getCustomer(customerId) {
    return customers.find((c) => c.customerId === customerId);
}

function createCustomer(name, email, initialBalance) {
    let newCustomer = {
        customerId: generateCustomerId(),
        name: name,
        email: email,
        balance: initialBalance
    }
    return newCustomer
}

module.exports = { getAllCustomers, getCustomer, createCustomer };