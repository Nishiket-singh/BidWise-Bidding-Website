import React from 'react'
import "./SignIn.css"
import {Link} from "react-router-dom"

function SignIn(){

    return <div className='container'> 

    <h1 >Sign In</h1>
    <form>
   
    <input name="name" type="text" placeholder='Enter Name'></input>
    
    <input name="password" type="password" placeholder='Enter Password'></input>
   <Link  exact to="/Catalogue"><button> Sign In</button>  </Link>


    </form>
    
    
    </div>





}






export default SignIn;