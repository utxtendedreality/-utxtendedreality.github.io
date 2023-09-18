import React, { useState } from "react";
import { Help } from '@icon-park/react';
import "./Form.css"

export default function Form() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    otherGender: "",
    year: "",
    discipline: "",
    interests: "",
  });

  function handleChange(event) {
    setForm(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  
    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
  
      if(response.ok) {
        alert('Form submitted and email sent!');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch(error) {
      alert('Failed to send email. Please try again later.');
    }
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  const contactInfo = "You can contact us by calling 123-456-789 \n or send us an email at xrclubmember.gmail.com."
  const interestPlaceholder = "Anything you want to do in UTXR club? Anything particularly interests you? Let us know!"
  return (
    <div className="container">
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit} onKeyPress={handleKeyPress}> 
        <h2 className="form-title">Welcome to the UTXR Club!</h2>
        <p className="subtitle"> Fill out the form to join us! </p>
        
        <label>Full Name:</label>
        <input type="text"
          className="form-input"
          placeholder="Your Full Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required 
        />

      <label className="gender-label">Gender:</label>
      <div className="gender-container">
        <select 
          className="gender-select" 
          value={formData.gender} 
          name="gender" 
          onChange={handleChange}
          required>
          <option value=""> Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>

        {formData.gender === "other" && (
          <input 
            type="text"
            className="other-input"
            name="otherGender"
            onChange={handleChange}
            placeholder="Please Specify"
            value={formData.Gender}
            required 
          />
        )}
      </div>

        
        <label className="email-label"> U of T Email: </label>
        <div className="input-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="form-input email-input"
            placeholder="your.uoft-email"
            required
          />
        </div>
        </div>
      

        <label>Year at University:</label>
          <select 
          className="select" 
          value={formData.year} 
          name="year" 
          onChange={handleChange}
          required>
            <option value="">Select Year</option>
            <option value="first">First year</option>
            <option value="second">Second year</option>
            <option value="third">Third year</option>
            <option value="fourth">Fourth year</option>
          </select>

        <label>Discipline:</label>
        <select className="select" value={formData.discipline} name="discipline" onChange={handleChange} required>
          <option value=""> Select Discipline</option>
          <option value="engineering-science">Engineering Science</option>
          <option value="chemical">Chemical Engineering</option>
          <option value="civil">Civil Engineering</option>
          <option value="electrical-computer">Electrical & Computer Engineering</option>
          <option value="industrial">Industrial Engineering</option>
          <option value="materials">Material Engineering</option>
          <option value="mechanical">Mechanical Engineering</option>
          <option value="mineral">Mineral Engineering</option>
          <option value="trackone">TrackOne / Undeclared</option>
          <option value="other">Other</option>
        </select>
        
        <label>Interests:</label>
        <textarea name="interests" placeholder={interestPlaceholder} value={formData.interests} onChange={handleChange} required />
        <input className="submit-button" type="submit" value="Submit" />
        <p className="greeting">We are looking forward to seeing you around!</p>
      </form>
      </div>
        <div className="extra-info">
          <Help className ="help-icon" theme="outline" size="40" fill="#333"/>
          <h2 className="ex-title"> Any Questions?</h2>
          <p className="ex-content">{contactInfo}</p>
        </div>     
    </div>
  )
}