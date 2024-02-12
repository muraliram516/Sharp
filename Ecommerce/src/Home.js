import React from 'react';
import Header from './Header';

const Home = () => {
  const tourDates = [
    {
      date: 'JUL 16',
      city: 'DETROIT, MI',
      venue: 'DTE ENERGY MUSIC THEATRE',
    },
    {
      date: 'JUL 19',
      city: 'TORONTO, ON',
      venue: 'BUDWEISER STAGE',
    },
   
    {
      date: 'AUG 7',
      city: 'CONCORD, CA',
      venue: 'CONCORD PAVILION',
    }
  ];

  return (
    <div>
      <h1>Tours</h1>
      {tourDates.map((tour, index) => (
        <div key={index} className="tour-date">
          <div className="date">{tour.date}</div>
          <div className="city">{tour.city}</div>
          <div className="venue">{tour.venue}</div>
          <a href={tour.link} target="_blank" rel="noopener noreferrer" className="buy-tickets">BUY TICKETS</a>
        </div>
      ))}
    </div>
  );
}

export default Home;
