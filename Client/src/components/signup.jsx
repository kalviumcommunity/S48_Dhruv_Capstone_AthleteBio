import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

export default function SignupForm() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userData = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
        };
    
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log("Signup successful:", data.message);
                navigate("/"); // Redirect after successful signup
            } else {
                console.error("Signup failed:", data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    return (

        <div>
        <button onClick={handleBack} className="back-link">
                ← Back
        </button>
        <div className="signup-container">
            
            <div className="signup-header">
                <h2>Welcome Back!</h2>
                <p>Don’t have an account? Register now!</p>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <input
                    type="text"
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                />
                <button type="submit">Sign up</button>
            </form>
        </div>

        </div>
    );
}
