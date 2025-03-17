import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
    getRequest();
  };

  const getRequest = () => {
    const jwt = Cookies.get('jwt');
    alert(jwt);
    
    Cookies.set('jwt', jwt);
    axios.get('http://localhost:8000/api/notifications-view', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    })
    .then(response => {
        alert(JSON.stringify(response.data, null, 2));
        })
        .catch(error => {
        if (error.response) {
            alert(`Error: ${error.response.status}\nMessage: ${JSON.stringify(error.response.data, null, 2)}`);
        } else if (error.request) {
            alert('No response received from server.');
        } else {
            alert(`Error: ${error.message}`);
        }
        });
    

  
  };

  const loginUser = () => {
    axios.post('http://localhost:8000/api/admin-login', { username: email, password: password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status === 200) {
        alert('Login successful');
        // Set JWT and other values in cookies
        Cookies.set('jwt', response.data.token); // No expiration
        setToken(response.data.token);
        
      }
      console.log(response.data.token);
    })
    .catch(error => {
      if (error.response && error.response.status === 500) {
        console.error('Internal Server Error: ', error.response.data);
      } else {
        console.error(error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;