import React from 'react'
import "./SignUp.css"
import {Link} from "react-router-dom"

function SignUp(){

    return <div className='SignUp-container'> 

    <h1 >Sign Up</h1>
    <form className='Form-container'>
   
    <input name="fname" type="text" placeholder='First Name'></input>

    <input name="lname" type="text" placeholder='Last Name'></input>

    <input name="Address" type="text" placeholder='Address'></input>

    <input name="PostalCode" type="text" placeholder='Postal Code'></input>

    <input name="City" type="text" placeholder='City'></input>

    <input name="Country" type="text" placeholder='Country'></input>

    
    <input name="password" type="password" placeholder='Enter Password'></input>

    <input name="password" type="password" placeholder='Confirm Password'></input>






   <Link exact to="/SignIn" > <button> Sign Up</button> </Link>


    </form>
    
    
    </div>





}






export default SignUp;