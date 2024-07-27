import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductList from "./components/ProductList";
import CheckoutForm from "./components/CheckoutForm";
import Navbar from "./components/Navbar";
import CartPage from "./components/pages/CartPage";
import PaymentSuccessPage from "./components/pages/PaymentSuccessPage";
import PaymentFailedPage from "./components/pages/PaymentFailedPage";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalAmount(totalAmount + product.price);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setTotalAmount(totalAmount - cart[index].price);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
  }

  return (
      <Router>
        <div className="App">
          <Navbar cartItemCount={cart.length} />
          <Routes>
            <Route path={'/'} element={
                <ProductList addToCart={addToCart} />
            } />
            <Route path={'/cart'} element={
              <CartPage cart={cart} removeFromCart={removeFromCart}
                        totalAmount={totalAmount} />
            } />
            <Route path={'/checkout'} element={
              <Elements stripe={stripePromise}>
                <CheckoutForm totalAmount={totalAmount} clearCart={clearCart} />
              </Elements>
            }/>
            <Route path={'/success'} element={<PaymentSuccessPage />} />
            <Route path={'/payment-failed'} element={<PaymentFailedPage />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
