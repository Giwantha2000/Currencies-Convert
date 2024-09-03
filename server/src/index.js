const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// All currencies - http://localhost:5000/getAllCurrencies
app.get("/getAllCurrencies", async (req, res) => {
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=bf7e6ad75df743ee992ba405e0e4112e";

    try {
        const namesResponse = await axios.get(nameURL);
        const nameData = namesResponse.data;
        return res.json(nameData);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch currency names' });
    }
});

// Get the target amount - http://localhost:5000/convert
app.get("/convert", async (req, res) => {
    const {
        date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency
    } = req.query;

    try {
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=bf7e6ad75df743ee992ba405e0e4112e`;
        const dataResponse = await axios.get(dataUrl);
        const rates = dataResponse.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        const targetAmount = (targetRate / sourceRate) * amountInSourceCurrency;
        return res.json({ targetAmount });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch conversion rates' });
    }
});

// Listen to port
app.listen(5000, () => {
    console.log("SERVER STARTED on port 5000");
});
