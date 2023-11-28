import React, { useState, useEffect } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import "./Payment.css";

import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_A7jK4iCYHL045qgjjfzAfPxu");

function Payment() {
  const [winner, setWinner] = useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postalcode: "",
    city: "",
    country: "",
    total: 0,
  });
  const Location = useLocation();
  const pid = Location.state.productid;

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/payment/userdetails?productid=${pid}`
        );
        console.log(response.data);
        setWinner(response.data);
        setAmount(winner.total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    getUserDetails();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const [amount, setAmount] = React.useState();

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    paymentMethodCreation: "manual",
    // Fully customizable with appearance API.
    appearance: { theme: "night", labels: "floating" },
  };

  return (
    <div className="base">
      <div className="for">
        <h1>Winner Details</h1>
        <p>
          <strong>First Name:</strong> {winner.firstname}{" "}
        </p>
        <p>
          <strong> Last Name:</strong> {winner.lastname}
        </p>
        <p>
          <strong>Address:</strong>
          {winner.streetaddress}
        </p>
        <p>
          <strong>PostalCode:</strong> {winner.postalcode}
        </p>
        <p>
          <strong>City:</strong>
          {winner.city}
        </p>
        <p>
          <strong>Country:</strong> {winner.country}
        </p>
        <p>
          <strong>Total Cost:</strong> {winner.total}
        </p>
      </div>

      <Elements stripe={stripePromise} options={options}>
        <div className="Winner"></div>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
