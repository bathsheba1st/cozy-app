import React from "react";
import ProductCard from './ProductCard';
import './ProductList.css';
import image1 from '../assets/pants.jpg';
import image2 from '../assets/men-black-shirt.jpg';
import image3 from '../assets/men-white-shirt.jpg';
import image4 from '../assets/reading-glasses.jpg';
import image5 from '../assets/sunglasses1.jpg';
import image6 from '../assets/sunglasses2.jpg';
import image7 from '../assets/white-shirts.jpg';
import image8 from '../assets/women-black-shirt.jpg';
import image9 from '../assets/women-white-shirt.jpg';

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 1,
            name: 'Pants',
            price: 20,
            description: 'This is a great product for everyday use.',
            image: image1 },
        { id: 2,
            name: 'Men Black Shirt',
            price: 20,
            description: 'This is a great product for everyday use.',
            image: image2 },
        { id: 3,
            name: 'Men White Shirt',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image3 },
        { id: 4,
            name: 'Reading Glasses',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image4 },
        { id: 5,
            name: 'Sunglasses',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image5 },
        { id: 6,
            name: 'Sunglasses',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image6 },
        { id: 7,
            name: 'White Shirts',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image7 },
        { id: 8,
            name: 'Women Black Shirt',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image8 },
        { id: 9,
            name: 'Women White Shirt',
            price: 30,
            description: 'This is a great product for everyday use.',
            image: image9 },
    ];

    return (
        <div className={'product-list'}>
            <h2>Welcome to Our Store</h2>
            <p>Your one-stop shop for High quality ethically sourced apparels and accessories. </p>
            <div className={'product-grid'}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;