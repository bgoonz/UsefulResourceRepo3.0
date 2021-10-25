import React from 'react';

const SearchBar = props => {

  return(
    <div>
      <input name="search" placeholder="search..." onChange={props.handleChange} />
      <button onClick={props.handleSearch}>Search</button>
    </div>    
  );
};

export default SearchBar;