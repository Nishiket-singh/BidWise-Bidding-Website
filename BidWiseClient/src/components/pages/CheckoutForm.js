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
  let clientSecret;

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log(submitError.message);
    }

    // Create the PaymentIntent
    try {
      const response = await axios.post(
        `http://localhost:8080/payment/makepayment`
      );
      console.log(response.data);
      clientSecret = response.data.message;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // Confirm the PaymentIntent using the details collected by the Payment Element
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://bidd-caim.onrender.com/ReceiptPage",
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      console.log(error.message);
    } else {
      // Your customer is redirected to your `return_url`
    }
  };

  return (
    <form className="paymentForm" onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="payment_button">PAY NOW</button>
    </form>
  );
};

export default CheckoutForm;
