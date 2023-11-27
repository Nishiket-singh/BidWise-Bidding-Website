import React, {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';
import "./DutchAuction.css"
import axios from "axios"
import { Link,  useHistory } from "react-router-dom"

function DutchAuction() {


    const [auctionInfo, setAuctionInfo]= useState({
        shoppingPrice: 5,
        currentPrice: 500,
        name: "Elvis Presley - Moody Blue",
        description: "Transport yourself back to the roots of Fleetwood Mac with this authentic, used copy of 'Then Play On' on vinyl. Originally released in 1969, this album captures the band in their early blues rock phase, showcasing their raw talent and creativity.",
        condition: "This vintage vinyl record is in good condition, providing a genuine glimpse into the sonic landscape of Fleetwood Mac's formative years. The sleeve may exhibit some signs of wear, but the vinyl itself has been well-preserved.",
        totaltime:500,
        auctiontype:"kk",
        initialprice:400
    });

    const Location = useLocation();
    const history = useHistory();
    //pid from auction page use this when making api call
    const pid= Location.state.productId;

    useEffect(() => {
      const getItem = async () => {
        try {
          
            const response = await axios.get(`http://localhost:8080/bidding/productdetails`, {body:{reqbody:pid}});
            console.log(response.data);
  
          setAuctionInfo(response.data);
         
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      // Call the async function
      getItem();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  

function handleBidClick(){
  
    history.push({
        pathname: '/BiddingEnd',
        state: { productId: auctionInfo.id },
      })
      

    




}











    return (<div className="mainContainerdutch">
        <div className="PhotoAndHighBidInfodutch">
            <img className="forward_itemdutch" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8dhgHvffCJbPYCmS1PoghXcmR7jKOEPMZw&usqp=CAU"></img>
            <h1> Shopping Price: {auctionInfo.initialprice}$</h1>
            <h1>Current Price: {auctionInfo.initialprice}$</h1>


        </div>

        <div className="ItemInfodutch">
            <h1 className="hcss" > {auctionInfo.name}</h1>
            <p className="pcss"> <strong classname="colorblkdutch">Item Description:</strong> {auctionInfo.description}</p>

            <p className="pcss"><strong classname="colorblkdutch">Condition:</strong>{auctionInfo.description} </p>

             <button className="biddsdutch" onClick={handleBidClick} style={{ marginTop: "0px" }}>Buy</button>

        </div>

    </div>



    )





}



export default DutchAuction;



{/* <Link exact to="/BiddingEnd"></Link> */}