import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {useNavigate} from "react-router-dom";
import './CheckoutForm.css';

const CheckoutForm = ({ totalAmount, clearCart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if(!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const response = await fetch('http://localhost:5252/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: totalAmount }),
            });

            const { clientSecret } = await response.json();

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {  card: cardElement,
                    billing_details: {
                        name,
                        email,
                    },
                },
            });

            if (error) {
                setError(error.message);
                navigate('/payment-failed');
            } else if (paymentIntent.status === 'succeeded') {
                clearCart();
                navigate('/success');
            }
        } catch (err) {
            setError(err.message);
            navigate('/payment-failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={'checkout-form'}>
            <h2>Checkout</h2>
            <label>
                Name
                <input type={'text'} value={name}
                       onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email
                <input type={'email'} value={email}
                       onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Card Details
                <CardElement className={'card-element'}/>
                {error && <p className={'error-message'}>{error}</p>}
            </label>
            <button disabled={!stripe || loading} type="submit" className={'submit-button'}>
                {loading ? 'Processing...' : `Pay $${totalAmount}`}
            </button>
        </form>
    );
};

export default CheckoutForm;