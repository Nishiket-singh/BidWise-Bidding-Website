import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';
import "./CheckoutForm.css"

const CheckoutForm = () => {
  return (
    <form className='paymentForm'>
      <PaymentElement />
      <button className='payment_button'>PAY NOW</button>
    </form>
  );
};

export default CheckoutForm;