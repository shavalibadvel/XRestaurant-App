import React from 'react';

const BookingModal = ({ restaurant, onClose }) => {
  const handleConfirm = () => {
    const newBooking = {
      restaurantName: restaurant.restaurantName,
      rating: restaurant.rating,
      address: restaurant.address,
      city: restaurant.city,
      state: restaurant.state,
      bookingDate: new Date().toISOString(),
      bookingTime: '10:00 AM',
      bookingEmail: 'user@example.com'
    };

    const existing = JSON.parse(localStorage.getItem('bookings')) || [];
    existing.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(existing));
    
    alert('Booking Confirmed!');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book {restaurant.restaurantName}</h2>
        <p>Today</p>
        <p>Morning</p>
        <p>Afternoon</p>
        <p>Evening</p>
        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleConfirm} style={{ padding: '0.5rem 1rem', marginRight: '1rem' }}>Confirm</button>
          <button onClick={onClose} style={{ padding: '0.5rem 1rem' }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;