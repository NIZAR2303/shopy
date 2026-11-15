import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout(props) {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    const totalAmount = props.cartItems.reduce(function(total, item) {
        return total + (item.price * item.quantity);
    }, 0);

    function placeOrder(event) {

        event.preventDefault();

        if (props.cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Order placed successfully! Thank you for shopping with SHOPNOW.");

        props.clearCart();
        navigate("/");
    }

    if (props.cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>Your Cart is Empty!</h2>
                <button onClick={function() {
                    navigate("/");
                }}>
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (

        <div className="checkout-container">

            <h1>Checkout</h1>

            <div className="checkout-content">

                <div className="checkout-form">

                    <h2>Delivery Information</h2>

                    <form onSubmit={placeOrder}>

                        <label>Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={function(event) {
                                setName(event.target.value);
                            }}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={function(event) {
                                setEmail(event.target.value);
                            }}
                            required
                        />

                        <label>Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={function(event) {
                                setPhone(event.target.value);
                            }}
                            required
                        />

                        <label>Delivery Address</label>
                        <textarea
                            value={address}
                            onChange={function(event) {
                                setAddress(event.target.value);
                            }}
                            required
                        />

                        <label>City</label>
                        <input
                            type="text"
                            value={city}
                            onChange={function(event) {
                                setCity(event.target.value);
                            }}
                            required
                        />

                        <label>PIN Code</label>
                        <input
                            type="text"
                            value={pincode}
                            onChange={function(event) {
                                setPincode(event.target.value);
                            }}
                            pattern="[0-9]{6}"
                            maxLength="6"
                            required
                        />

                        <button type="submit">
                            Place Order
                        </button>

                    </form>

                </div>

                <div className="order-summary">

                    <h2>Order Summary</h2>

                    {props.cartItems.map(function(item) {

                        return (
                            <div className="summary-item" key={item.id}>

                                <p>{item.name} × {item.quantity}</p>

                                <p>₹{item.price * item.quantity}</p>

                            </div>
                        );

                    })}

                    <hr />

                    <h3>Total: ₹{totalAmount}</h3>

                    <p>Payment Method: Cash on Delivery</p>

                </div>

            </div>

        </div>
    );
}

export default Checkout;