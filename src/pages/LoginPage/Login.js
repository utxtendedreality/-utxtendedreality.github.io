import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Login.css"


export default function Login() {

    const [formData, setForm] = useState({
      username: "",
      password: "",
    });

    const[redirect, setRedirect] = useState(false);

    const {setUserInfo} = useContext(UserContext);

    function handleChange(event) {
      setForm(prevFormData => ({
        ...prevFormData,
        [event.target.name]: event.target.value
      }))
    }
  
    async function handleSubmit(ev) {
      ev.preventDefault();
      
      // validate form data 
      if (!formData.username || !formData.password) {
        alert('Both fields are required.');
        return;
      }
      
      try {
        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
        });
        
        const responseData = await response.json(); // try to parse the response to JSON
        
        if (response.ok) {
          setUserInfo(responseData);
          setRedirect(true);
          alert('Successfully logged in.')
        } else {
          alert(`Error: Wrong Credentials`); // if the response is not OK, print out the error message
        }
      } catch (err) {
        alert('Failed to parse server response'); // if parsing the response fails, catch the error
      }
    }
    
    
    if (redirect) {
       return <Navigate to = {'/home'} />
    }
  
    
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}> 
          <h2 className="login-title">Login</h2>        
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

      <input className="login-submit-button" type="submit" value="Login" />

      </form>
    </div>

  )
}


