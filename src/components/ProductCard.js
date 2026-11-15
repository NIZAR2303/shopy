import React from "react";

import './ProductCard.css';

function ProductCard(props) {

    const product = {
        id: props.id,
        name: props.name,
        price: props.price,
        description: props.description,
        rating: props.rating,
        reviews: props.reviews,
        image: props.image
    };

    return (

        <div className="product-card">

            <span className="product-badge">New</span>

            <img
                src={props.image}
                alt={props.name}
                className="product-image"
            />

            <div className="product-details">

                <h3>{props.name}</h3>

                <p className="product-description">
                    {props.description}
                </p>

                <h4 className="product-price">
                    ₹{props.price}
                </h4>

                <p className="product-rating">
                    ⭐ {props.rating} ({props.reviews} Reviews)
                </p>

                <div className="product-buttons">

                    <button onClick={function() {
                        props.addToCart(product);
                    }}>
                        Add to Cart
                    </button>

                    <button onClick={function() {
                        props.addToWhishlist(product);
                    }}>
                        Add to Wishlist ❤️
                    </button>

                    <button onClick={props.onViewDetails}>
                        View Details
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;