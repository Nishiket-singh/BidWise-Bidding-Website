import React from "react"
import "./ReceiptPage.css"
import {Link} from "react-router-dom"


function ReceiptPage(){

    return(

        <div className="receiptInfo"> 

        <div classname="Receipt"> 
       <ul classname="listd"  style={{listStyleType:"none"}} >
       <h1>Receipt</h1>


       <li>First Name :    Jack </li>
       <li>Last Name:      Ryan </li>
       <li>Address:        31 Provost Drive </li>
       <li> Province:      ON</li>
       <li> Country:       Canada</li>
       <li> Postal Code:   M2J6F4 </li>
       <li>  Total Paid:   799$ </li>
       <li> Item Id:       AB9724 </li>


       </ul>

       </div>
       <div className="vl"> </div>


       <div className="Shipping"> 
       <h1>Shipping Details</h1>
       <p>The item will be shipped in 5 business days...</p>

       <Link exact to="/"> <button className="Home-button">Back to Main Page</button> </Link>

</div>


    
         </div>

    )

}

export default ReceiptPage;