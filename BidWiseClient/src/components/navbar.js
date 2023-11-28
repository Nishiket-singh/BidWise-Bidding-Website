import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="nav-items">
          <Link
            to="/"
            exact
            className="nav-links"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/AboutUs"
            exact
            className="nav-links"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            About{" "}
          </Link>
          <Link
            to="/Contact"
            exact
            className="nav-links"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Contact Us{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
