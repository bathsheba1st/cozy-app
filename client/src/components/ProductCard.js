import React from "react";
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className={'product-card'}>
            <img src={product.image} alt={product.name} className={'product-image'}/>
            <h3 className={'product-name'}>{product.name}</h3>
            <p className={'product-description'}>{product.description}</p>
            <p className={'product-price'}>${product.price}</p>
            <button className={'add-to-cart'} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
