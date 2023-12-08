import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
        "https://bidd-caim.onrender.com/user/signin",
        {
          email: name,
          password: password,
        }
      );
      console.log(response.data);
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

  function redirect(e) {
    console.log(e);
    console.log(e.token);
    if (e.status === "sucess") {
      history.push({
        pathname: "/Catalogue",

        authKey: e.token,
      });
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
      </form>
    </div>
  );
}

export default SignIn;
