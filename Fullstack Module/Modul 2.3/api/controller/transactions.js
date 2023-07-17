const transfer = require('../service/transfer');
const customers = require('../service/customers');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

app.post("/transactions", bodyParser.json(), (req, res) => {
    try {
        const { sourceAccount, destinationAccount, amount } = req.body;
        if (!sourceAccount || !destinationAccount || !amount) {
            throw new Error("Insufficient Parameter")
        }
        transfer.transfer(sourceAccount, destinationAccount, amount);
        res.status(201).json({ message: "Transaction created successfully" })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message })
    }
});


app.get("/customers", (req, res) => {
    try {
        res.status(201).json({ data: customers.getAllCustomers() })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message })
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});