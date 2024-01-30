import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1>About The Generics</h1>
        <p>Brief description or history of 'The Generics'.</p>
        <button>View Cart</button>
      </div>
    </div>
  );
};

export default About;
