import React, { useState } from 'react';

const SearchBar = ({ states, cities, setSelectedState, setSelectedCity, handleSearch }) => {
  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [stateText, setStateText] = useState('Select State');
  const [cityText, setCityText] = useState('Select City');

  return (
    <div className="search-bar-container">
      <div id="state" className="custom-dropdown" onClick={() => setShowStates(!showStates)}>
        {stateText}
        {showStates && (
          <ul className="dropdown-options">
            {states.map((s, i) => (
              <li key={i} onClick={() => { setSelectedState(s); setStateText(s); setShowStates(false); }}>{s}</li>
            ))}
          </ul>
        )}
      </div>

      <div id="city" className="custom-dropdown" onClick={() => setShowCities(!showCities)}>
        {cityText}
        {showCities && (
          <ul className="dropdown-options">
            {cities.map((c, i) => (
              <li key={i} onClick={() => { setSelectedCity(c); setCityText(c); setShowCities(false); }}>{c}</li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" id="searchBtn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;