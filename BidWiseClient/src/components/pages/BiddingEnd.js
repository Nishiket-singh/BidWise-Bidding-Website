import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BiddingEnd.css";
import { Link, useLocation, useHistory } from "react-router-dom";

function BiddingEnd() {
  const [itemInfo, setItemInfo] = useState({
    currentprice: 599.0,
    highestbidder: "James4020",
    itemname: "Fleetwood Mac - Rumours (1st Edition)",
    itemdesc:
      "Dive into the rich sounds of Fleetwood Mac with this authentic, used copy of the iconic 'Rumours' on vinyl. Released in 1977, this album has become a cornerstone of classic rock, featuring hits that have left an indelible mark on music history.",
    shipPrice: 5,
    expShip: 20,
  });

  const [rad, setRadio] = useState(0);

  const Location = useLocation();
  const history = useHistory();
  const pid = Location.state.productid;
  const authKey = String(Location.authKey);
  console.log(pid);
  console.log(authKey);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          https://bidd-caim.onrender.com/
          `https://bidd-caim.onrender.com/bidding/productdetails?productid=${pid}`
        );
        console.log(response.data);

        setItemInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    getItem();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  function handleExpShip() {
    setRadio(1);
    console.log(rad);
  }

  const verify = async () => {
    //console.log(authKey);
    try {
      const response2 = await axios.get(
        `https://bidd-caim.onrender.com/bidding/paynow?productid=${pid}&expediatedShipment=${rad}`,
        {
          headers: {
            Authorization: `Bearer ${authKey}`, // Include the token in the Authorization header
          },
        }
      );
      console.log(response2.data);
      if (response2.data.status == "Success") {
        history.push({
          pathname: "/Payment",
          state: { productid: pid },
          authKey: authKey,
        });
      } else {
        alert("BITCH YOU DINT BUY THIS!!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handlePay(e) {
    console.log(e.target);
    console.log("I got clicked");
    verify();
  }

  return (
    <div>
      <h1>Bidding End</h1>

      <div className="base">
        <div className="mainContainerbid">
          <div className="PhotoAndHighBidInfobid">
            <img
              className="forward_item"
              alt=""
              src="data:image/jpeg;base64,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"
            />
            <h1> Winning Price: ${itemInfo.currentprice}</h1>
            <h1>Highest Bidder: {itemInfo.highestbidder}</h1>
          </div>

          <div className="ItemInfobid">
            <h1 className="hcss"> {itemInfo.itemname}</h1>
            <p className="pcss">
              {" "}
              <strong classname="colorblkb`id">Item Description:</strong>{" "}
              {itemInfo.itemdesc}
            </p>

            <h1 className="hkbid">
              {" "}
              Shipping Price: ${itemInfo.itemshippingprice}
            </h1>
            <h1 className="hkbid">
              {" "}
              Add Expedited Shipping: ${itemInfo.expShip}{" "}
            </h1>

            <button
              className="biddsbid"
              onClick={handlePay}
              style={{ marginTop: "0px" }}
            >
              Pay Now
            </button>

            {/* <Link exact to="Payment"></Link> */}
          </div>
          <input
            className="radis"
            value={rad}
            onChange={handleExpShip}
            type="radio"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default BiddingEnd;
