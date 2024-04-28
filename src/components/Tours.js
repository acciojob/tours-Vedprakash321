// Tour.js
import React from 'react';

const Tour = ({ tour, removeTour, toggleReadMore }) => {
  const { id, name, info, image, price, showInfo } = tour;

  // Function to truncate text to 200 words
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 200) {
      return words.slice(0, 200).join(' ') + '...';
    }
    return text;
  };

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {showInfo ? info : truncateText(info)}
          <button onClick={() => toggleReadMore(id)}>
            {showInfo ? 'shows' : 'hides'}
          </button>
        </p>
        <button
          id={`delete-btn-${id}`}
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
