const express = require('express');
const app = express();
const PORT = 3000;

const customersRoute = require('./controller/customers');
const transactionsRoutes = require('./controller/transactions');

app.use('/customers', customersRoute);
app.use('/transactions', transactionsRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});