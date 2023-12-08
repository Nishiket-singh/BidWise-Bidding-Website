import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [StreetAddress, setStreetAddress] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const history = useHistory();

  function handleSignUp(e) {
    e.preventDefault();
    console.log(e.target);
    console.log("I got clicked");
    verify();
  }

  function redirect(e) {
    console.log(e);
    e.status === "success"
      ? history.push({
          pathname: "/SignIn",
        })
      : alert(e.message);
  }

  function handleFnameChange(e) {
    const k = e.target.value;
    console.log(k);
    setFname(k);
  }

  function handleLnameChange(e) {
    const k = e.target.value;
    console.log(k);
    setLname(k);
  }

  function handleEmailChange(e) {
    const k = e.target.value;
    console.log(k);
    setEmail(k);
  }

  function handleStreetAddressChange(e) {
    const k = e.target.value;
    console.log(k);
    setStreetAddress(k);
  }

  function handlePostalCodeChange(e) {
    const k = e.target.value;
    console.log(k);
    setPostalCode(k);
  }

  function handleCityChange(e) {
    const k = e.target.value;
    console.log(k);
    setCity(k);
  }

  function handleCountryChange(e) {
    const k = e.target.value;
    console.log(k);
    setCountry(k);
  }
  function handlePasswordChange(e) {
    const k = e.target.value;
    console.log(k);
    setPassword(k);
  }

  function handleCpasswordChange(e) {
    const k = e.target.value;
    console.log(k);
    setCpassword(k);
  }

  const verify = async () => {
    try {
      const response = await axios.post(
        "https://bidd-caim.onrender.com/user/signup",
        {
          firstname: fname,
          password: password,
          lastname: lname,
          email: email,
          streetaddress: StreetAddress,
          postalcode: PostalCode,
          city: City,
          country: Country,
        }
      );
      console.log(response.data);
      redirect(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="SignUp-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          name="fname"
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={handleFnameChange}
        />

        <input
          name="lname"
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={handleLnameChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          name="StreetAddress"
          type="text"
          placeholder="Address"
          value={StreetAddress}
          onChange={handleStreetAddressChange}
        />

        <input
          name="PostalCode"
          type="text"
          placeholder="Postal Code"
          value={PostalCode}
          onChange={handlePostalCodeChange}
        />

        <input
          name="City"
          type="text"
          placeholder="City"
          value={City}
          onChange={handleCityChange}
        />

        <input
          name="Country"
          type="text"
          placeholder="Country"
          value={Country}
          onChange={handleCountryChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input
          name="cpassword"
          type="password"
          placeholder="Confirm Password"
          value={cpassword}
          onChange={handleCpasswordChange}
        />
        <button type="submit" onClick={handleSignUp}>
          {" "}
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
