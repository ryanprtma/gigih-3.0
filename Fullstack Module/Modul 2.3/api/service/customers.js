const customers = require("../repository/customer");

const getAllCustomers = () => {
    return customers.getAllCustomers();
}

module.exports = { getAllCustomers };