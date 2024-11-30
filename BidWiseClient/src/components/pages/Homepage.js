import React from "react";
import { Link } from "react-router-dom";
import "./css/Homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="header">
        <h1>Welcome to the Most Amazing Auction Site Ever</h1>
        <div className="cta-buttons">
          <Link to="/SignUp">
            <button>Sign Up</button>
          </Link>
          <Link to="/SignIn">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;