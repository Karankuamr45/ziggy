// src/App.js
import React, { useState } from 'react';
import RestaurantCard from './Dummy';

const restaurantsData = [
  { id: 1, name: 'Restaurant A', rating: 4.5 },
  { id: 2, name: 'Restaurant B', rating: 3.8 },
  { id: 3, name: 'Restaurant C', rating: 4.2 },
  // Add more restaurant data as needed
];

const App = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const filterByRating = () => {
    const filtered = restaurantsData.filter((restaurant) => restaurant.rating > 4);
    setFilteredRestaurants(filtered);
  };

  const resetFilter = () => {
    setFilteredRestaurants(null);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={filteredRestaurants ? resetFilter : filterByRating}
        className={`${
          filteredRestaurants ? 'bg-gray-500' : 'bg-blue-500'
        } text-white font-bold py-2 px-4 rounded mb-4`}
      >
        {filteredRestaurants ? 'Reset Filter' : 'Filter Restaurants (Rating > 4)'}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {(filteredRestaurants || restaurantsData).map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default App;
