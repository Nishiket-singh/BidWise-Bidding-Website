import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/DutchAuction.css";
import itemImg from "./disc-img.jpeg"
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
  const address1 = "http://localhost:8080";
  const address2 = "https://ecombackendapi.onrender.com";

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  const Location = useLocation();
  const history = useHistory();
  //pid from auction page use this when making api call
  const pid = Location.state.productid;
  const authKey = getCookie('authToken');
  console.log(authKey);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          address1+`/bidding/productdetails?productid=${pid}`
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
        address1+`/bidding/dutchbid?productid=${pid}`,
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
      <div className="mainContainer">
          <div className="PhotoAndPriceInfo">
              <img className="dutch_item" alt="" src={itemImg} />
          </div>

          <div className="dutch_container">
              <h4>
                  {auctionInfo.itemname} 
              </h4>
              <br />
              <p>{auctionInfo.itemdesc}</p>
              <br />
              <span>
                  <b>Current Price: </b>
              </span>
              <span className="price">${auctionInfo.currentprice}</span>
              <br />
              <span>
                  <b>Buyer: </b>
              </span>
              <span className="buyer">
                  {auctionInfo.buyer || "None"}
              </span>
              <br />
              <br />
              <button onClick={handleBidClick} className="button">
                  Buy Now
              </button>
              <br />
              <br />
              
          </div>
      </div>
  );
}
export default DutchAuction;