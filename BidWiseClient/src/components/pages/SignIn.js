import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/SignIn.css";
import { Link, useHistory } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const address1="http://localhost:8080"
  const address2="https://ecombackendapi.onrender.com"

  function handleNameChange(e) {
    const k = e.target.value;
    console.log(k);
    setName(k);
  }

  function handlePassChange(e) {
    const k = e.target.value;
    console.log(k);
    setPassword(k);
  }

  const verify = async () => {
    try {
      const response = await axios.post(
        address1+"/user/signin",
        {
          email: name,
          password: password,
        }
      );
      console.log(response.data);
      const isSecure = window.location.protocol === 'https:';
      document.cookie = `authToken=${response.data.token}; path=/; ${isSecure ? 'secure;' : ''}`;
      console.log(getCookie('authToken'))
      redirect(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleSignIn(e) {
    e.preventDefault();
    console.log(e.target);
    console.log("I got clicked");
    verify();
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  function redirect(e) {
    console.log(e);
    console.log(e.token);
    if (e.status === "sucess") {
      console.log(getCookie('authToken'));
      history.push({
        pathname: "/Catalogue",
        authKey: getCookie('authToken'),
      });
     
      // Refresh the page to reinitialize the app
      window.location.reload();

    } else if (e.status === "Try Again") {
      alert(`${e.token}`);
    }
  }
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          name="name"
          type="text"
          placeholder="Enter Email"
          value={name}
          onChange={handleNameChange}
        ></input>

        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePassChange}
        ></input>
        <button type="submit" onClick={handleSignIn}>
          {" "}
          Sign In
        </button>
        <p> New User? <Link to="/SignUp" className="signUpLink">Sign Up here </Link></p>
      </form>
    </div>
  );
}

export default SignIn;
