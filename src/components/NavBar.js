import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navlist">
        <li className="navlistitem">
          <Link to="/">Employees</Link>
        </li>
        <li className="navlistitem">
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
