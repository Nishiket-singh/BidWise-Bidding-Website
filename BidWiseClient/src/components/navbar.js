import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <h1>BidWise</h1>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/about" className="nav-links">About Us</Link>
        <Link to="/contact" className="nav-links">Contact Us</Link>
      </div>
      <div><Link to="/SignIn" className="signLink">Sign In</Link></div>
    </div>
  );
}

export default Navbar;

{/* <div className="navbar-svg">
<img src="./darkmode.svg" alt="SVG Logo" className="navbar-svg-icon" />
</div> */}