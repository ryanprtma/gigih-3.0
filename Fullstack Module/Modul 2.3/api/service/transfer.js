const customers = require("../repository/customer");
const transactions = require("../repository/transaction");

const transfer = (sourceId, destinationId, amount) => {
    sourceAccount = customers.getCustomer(sourceId);
    destinationAccount = customers.getCustomer(destinationId);
    if (!sourceAccount || !destinationAccount) {
        throw new Error("Invalid source or destination account");
    }
    if (sourceAccount.balance < amount) {
        throw new Error("Insufficient balance in the source account")
    }
    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    transactions.createTransaction(sourceAccount.customerId, destinationAccount.destinationId, amount);
    return
}

module.exports = { transfer };