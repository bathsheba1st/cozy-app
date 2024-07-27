const express = require('express');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/stripe-public-key', (req, res) => {
//     res.send({ publicKey: process.env.STRIPE_PUBLIC_KEY });
// });

app.post('/create-payment-intent',
    async (req, res) => {

    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, //Amount in cents
            currency: 'usd',
        });

        res.send({
            clientSecret: paymentIntent.client_secret
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5252, () => {
    console.log(`Server is running on port 5252`);
})