// Tour.js
import React from 'react';

const Tour = ({ tour, removeTour, toggleReadMore }) => {
  const { id, name, info, image, price, showInfo } = tour;

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => toggleReadMore(id)}>
            {showInfo ? 'Show Less' : 'Show More'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
