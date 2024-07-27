import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const Payment = ( ) => {

    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        fetch('/config').then(async (res) => {
            const {publishableKey} = await res.json();

            console.log(publishableKey);

            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    return (
        <></>
    );
};

export default Payment;