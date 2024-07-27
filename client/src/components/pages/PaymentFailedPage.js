import React from "react";
import { Link } from "react-router-dom";

const PaymentFailedPage = () => {
  return (
      <div>
          <h2>Payment Unsuccessful</h2>
          <p>There was an issue processing your payment. Please try again later.</p>
          <Link to={'/'}>Go back to Home</Link>
      </div>
  );
};

export default PaymentFailedPage;
