import React from 'react';

import './Footer.css';

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Company Details */}

                <div className="footer-section">

                    <h2>SHOPNOW</h2>

                    <p>
                        Your one-stop destination for quality
                        products at affordable prices.
                    </p>

                </div>


                {/* Quick Links */}

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                </div>


                {/* Customer Service */}

                <div className="footer-section">

                    <h3>Customer Service</h3>

                    <ul>
                        <li>My Account</li>
                        <li>Shopping Cart</li>
                        <li>Wishlist</li>
                        <li>Help Center</li>
                    </ul>

                </div>


                {/* Contact */}

                <div className="footer-section">

                    <h3>Contact Us</h3>

                    <p>Email: support@shopnow.com</p>

                    <p>Phone: +91 9876543210</p>

                    <p>India</p>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 SHOPNOW. All Rights Reserved.
                </p>

            </div>

        </footer>

    );

}

export default Footer;