import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        {/* Main Content */}
        <h1>The Generics</h1>
        <p>Get our Latest Album</p>
        <button>►</button>
        <h2>TOURS</h2>
        {/* Tour Dates Table */}
        {/* Add your tour dates here */}
      </div>
    </div>
  );
};

export default Home;
