import React, { Component } from 'react';

 const SearchBar = (props) =>  {
        return (
            <div>
                <p>Search Bar</p>
                <input 
                    type='text'
                    value={props.search}
                    onChange={props.handleSearch}
                />
            </div>
        );
};

export default SearchBar;    
