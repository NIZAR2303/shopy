import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();

        alert("Login UI working! Backend authentication will be added later.");
    }

    return (
        <div className="auth-container">

            <div className="auth-card">

                <h2>Welcome Back!</h2>
                <p>Login to your SHOPNOW account</p>

                <form onSubmit={handleLogin}>

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
                        placeholder="Enter your password"
                        value={password}
                        onChange={function(event) {
                            setPassword(event.target.value);
                        }}
                        required
                    />

                    <button type="submit">Login</button>

                </form>

                <p className="auth-link">
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </div>

        </div>
    );
}

export default Login;