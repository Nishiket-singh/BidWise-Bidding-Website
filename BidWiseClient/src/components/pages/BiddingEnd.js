import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./css/BiddingEnd.css";
import itemImg from "./disc-img.jpeg"

function BiddingEnd() {
  const [itemInfo, setItemInfo] = useState(null);
  const [isExpedited, setIsExpedited] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const pid = location.state?.productid;
  const authKey = location.authKey;
  const address1 = "http://localhost:8080";
  const address2 = "https://ecombackendapi.onrender.com";

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          address1+`/bidding/productdetails?productid=${pid}`
        );
        setItemInfo(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (pid) fetchItemDetails();
  }, [pid]);

  const handleExpeditedShipping = () => {
    setIsExpedited(true);
  };

  const handlePayment = async () => {
    try {
      const response = await axios.get(
        address1+`/bidding/paynow?productid=${pid}&expediatedShipment=${isExpedited ? 1 : 0}`,
        {
          headers: { Authorization: `Bearer ${authKey}` },
        }
      );

      if (response.data.status === "Success") {
        history.push({
          pathname: "/Payment",
          state: { productid: pid },
          authKey,
        });
      } else {
        alert("Payment unsuccessful. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  if (!itemInfo) {
    return <div>Loading item details...</div>;
  }

  return (
    <div className="bidding-end">
      <h1>Bidding End</h1>
      <div className="item-container">
        <div className="item-details">
          <img
            className="item-image"
            alt={itemInfo.itemname}
            src={itemImg}
          />
          <div>
            <h2>{itemInfo.itemname}</h2>
            <p>{itemInfo.itemdesc}</p>
            <p>
              Current Price: <strong>${itemInfo.currentprice}</strong>
            </p>
            <p>
              Highest Bidder: <strong>{itemInfo.highestbidder}</strong>
            </p>
          </div>
        </div>
        <div className="shipping-options">
          <h3>Shipping</h3>
          <label>
            <input
              type="radio"
              name="shipping"
              checked={!isExpedited}
              onChange={() => setIsExpedited(false)}
            />
            Standard Shipping: ${itemInfo.shipPrice}
          </label>
          <label>
            <input
              type="radio"
              name="shipping"
              checked={isExpedited}
              onChange={handleExpeditedShipping}
            />
            Expedited Shipping: ${itemInfo.expShip}
          </label>
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default BiddingEnd;