import React, { useState } from 'react';
import {Navigate} from "react-router-dom";
import "./Register.css"

export default function Register() {

  const [formData, setForm] = useState({
    username: "",
    password: "",
  });

  const[code, setCode] = useState("");
  const[redirect, setRedirect] = useState(false);

  function handleChange(event) {
    setForm(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  }

  async function handleSubmit(ev) {
    if (code === "UTxR2023") {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      setRedirect(true);
      alert('registration successful. Please Login.');
    } else {
      alert('registration failed.');
    }} else {
      ev.preventDefault();
      alert('Wrong Code. Please check with Admin.');
    }
  }

  if (redirect) {
    return <Navigate to = {'/login'} />
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} onKeyPress={handleKeyPress}> 
        <h2 className="login-title">Core Member Register</h2>        
        <label>Username:</label>
        <input type="text"
          className="form-input"
          placeholder="Enter Username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          required 
        />

        <label>Password:</label>
        <input type="text"
          className="form-input"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required 
        />

        <label>Code:</label>
        <input type="text"
          className="form-input"
          placeholder="Only Core Members have access to the code"
          name="code"
          onChange={e => setCode(e.target.value)}
          value={code}
          required 
        />

      <input className="login-submit-button" type="submit" value="Register" />

      </form>
    </div>

  )
}