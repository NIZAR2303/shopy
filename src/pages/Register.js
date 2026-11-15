import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleRegister(event) {

        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration UI working! Backend will be added later.");
    }

    return (
        <div className="auth-container">

            <div className="auth-card">

                <h2>Create Account</h2>
                <p>Join SHOPNOW today!</p>

                <form onSubmit={handleRegister}>

                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={function(event) {
                            setName(event.target.value);
                        }}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={function(event) {
                            setEmail(event.target.value);
                        }}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create password"
                        value={password}
                        onChange={function(event) {
                            setPassword(event.target.value);
                        }}
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={function(event) {
                            setConfirmPassword(event.target.value);
                        }}
                        required
                    />

                    <button type="submit">Register</button>

                </form>

                <p className="auth-link">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>

        </div>
    );
}

export default Register;