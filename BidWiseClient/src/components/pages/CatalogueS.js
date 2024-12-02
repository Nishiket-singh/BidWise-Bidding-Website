

import React, { useState, useEffect } from "react";
import "./css/CatalogueS.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import discImg from "./disc-img.jpeg"

function CatalogueS() {
  const a = {
    name: "Fleetwood Mac - Rumours (1st Edition)",
    currentPrice: 500,
    image: "",
    auctionType: "Forward",
    remaningTime: "10h:48m:34s",
  };

  const [items, setItems] = useState([a, a, a, a]);
  const [searchItem, setSearchItem] = useState('');
  const [selectedItem, setSelectedItem] = useState({ type: "", id: 0, time: 0 });
  const history = useHistory();

  const address1 = "http://localhost:8080";
  const address2 = "https://ecombackendapi.onrender.com";

  function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
      }
  
  // Get the authentication token from the cookie
  const authKey = getCookie('authToken');

  const getProducts = async () => {
    try {
      const response = await axios.get(address1 + "/products/allproducts");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchedProducts = async (keyw) => {
    console.log(keyw)
    try {
      const response = await axios.get(address1 + `/products/searchproducts?keyword=${keyw}`);
      setItems(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
    getSearchedProducts(event.target.value);
  };

  const handleRadioClick = (event) => {
    const { id, value, time } = event.target;
    setSelectedItem({ type: value, id, time });
  };

  const handleBidClick = () => {
    if (!authKey) {
      // Redirect to sign-in page if the user is not authenticated
      history.push("/signin");
      return;
    }
    const path = selectedItem.type === "Forward" ? "/ForwardAuction" : "/DutchAuction";
    console.log(path)
    console.log(selectedItem)

    history.push({
      pathname: path,
      state: { productid: selectedItem.id, time: selectedItem.time , authKey: authKey, },
     
    });
  };

  return (
    <div className="catalogue-container">
      <input
        className="searchInput"
        type="search"
        placeholder="Search for an item"
        value={searchItem}
        onChange={handleSearch}
      />
      <div className="product-list">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={discImg} alt={item.name} className="product-image-img" />
            </div>
            <div className="product-info">
              <h2 className="product-name">{item.name}</h2>
              <p><strong>Price:</strong> {item.currentPrice}$</p>
              <p><strong>Auction Type:</strong> {item.auctionType}</p>
              <p><strong>Time Left:</strong> {item.remaningTime}</p>
            </div>
            <div className="auction-selection">
              <input
                type="radio"
                id={item.id}
                value={item.auctionType}
                time={item.remaningTime}
                onChange={handleRadioClick}
                className="auction-radio"
              />
            </div>
          </div>
        ))}
      </div>
      <button className="bid-button" onClick={handleBidClick}>
        Bid
      </button>
    </div>
  );
}

export default CatalogueS;



// import React, { useState, useEffect } from "react";
// import "./css/CatalogueS.css";
// import axios from "axios";
// import { Link, useHistory, useLocation } from "react-router-dom";

// function CatalogueS() {
//   const a = {
//     name: "Fleetwood Mac - Rumours (1st Edition)",
//     currentPrice: 500,
//     image:"",
//     auctionType: "Forward",
//     remaningTime: "10h:48m:34s",
//   };
//   // [a, a, a, a]

//   function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//     return null;
//   }

//   const [items, setItems] = useState([a, a, a, a]);
//   const [searchItem, setSearchItem] = useState('');
  
//   const [selectedItem, setSelectedItem] = useState({ type: "", id: 0, time:0 });
//   const history = useHistory();
//   const Location = useLocation();
//   let authKey = getCookie('authToken');
//   const address1="http://localhost:8080"
//   const address2="https://ecombackendapi.onrender.com"


//   console.log(authKey);

//   const reloadPage = () => {
//     window.location.reload();
//   };

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axios.get(
//           address1+"/products/allproducts"
//         );
//         console.log(response.data);

//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // Call the async function
//     getProducts();

//      // Reload the page every 2 minutes
//      const intervalId = setInterval(reloadPage, 120000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   // }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

//   const getSearchedProducts = async (keyw) => {
//     console.log(keyw);
//     try {
//       const response = await axios.get(
//         address1+`/products/searchproducts?keyword=${keyw}`,
//         {}
//       );
//       console.log(response.data);

//       setItems(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   function searchUsingKeyword(keyword) {
//     console.log("I was called");
//     console.log(keyword);

//     getSearchedProducts(keyword);
//   }

//   function handleRadioClick(event) {
//     let pid = event.target.id;
//     let atype = event.target.value;

//     let timerem = event.target.getAttribute("time");
//     console.log(timerem);
//     console.log(atype);
//     console.log(pid);
//     setSelectedItem({ type: atype, id: pid, time: timerem });
//   }
//   function handleBidClick() {
//     selectedItem.type === "Forward"
//       ? history.push({
//           pathname: "/ForwardAuction",
//           state: { productid: selectedItem.id, time: selectedItem.time },

//           authKey: authKey,
//           //'ada7dbd4-18f0-4167-af7b-751f3bc5e706'
//         })
//       : history.push({
//           pathname: "/DutchAuction",
//           state: { productid: selectedItem.id, time: selectedItem.time },
//           authKey: authKey,
//           // 'ada7dbd4-18f0-4167-af7b-751f3bc5e706'
//           // 'b5eccb4c-2982-4d6d-807b-2270ecff6d25'
//         });
//   }

//   function handleSearch(event) {
//     let k = event.target.value;
//     console.log(k);
//     setSearchItem(k);
//     searchUsingKeyword(k);
//   }

//   return (
//     <div className="head">
//       {/*  */}

//       <input
//         name="searchbar"
//         type="search"
//         placeholder="Search for an item"
//         onChange={handleSearch}
//         value={searchItem}
//         className="searchButton"
//       ></input>

//       {/* can remove index once api provide unique id for each product */}
//       {items.map((item) => (
//         <div className="mainContainercat">
//           {/* need to make change key={item.id} */}
//           <div key={item.id} className="PhotoAndHighBidInfocat">
//             <img className="forward_itemcat" alt="" src={item.imageurl} />
//           </div>

//           <div className="ItemInfocat">
//             <h1 className="hcsscat">{item.name}</h1>
//             <div className="items">
//               <p>
//                 <strong>Price:</strong> {item.currentPrice}$
//               </p>
//               <p>
//                 <strong>Auction Type:</strong> {item.auctionType}
//               </p>
//               <p>
//                 <strong>Time Left:</strong> {item.remaningTime}
//               </p>
//             </div>
//           </div>

//           <input
//             onChange={handleRadioClick}
//             id={item.id}
//             value={item.auctionType}
//             time={item.remaningTime}
//             className="radioo"
//             type="radio"
//           />
//         </div>
//       ))}

//       <button className="bidbut" onClick={handleBidClick}>
//         Bid
//       </button>
//     </div>
//   );
// }

// export default CatalogueS;


