import React from "react"
import "./DutchAuction.css"
import {Link} from "react-router-dom"

function DutchAuction(){

    return (  <div className="mainContainerdutch">  
         <div className="PhotoAndHighBidInfodutch">
        <img className="forward_itemdutch" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8dhgHvffCJbPYCmS1PoghXcmR7jKOEPMZw&usqp=CAU"></img>
              <h1> Shopping Price:  $5.00</h1>
        <h1>Current Price: 500$</h1>
        

</div>

<div className="ItemInfodutch"> 
<h1 className="hcss" > Elvis Presley - Moody Blue</h1>
<p className="pcss"> <strong classname="colorblkdutch">Item Description:</strong> Transport yourself back to the roots of Fleetwood Mac with this
                authentic, used copy of "Then Play On" on vinyl. Originally
                released in 1969, this album captures the band in their early
                blues rock phase, showcasing their raw talent and creativity.</p>

<p className="pcss"><strong classname="colorblkdutch">Condition:</strong> This vintage vinyl record is in good condition, providing a
              genuine glimpse into the sonic landscape of Fleetwood Mac's
              formative years. The sleeve may exhibit some signs of wear, but
              the vinyl itself has been well-preserved.</p>

           




<Link exact to="/BiddingEnd"><button className="biddsdutch" style={{marginTop:"0px"}}>Buy</button></Link>




</div>
    
    
    
    
    
    
    
    
    </div>



    )





}



export default DutchAuction;