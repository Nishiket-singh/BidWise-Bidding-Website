import React, { useState } from "react";
import "./css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          name="fname"
          type="text"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          name="lname"
          type="text"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          name="country"
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <button type="submit">Start Your Bidding Journey</button>
      </form>
    </div>
  );
}

export default Contact;


