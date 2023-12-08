import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DutchAuction.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function DutchAuction() {
  const [auctionInfo, setAuctionInfo] = useState({
    id: 0,
    itemshippingprice: 5,
    currentprice: 500,
    name: "Elvis Presley - Moody Blue",
    itemdesc:
      "Transport yourself back to the roots of Fleetwood Mac with this authentic, used copy of 'Then Play On' on vinyl. Originally released in 1969, this album captures the band in their early blues rock phase, showcasing their raw talent and creativity.",
    condition:
      "This vintage vinyl record is in good condition, providing a genuine glimpse into the sonic landscape of Fleetwood Mac's formative years. The sleeve may exhibit some signs of wear, but the vinyl itself has been well-preserved.",
    totaltime: 500,
    auctiontype: "kk",
    initialprice: 400,
  });

  const Location = useLocation();
  const history = useHistory();
  //pid from auction page use this when making api call
  const pid = Location.state.productid;
  const authKey = String(Location.authKey);
  console.log(authKey);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          `https://bidd-caim.onrender.com/bidding/productdetails?productid=${pid}`
        );
        console.log(response.data);

        setAuctionInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    getItem();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const verify = async () => {
    console.log(authKey);
    try {
      const response2 = await axios.post(
        `https://bidd-caim.onrender.com/bidding/dutchbid?productid=${pid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authKey}`, // Include the token in the Authorization header
          },
        }
      );
      console.log(response2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleBidClick(e) {
    console.log(e.target);
    console.log("I got clicked");
    verify();

    history.push({
      pathname: "/BiddingEnd",
      state: { productid: pid },
      authKey: authKey,
    });
  }

  return (
    <div className="mainContainerdutch">
      <div className="PhotoAndHighBidInfodutch">
        <img
          className="forward_itemdutch"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8dhgHvffCJbPYCmS1PoghXcmR7jKOEPMZw&usqp=CAU"
        ></img>
        <h1> Shipping Price: {auctionInfo.itemshippingprice}$</h1>
        <h1>Current Price: {auctionInfo.currentprice}$</h1>
      </div>

      <div className="ItemInfodutch">
        <h1 className="hcss"> {auctionInfo.itemname}</h1>
        <p className="pcss">
          {" "}
          <strong classname="colorblkdutch">Item Description:</strong>{" "}
          {auctionInfo.itemdesc}
        </p>

        <p className="pcss">
          <strong classname="colorblkdutch">Condition:</strong>
          {auctionInfo.itemdesc}{" "}
        </p>

        <button
          className="biddsdutch"
          onClick={handleBidClick}
          style={{ marginTop: "0px" }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default DutchAuction;

{
  /* <Link exact to="/BiddingEnd"></Link> */
}
