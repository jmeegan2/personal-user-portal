import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

function Login() {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle login button click
  const handleLogin = () => {
    // Authentication logic
    // For simplicity, let's consider a basic hardcoded check.
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert("Login credentials incorrect");
      setLoggedIn(false)
    }
  };

  // If already logged in, navigate to dashboard
  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  // Login form JSX
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
