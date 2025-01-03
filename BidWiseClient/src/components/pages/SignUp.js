
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./css/SignUp.css";

const address1 = "http://localhost:8080";
const address2 = "https://ecombackendapi.onrender.com";

function SignUp() {
  const [formData, setFormData] = useState({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  cpassword: "",
  streetaddress: "",
  postalcode: "",
  city: "",
  country: ""
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const verify = async () => {
    try {
      const response = await axios.post(`${address1}/user/signup`, formData);
      redirect(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    verify();
  };

  const redirect = (data) => {
    if (data.status === "success") {
      history.push("/SignIn");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="SignUp-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
      {["firstname", "lastname", "email", "streetaddress", "postalcode", "city", "country"].map((field) => (
          <input
            key={field}
            name={field}
            type={field.includes("password") ? "password" : "text"}
            placeholder={field.replace(/([A-Z])/g, " $1").toUpperCase()}
            value={formData[field]}
            onChange={handleInputChange}
          />
        ))}
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          name="cpassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.cpassword}
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;






// import React, { useState } from "react";
// import axios from "axios";
// import "./css/SignUp.css";
// import { useHistory } from "react-router-dom";

// function SignUp() {
  
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCpassword] = useState("");
//   const [StreetAddress, setStreetAddress] = useState("");
//   const [PostalCode, setPostalCode] = useState("");
//   const [City, setCity] = useState("");
//   const [Country, setCountry] = useState("");
//   const history = useHistory();

//   const address1="http://localhost:8080"
//   const address2="https://ecombackendapi.onrender.com"

//   function handleSignUp(e) {
//     e.preventDefault();
//     console.log(e.target);
//     console.log("I got clicked");
//     verify();
//   }

//   function redirect(e) {
//     console.log(e);
//     e.status === "success"
//       ? history.push({
//           pathname: "/SignIn",
//         })
//       : alert(e.message);
//   }

//   function handleFnameChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setFname(k);
//   }

//   function handleLnameChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setLname(k);
//   }

//   function handleEmailChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setEmail(k);
//   }

//   function handleStreetAddressChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setStreetAddress(k);
//   }

//   function handlePostalCodeChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setPostalCode(k);
//   }

//   function handleCityChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setCity(k);
//   }

//   function handleCountryChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setCountry(k);
//   }
//   function handlePasswordChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setPassword(k);
//   }

//   function handleCpasswordChange(e) {
//     const k = e.target.value;
//     console.log(k);
//     setCpassword(k);
//   }

//   const verify = async () => {
//     try {
//       const response = await axios.post(
//         address1+"/user/signup",
//         {
//           firstname: fname,
//           password: password,
//           lastname: lname,
//           email: email,
//           streetaddress: StreetAddress,
//           postalcode: PostalCode,
//           city: City,
//           country: Country,
//         }
//       );
//       console.log(response.data);
//       redirect(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="SignUp-container">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSignUp}>
//         <input
//           name="fname"
//           type="text"
//           placeholder="First Name"
//           value={fname}
//           onChange={handleFnameChange}
//         />

//         <input
//           name="lname"
//           type="text"
//           placeholder="Last Name"
//           value={lname}
//           onChange={handleLnameChange}
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={handleEmailChange}
//         />

//         <input
//           name="StreetAddress"
//           type="text"
//           placeholder="Address"
//           value={StreetAddress}
//           onChange={handleStreetAddressChange}
//         />

//         <input
//           name="PostalCode"
//           type="text"
//           placeholder="Postal Code"
//           value={PostalCode}
//           onChange={handlePostalCodeChange}
//         />

//         <input
//           name="City"
//           type="text"
//           placeholder="City"
//           value={City}
//           onChange={handleCityChange}
//         />

//         <input
//           name="Country"
//           type="text"
//           placeholder="Country"
//           value={Country}
//           onChange={handleCountryChange}
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />

//         <input
//           name="cpassword"
//           type="password"
//           placeholder="Confirm Password"
//           value={cpassword}
//           onChange={handleCpasswordChange}
//         />
//         <button type="submit" onClick={handleSignUp}>
//           {" "}
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
