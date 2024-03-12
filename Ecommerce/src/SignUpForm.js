import React, { useState } from 'react';

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Placeholder for your sign-up API endpoint
    const SIGN_UP_API = 'https://crudcrucd.com/signup';
    
    try {
      const response = await fetch(SIGN_UP_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }

      // Handle success
      setMessage('Sign-up successful!');
      setForm({ email: '', password: '' }); // Clear the form
    } catch (error) {
      // Handle error
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUpForm;
