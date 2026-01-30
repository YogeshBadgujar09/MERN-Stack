import React, { useState } from "react";
import "./Register.css";


export default function Register() {
const [formData, setFormData] = useState({
            fullName: "",
            mobile: "",
            email: "",
            password: "",
            address: "",
            state: "",
            district: "",
});


const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
    
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    }); 

    const data = await res.json();
    alert(data.message);
};


return (
<div className="container">
    
        <h2>Customer Registration</h2>

        <form onSubmit={handleSubmit}>
                    <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
                    <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                    <textarea name="address" placeholder="Address" onChange={handleChange} />
                    <input name="state" placeholder="State" onChange={handleChange} />
                    <input name="district" placeholder="District" onChange={handleChange} />
                    <button type="submit">Register</button>
        </form>
</div>
);
}