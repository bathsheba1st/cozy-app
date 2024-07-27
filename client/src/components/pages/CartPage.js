import React from "react";
import './CartPage.css';
import {useNavigate} from "react-router-dom";

const CartPage = ({ cart, removeFromCart, totalAmount }) => {

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className={'cart-page'}>
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul className={'cart-items'}>{cart.map((item, index) => (
                        <i key={index} className={'cart-item'}>
                            <img src={item.image} alt={item.name} className={'cart-item-image'}/>
                            <div className={'cart-item-details'}>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(index)} className={'remove-item'}>Remove</button>
                        </i>
                    ))}
                    </ul>
                    <div className={'cart-total'}>
                        <h3>Total: ${totalAmount}</h3>
                    </div>
                </div>
            )}
            <button onClick={handleCheckout} disabled={cart.length === 0} className={'cart-button'}>Complete Order</button>
        </div>
    );
};

export default CartPage;
