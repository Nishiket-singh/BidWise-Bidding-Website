import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div classname="homepage-container">
      <div className="header">
        <Link to="/" className="navbar-logo" style={{ textDecoration: "none" }}>
          {" "}
          <h1 style={{ color: "white" }}>BidWise</h1>{" "}
        </Link>

        <h1>Welcome to Most Amazing Auction Site Ever</h1>
        <Link exact to="/SignUp">
          {" "}
          <button>Sign Up</button>{" "}
        </Link>

        <Link exact to="/SignIn">
          {" "}
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
