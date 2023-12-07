import React, { useState, useEffect } from "react";
import "./ReceiptPage.css";
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

  useEffect(() => {
    const getReceipt = async () => {
      try {
        const response = await axios.get(
          `https://bidd-caim.onrender.com/payment/receiptdetails`
        );
        console.log(response.data);
        setReceipt(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    getReceipt();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="receiptInfo">
      <div classname="Receipt">
        <ul classname="listd" style={{ listStyleType: "none" }}>
          <h1>Receipt</h1>

          <li>
            <strong>First Name : </strong> {receipt.firstname}{" "}
          </li>
          <li>
            <strong>Last Name: </strong> {receipt.lastname}{" "}
          </li>
          <li>
            <strong>Address: </strong> {receipt.streetaddress}{" "}
          </li>
          <li>
            <strong> City: </strong> {receipt.city}{" "}
          </li>
          <li>
            <strong> Country: </strong> {receipt.country}{" "}
          </li>
          <li>
            <strong> Postal Code: </strong> {receipt.postalcode}{" "}
          </li>
          <li>
            <strong> Total Paid: </strong> ${receipt.total}{" "}
          </li>
          <li>
            <strong> Product Name: </strong> {receipt.productname}{" "}
          </li>
        </ul>
      </div>
      <div className="vl"> </div>

      <div className="Shipping">
        <h1>Shipping Details</h1>
        <p>The item will be shipped in 5 business days...</p>

        <Link exact to="/">
          {" "}
          <button className="Home-button">Back to Main Page</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default ReceiptPage;
