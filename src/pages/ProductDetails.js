import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

import './ProductDetails.css'

function ProductDetails(props) {

    const { id } = useParams();

    const product = products.find(function(item) {
        return item.id === Number(id);
    });

    if (!product) {
        return <h2>Product Not Found!</h2>;
    }

    return (

        <div className="product-details-page">

            <img
                src={product.image}
                alt={product.name}
            />

            <div>

                <h1>{product.name}</h1>

                <h2>₹{product.price}</h2>

                <p>{product.description}</p>

                <p>⭐ {product.rating}</p>

                <p>{product.reviews} Reviews</p>

                <button onClick={function() {
                    props.addToCart(product);
                }}>
                    Add to Cart
                </button>

            </div>

        </div>

    );

}

export default ProductDetails;