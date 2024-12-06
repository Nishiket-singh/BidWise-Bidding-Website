
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/navbar.css";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function Navbar() {

  const [isSignedIn, setIsSignedIn] = useState(false); // State to track if the user is signed in
  const history = useHistory();

  useEffect(() => {
    const authKey = getCookie('authToken'); // Retrieve the auth token from cookies
    setIsSignedIn(!!authKey); // If token exists, user is signed in
  }, []);

  const handleLogout = () => {
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 2025 00:00:00 UTC"; // Clear the cookie
    setIsSignedIn(false);
    history.push("/"); // Redirect to home or login page after logout
  };


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
      <div>
      {isSignedIn ? (
          <button onClick={handleLogout} className="logout">Logout</button>
        ) : (
          <Link to="/SignIn" className="signLink">Sign In</Link>
        )}
        </div>
      {/* <div><Link to="/SignIn" className="signLink">Sign In</Link></div> */}
    </div>
  );
}

export default Navbar;

{/* <div className="navbar-svg">
<img src="./darkmode.svg" alt="SVG Logo" className="navbar-svg-icon" />
</div> */}