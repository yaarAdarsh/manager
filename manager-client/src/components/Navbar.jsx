import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
        <li>
          </li>
          <li>
            <Link to="/weekly-planner">Weekly Planner</Link>
          </li>
          <li>
            <Link to="/important-date">Important Date</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/login" style={{color: "yellow"}}>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;