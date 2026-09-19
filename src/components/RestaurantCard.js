import React from 'react';

const RestaurantCard = ({ restaurant, onBook }) => {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.restaurantName}</h3>
      <p>⭐ {restaurant.rating}</p>
      <p>{restaurant.address}</p>
      <p>{restaurant.city}, {restaurant.state}</p>
      <button onClick={onBook}>Book FREE Reservation</button>
    </div>
  );
};

export default RestaurantCard;