const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const transfer = require('../service/transfer');

router.post('/do', bodyParser.json(), (req, res) => {
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

module.exports = router;