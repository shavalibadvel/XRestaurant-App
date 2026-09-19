import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';
import BookingModal from '../components/BookingModal';

const Home = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    axios.get('https://restaurantdata.onrender.com/states')
      .then(res => setStates(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedState) {
      axios.get(`https://restaurantdata.onrender.com/cities/${selectedState}`)
        .then(res => setCities(res.data))
        .catch(err => console.log(err));
    }
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://restaurantdata.onrender.com/restaurants?state=${selectedState}&city=${selectedCity}`)
      .then(res => setRestaurants(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="hero-section">
        <h1>Table Reservation</h1>
        <SearchBar 
          states={states} cities={cities} 
          setSelectedState={setSelectedState} setSelectedCity={setSelectedCity} 
          handleSearch={handleSearch} 
        />
      </div>

      <div className="results-section">
        {restaurants.length > 0 && (
          <>
            <h1>{restaurants.length} restaurants available in {selectedCity}</h1>
            <div className="restaurant-grid">
              {restaurants.map((r, i) => (
                <RestaurantCard key={i} restaurant={r} onBook={() => { setSelectedRestaurant(r); setShowBooking(true); }} />
              ))}
            </div>
          </>
        )}
      </div>

      {showBooking && <BookingModal restaurant={selectedRestaurant} onClose={() => setShowBooking(false)} />}
    </div>
  );
};

export default Home;