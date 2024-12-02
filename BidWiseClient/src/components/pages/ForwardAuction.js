import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import "./css/ForwardAuction.css";
import discImg from "./disc-img.jpeg"


function ForwardAuction() {
  const [auctionInfo, setAuctionInfo] = useState({
    id: 2,
    itemname: "Macwood",
    itemdesc:
      "Dive into the rich sounds of Fleetwood Mac with this authentic, used copy of the iconic 'Rumours' on vinyl. Released in 1977,this album has become a cornerstone of classic rock, featuring hits that have left an indelible mark on music history.",
    condition:
      "This vintage vinyl record is in good condition, preserving the warmth and authenticity of the original sound. While the cover and sleeve may show some signs of wear, the vinyl itself has been well cared for, ensuring an immersive and nostalgic listening experience.",
    initialprice: 400,
    itemshippingprice: 90,
    currentprice: 190,
    highestbidder: null,
    remainingtime: "00:10:00" // Example of initial time, should be updated dynamically
  });

  const address1 = "http://localhost:8080";
  const address2 = "https://ecombackendapi.onrender.com";

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  const [price, setPrice] = useState();
  const Location = useLocation();
  const history = useHistory();
  let pid = Location.state.productid;
  pid = parseInt(pid);
  const authKey = getCookie('authToken');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          address1 + `/bidding/productdetails?productid=${pid}`
        );
        console.log(response.data);
        setAuctionInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();
  }, []);




  // Timer functionality
  const [timeLeft, setTimeLeft] = useState(auctionInfo.remainingtime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const timeArray = timeLeft.split(":");
      let hours = parseInt(timeArray[0], 10);
      let minutes = parseInt(timeArray[1], 10);
      let seconds = parseInt(timeArray[2], 10);

      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        history.push({
          pathname: "/BiddingEnd",
          state: { productid: pid },
        });
      } else {
        if (seconds === 0) {
          if (minutes === 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }
        setTimeLeft(
          `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, history, pid]);

  function handlePrice(event) {
    setPrice(event.target.value);
  }

  const verify = async () => {
    try {
      const response2 = await axios.post(
        address1 + `/bidding/forwardbid?bidAmount=${price}&productid=${pid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authKey}`,
          },
        }
      );

      if (response2.data.status === "Failed") {
        alert("Wrong input! Try again.");
      }

      setAuctionInfo((prevValues) => {
        return {
          ...prevValues,
          currentprice: response2.data.currentprice,
          highestbidder: response2.data.highestbidder,
        };
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleBid() {
    verify();
  }

  return (
    <div className="mainContainer">
      <div className="PhotoAndHighBidInfo">
        <img
          className="forward_item"
          alt=""
          src={discImg}
        />
      </div>

      <div className="forward_container">
        <h4>
          {auctionInfo.itemname} 
        </h4>
        <br />
        <p>{auctionInfo.itemdesc}</p>
        <br />
        <span>
          <b>Price: </b>
        </span>
        <span className="price">${auctionInfo.currentprice}</span>
        <br />
        <span>
          <b>Highest Bidder: </b>
        </span>
        <span className="highestBidder">
          {auctionInfo.highestbidder || "None"}
        </span>
        <br />
        <br />
        <input
          type="number"
          value={price}
          onChange={handlePrice}
          placeholder="Enter your bid here"
        />
        <br />
        <br />
        <button onClick={handleBid} className="button">
          Place Bid
        </button>
        <br />
        <br />
        <div className="timer">
          <b>Remaining Time: </b>
          <span>{timeLeft}</span>
        </div>
      </div>
    </div>
  );
}

export default ForwardAuction;