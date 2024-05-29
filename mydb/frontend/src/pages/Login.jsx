import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../csss/Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate(); // Import useNavigate hook

  // Check if the user is already logged in
  if (localStorage.getItem('token')) {
    navigate('/dashboard'); // Redirect to dashboard
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      setMessage(response.data.message);
      localStorage.setItem('token', response.data.token); // Store the token
      setLoggedIn(true); // Set login status to true
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div className="form-group">
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
