import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./css/Contact.css";

const address1 = "http://localhost:8080";
const address2 = "https://ecombackendapi.onrender.com";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = "First name is required.";
    if (!formData.lname) newErrors.lname = "Last name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.country) newErrors.country = "Country is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(`${address1}/contact/submit`, formData);
        redirect(response.data);
      } catch (error) {
        console.error("Error submitting the contact form:", error);
      }
    }
  };

  const redirect = (data) => {
    if (data.status === "success") {
      history.push("/ThankYou");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          
          <input
            placeholder="First Name"
            name="fname"
            id="fname"
            type="text"
            value={formData.fname}
            onChange={handleChange}
            aria-invalid={errors.fname ? "true" : "false"}
          />
          {errors.fname && <p role="alert" className="error">{errors.fname}</p>}
        </div>

        <div>
          
          <input
            placeholder="Last Name"
            name="lname"
            id="lname"
            type="text"
            value={formData.lname}
            onChange={handleChange}
            aria-invalid={errors.lname ? "true" : "false"}
          />
          {errors.lname && <p role="alert" className="error">{errors.lname}</p>}
        </div>

        <div>
          
          <input
            placeholder="Address"
            name="address"
            id="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            aria-invalid={errors.address ? "true" : "false"}
          />
          {errors.address && <p role="alert" className="error">{errors.address}</p>}
        </div>

        <div>
          
          <input
            placeholder="Postal Code"
            name="postalCode"
            id="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={handleChange}
            aria-invalid={errors.postalCode ? "true" : "false"}
          />
          {errors.postalCode && <p role="alert" className="error">{errors.postalCode}</p>}
        </div>

        <div>
         
          <input
            placeholder="City"
            name="city"
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            aria-invalid={errors.city ? "true" : "false"}
          />
          {errors.city && <p role="alert" className="error">{errors.city}</p>}
        </div>

        <div>
          
          <input
            name="country"
            placeholder="Country"
            id="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            aria-invalid={errors.country ? "true" : "false"}
          />
          {errors.country && <p role="alert" className="error">{errors.country}</p>}
        </div>

        <button type="submit">Start Your Bidding Journey</button>
      </form>
    </div>
  );
}

export default Contact;