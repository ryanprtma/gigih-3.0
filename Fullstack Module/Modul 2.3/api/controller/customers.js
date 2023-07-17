const express = require('express');
const router = express.Router();
const customers = require('../service/customers');

router.get('/all', (req, res) => {
    try {
        res.status(200).json({ data: customers.getAllCustomers() })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message })
    }
});

module.exports = router;