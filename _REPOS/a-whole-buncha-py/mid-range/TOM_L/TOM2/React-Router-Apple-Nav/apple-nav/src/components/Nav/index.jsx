import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Nav = props => {
  return(
    <Link to={props.link.name} key={Math.random()}>
    {props.link.name}
  </Link>
  );
};

// setup the proptype structure first
Nav.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string
  })
};
export default Nav;