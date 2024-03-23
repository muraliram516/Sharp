import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

const Products = () => {
  const { token } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      if (token) {
        const response = await fetch(`https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/cart${getEmailId(token)}`);
        if (response.ok) {
          const data = await response.json();
          setCart(data);
        }
      }
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
    }
  };

  const getEmailId = (token) => {
    // Extract email id from token
    // You can implement your own logic here to extract email id from the token
    // For demonstration, assuming token contains user's email id
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken.email.replace('@', '').replace('.', ''); // Remove '@' and '.' from email id
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
