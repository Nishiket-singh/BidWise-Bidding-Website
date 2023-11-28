import React, { useState } from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import "./Payment.css"

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_A7jK4iCYHL045qgjjfzAfPxu');

const [winner,setWinner]=useState({});

function Payment() {
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    // Fully customizable with appearance API.
    appearance: {theme: 'night',
    labels: 'floating'},

  };
  

  return (
  

    

  <div className="base"> 

  <div className="for">
  <h1>Winner Details</h1>
<p><strong>First Name:</strong> {winner.fname} </p>
<p><strong> Last name:</strong> Jacobs</p>
<p><strong>Address:</strong> 39 Beryl Road</p>
<p><strong>PostalCode:</strong> M3J1B4</p>
<p><strong>Province:</strong> ON</p>
<p><strong>Country:</strong> Canada</p>
<p><strong>Total Cost:</strong> 589$</p>



</div>

    
    <Elements stripe={stripePromise} options={options}>
      <div className="Winner">  

      
       </div>
      <CheckoutForm />
    </Elements>
    </div>
   
  );
};

export default Payment;






