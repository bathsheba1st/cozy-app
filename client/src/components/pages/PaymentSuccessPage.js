import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
    return (
        <div>
            <h2>Payment Successful</h2>
            <p>Thank you for your purchase! Your payment was successfully processed.</p>
            <Link to={'/'}>Go back to Home</Link>
        </div>
    );
};

export default PaymentSuccessPage;
