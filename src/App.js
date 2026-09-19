import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>XRestaurant</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
  );
}

export default App;