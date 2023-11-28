import React, { useState } from "react";
import "./ReceiptPage.css";
import { Link } from "react-router-dom";

function ReceiptPage() {
  const [winner, setWinner] = useState({
    fName: "Jack",
    lName: "Ryan",
    address: "31 Provost Drive",
    province: "ON",
    country: "Canada",
    postalCode: "M2J6F4",
    totalPaid: 799,
    itemId: "AB9724",
  });

  return (
    <div className="receiptInfo">
      <div classname="Receipt">
        <ul classname="listd" style={{ listStyleType: "none" }}>
          <h1>Receipt</h1>

          <li>
            <strong>First Name : </strong> {winner.fName}{" "}
          </li>
          <li>
            <strong>Last Name: </strong> {winner.lName}{" "}
          </li>
          <li>
            <strong>Address: </strong> {winner.address}{" "}
          </li>
          <li>
            <strong> Province: </strong> {winner.province}{" "}
          </li>
          <li>
            <strong> Country: </strong> {winner.country}{" "}
          </li>
          <li>
            <strong> Postal Code: </strong> {winner.postalCode}{" "}
          </li>
          <li>
            <strong> Total Paid: </strong> {winner.totalPaid} ${" "}
          </li>
          <li>
            <strong> Item Id: </strong> {winner.itemId}{" "}
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
