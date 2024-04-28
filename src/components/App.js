// App.js
import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';
import tourData from './tourData';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(tourData);
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours);
  };

  const toggleReadMore = (id) => {
    const updatedTours = tours.map(tour =>
      tour.id === id ? { ...tour, showInfo: !tour.showInfo } : tour
    );
    setTours(updatedTours);
  };

  const refreshTours = () => {
    setTours(tourData);
  };

  return (
    <main id="main">
    <div className="App">
      <h1>Tours</h1>
      {loading ? (
        <Loading />
      ) : tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} toggleReadMore={toggleReadMore} />
      ) : (
        <div>
          <p>No tours left</p>
          <button onClick={refreshTours}>Refresh</button>
        </div>
      )}
    </div>
    </main>
  );
};

export default App;
