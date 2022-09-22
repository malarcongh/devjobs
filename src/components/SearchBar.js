import React from "react";
import searchIcon from '../assets/icon-search.svg';
import locationIcon from '../assets/icon-location.svg';

function SearchBar() {
  return (
    <form className="search-bar">
      <div className="input-container search-input-container">
        <span>
          <img src={searchIcon} alt=""/>
        </span>
        <input type="text" placeholder="Filter by title, companies, expertise"/>
      </div>
      <div className="input-container location-input-container">
        <span>
          <img src={locationIcon} alt=""/>
        </span>
        <input type="text" placeholder="Filter by location..."/>
      </div>
      <div className="input-container">
        <input type="checkbox" id="id1" />
        <label htmlFor="id1">Full Time Only</label>
      </div>
      <button>Search</button>
    </form>
  )
}

export default SearchBar;