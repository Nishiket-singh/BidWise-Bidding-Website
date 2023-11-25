import React, {useState} from 'react'
// import axios from "axios"
import "./SignIn.css"
import {Link} from "react-router-dom"

function SignIn(){

    const [form,setForm]= useState({
        name:'',
        password:'',
    });


    function handleChange(e){
        const [name, value]= e.target;
        setForm({...form, [name]:value});

    }
    function handleSignIn(){

        return 0;
    }



 
    return (<div className='container'> 

    <h1 >Sign In</h1>
    <form onSubmit={handleSignIn}>
   
    <input name="name" type="text" placeholder='Enter Name' value={form.name} onChange={handleChange}></input>
    
    <input name="password" type="password" placeholder='Enter Password' value={form.password} onChange={handleChange}></input>
   <Link  exact to="/Catalogue"><button type="submit"> Sign In</button>  </Link>


    </form>
    
    
    </div>

);



}






export default SignIn;