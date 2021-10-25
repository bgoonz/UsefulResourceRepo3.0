import React, { Component } from 'react';

 const SearchBar = (props) =>  {
        return (
            <div className="Header">
              <i className="fa fa-instagram"></i> | Instagram <input type='text'value={props.search} onChange={props.handleSearch} />
            </div>
        );
};

export default SearchBar;
