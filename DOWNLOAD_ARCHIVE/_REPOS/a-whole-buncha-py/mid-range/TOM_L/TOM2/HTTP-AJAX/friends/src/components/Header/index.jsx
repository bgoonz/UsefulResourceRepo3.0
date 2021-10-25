import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
// navigation in header
const Header = props => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/friends/add">Add friend</Link>
    </div>
  );
};

export default Header;
