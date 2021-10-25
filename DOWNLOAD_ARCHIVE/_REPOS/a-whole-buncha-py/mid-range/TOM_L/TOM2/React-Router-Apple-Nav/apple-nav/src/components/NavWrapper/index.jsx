import React from 'react'
import PropTypes from 'prop-types';
import Nav from '../Nav';

const NavWrapper = props => {
  return (
    <div className="nav-wrapper-wrapper">
      <div className="nav-wrapper">
        <img src='images/apple.svg' alt="apple" />
        {props.links.map((link, index)=> (
          <Nav key={index} link={link} />
        ))}
        <a>Support</a>
        <img src='images/search.svg' alt="search" />
        <img src='images/bag.svg' alt="bag" />
      </div>
    </div>
  );
};

NavWrapper.propTypes = {
  links: PropTypes.object
}

export default NavWrapper;