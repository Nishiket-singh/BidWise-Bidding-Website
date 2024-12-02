import React, { useState, useEffect } from "react";
import "./css/ReceiptPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ReceiptPage() {
  const [receipt, setReceipt] = useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    city: "",
    country: "",
    postalcode: "",
    total: 0,
    productname: "",
  });

  const address1 = "http://localhost:8080";
  const address2 = "https://ecombackendapi.onrender.com";

  useEffect(() => {
    const getReceipt = async () => {
      try {
        const response = await axios.get(address1 + `/payment/receiptdetails`);
        console.log(response.data)
        setReceipt(response.data);
      } catch (error) {
        console.error("Error fetching receipt data:", error);
      }
    };

    getReceipt();
  }, []);

  return (
    <div className="receipt-container">
      <div className="receipt-card">
        <h1 className="receipt-title">Receipt</h1>
        <ul className="receipt-details">
          <li>
            <strong>First Name:</strong> {receipt.firstname}
          </li>
          <li>
            <strong>Last Name:</strong> {receipt.lastname}
          </li>
          <li>
            <strong>Address:</strong> {receipt.streetaddress}
          </li>
          <li>
            <strong>City:</strong> {receipt.city}
          </li>
          <li>
            <strong>Country:</strong> {receipt.country}
          </li>
          <li>
            <strong>Postal Code:</strong> {receipt.postalcode}
          </li>
          <li>
            <strong>Total Paid:</strong> ${receipt.total}
          </li>
          <li>
            <strong>Product Name:</strong> {receipt.productname}
          </li>
        </ul>
      </div>
      <div className="shipping-card">
        <h1 className="shipping-title">Shipping Details</h1>
        <p>The item will be shipped within 5 business days...</p>
        <Link to="/">
          <button className="home-button">Back to Main Page</button>
        </Link>
      </div>
    </div>
  );
}

export default ReceiptPage;