import React, { useState } from "react";
import "./Login.css";
import Dashboard from "./Dashboard";


export default function Login({ onLoginSuccess }) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
        // onLoginSuccess(data.user);
        return(
            <Dashboard user={data.user} />
        );
    } else {
        alert(data.message);
    }

};

return (
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Login</button>
        </form>
    </div>
);
}