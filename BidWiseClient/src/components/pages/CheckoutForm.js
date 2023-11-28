import React from "react";
import axios from "axios";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    // Create the PaymentMethod using the details collected by the Payment Element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      elements,
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // creating the PaymentMethod. Show the error to your customer (for example, payment details incomplete)
      alert("BITCH You Broke!!!!");
      return;
    }

    // Create the PaymentIntent
    try {
      const response = await axios.get(
        `http://localhost:8080/payment/makepayment`,
        { paymentMethodId: paymentMethod.id }
      );
      console.log(response.data);
      if (response.data.status == "Success") {
      } else {
        alert("BITCH YOU Broke!!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // Handle any next actions or errors. See the Handle any next actions step for implementation.
    // handleServerResponse(data);
  };

  return (
    <form className="paymentForm" onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="payment_button">PAY NOW</button>
    </form>
  );
};

export default CheckoutForm;
