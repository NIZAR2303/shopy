import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cartzz(props) {

    const navigate = useNavigate();

    // Total Price Calculation
    const totalPrice = props.cartItems.reduce(function(total, product) {
        return total + (product.price * product.quantity);
    }, 0);

    return (

        <div className="cart-container">

            <h1>MY SHOPPING CART</h1>

            {props.cartItems.length === 0 ? (

                <div>
                    <h2>Your Cart is Empty!</h2>
                    <p>Add some products to your cart.</p>

                    <button onClick={function() {
                        navigate('/');
                    }}>
                        Continue Shopping
                    </button>
                </div>

            ) : (

                <div>

                    {props.cartItems.map(function(product) {

                        return (

                            <div key={product.id} className="cart-item">

                                <h3>{product.name}</h3>

                                <p>Price: ₹{product.price}</p>

                                <p>Quantity: {product.quantity}</p>

                                <button onClick={function() {
                                    props.increaseQuantity(product.id);
                                }}>
                                    +
                                </button>

                                <button onClick={function() {
                                    props.decreaseQuantity(product.id);
                                }}>
                                    -
                                </button>

                                <button onClick={function() {
                                    props.removeFromCart(product.id);
                                }}>
                                    Remove
                                </button>

                                <p>
                                    Subtotal: ₹{product.price * product.quantity}
                                </p>

                            </div>

                        );

                    })}

                    <hr />

                    <h2>Total Price: ₹{totalPrice}</h2>

                    <button onClick={function() {
                        navigate('/');
                    }}>
                        Continue Shopping
                    </button>

                    


                         <button onClick={function() {
                                  window.location.href = "/checkout";
                                               }}>
                                        Proceed to Checkout
                        </button>

                </div>

            )}

        </div>

    );

}

export default Cartzz;