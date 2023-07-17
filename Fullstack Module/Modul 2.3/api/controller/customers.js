const customers = require('../service/customers');
const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

app.post("/customers", (req, res) => {
    try {
        res.status(201).json({ data: customers.getAllCustomers() })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message })
    }
});