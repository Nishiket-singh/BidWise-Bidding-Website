
import React from 'react'

import "./Contact.css"

function Contact(){

    return<div><h1>Get In Touch</h1> 


    <form className='Form-container'>
   
   <input name="fname" type="text" placeholder='First Name'></input>

   <input name="lname" type="text" placeholder='Last Name'></input>

   <input name="Address" type="text" placeholder='Address'></input>

   <input name="PostalCode" type="text" placeholder='Postal Code'></input>

   <input name="City" type="text" placeholder='City'></input>

   <input name="Country" type="text" placeholder='Country'></input>

   <button>Start Your Bidding Journey</button>

   </form>

   </div>


}


export default Contact;
