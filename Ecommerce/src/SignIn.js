import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    const API_KEY = 'your-firebase-api-key'; // Replace with your Firebase API key

    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true,
      });

      // Here's where we get the ID token (JWT)
      console.log(response.data.idToken);

      // You should store the token securely in localStorage or sessionStorage depending on the requirements
      sessionStorage.setItem('idToken', response.data.idToken);

      // Clear any errors
      setError('');

      // Redirect or perform any further actions

    } catch (err) {
      // Handle errors, for example, show an alert to the user
      if (err.response && err.response.data) {
        setError(err.response.data.error.message);
        alert('Authentication failed');
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SignIn;
