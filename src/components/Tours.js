// Tours.js
import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour, toggleReadMore }) => {
  return (
    <div className="tours">
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} toggleReadMore={toggleReadMore} />
      ))}
    </div>
  );
};

export default Tours;
