import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Login = () => {
  const { token, login } = useAuth();
  const [loggedIn, setLoggedIn] = useState(!!token);

  const handleLogin = async () => {
    try {
      // Simulated login process, replace with actual authentication logic
      const token = 'your_generated_token';
      login(token);
      setLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  if (loggedIn) {
    return <Redirect to="/products" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
