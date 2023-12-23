// src/components/RestaurantCard.js
import React from 'react';

const RestaurantCard = ({ name, rating }) => {
  return (
    <div className="bg-white p-4 m-2 border rounded shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">Rating: {rating}</p>
    </div>
  );
};

export default RestaurantCard;
