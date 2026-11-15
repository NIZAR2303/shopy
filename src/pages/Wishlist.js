import React from 'react';

function Wishlistzz(props) {

    return (

        <div>

            <h1>MY WISHLIST</h1>

            {props.whishList.length === 0 ? (

                <div>
                    <h2>Your Wishlist is Empty!</h2>
                    <p>Add your favourite products.</p>
                </div>

            ) : (

                <div>

                    {props.whishList.map(function(product) {

                        return (

                            <div key={product.id}>

                                <h3>{product.name}</h3>

                                <p>Price: ₹{product.price}</p>

                                <button onClick={function() {
                                    props.moveToCart(product);
                                }}>
                                    Move to Cart
                                </button>

                                <button onClick={function() {
                                    props.removeFromWishlist(product.id);
                                }}>
                                    Remove
                                </button>

                                <hr />

                            </div>

                        );

                    })}

                </div>

            )}

        </div>

    );

}

export default Wishlistzz;