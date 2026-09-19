import React, { useState, useEffect } from 'react';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(data);
  }, []);

  return (
    <div className="my-bookings-container">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="booking-card">
            <h3>{b.restaurantName}</h3>
            <p>{b.address}</p>
            <p>{b.city}, {b.state}</p>
            <p>Date: {new Date(b.bookingDate).toLocaleDateString()}</p>
            <p>Time: {b.bookingTime}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;