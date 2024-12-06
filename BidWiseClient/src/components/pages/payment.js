
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import "./css/Payment.css";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51O1GMmFqdp61aXeqvkFPF8U1hIkjMCEPAQ1zo2Z4ffcoqB6riMj9qgrBuptvYJ5E5LpheGXl9s6CBdGaStOgVqiC00f3RZg6Dn"
);

function Payment() {
  const [winner, setWinner] = useState({});
  const [amount, setAmount] = useState(1);
  const location = useLocation();
  const pid = location.state?.productid;
  const address1 = "http://localhost:8080";
  const address2 = "https://ecombackendapi.onrender.com";

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(
          address1+`/payment/userdetails?productid=${pid}`
        );
        const userDetails = response.data;
        console.log(userDetails)
        setWinner(userDetails);
        setAmount(userDetails.total * 100); // Stripe expects the amount in cents
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (pid) getUserDetails();
  }, [pid]);

  const options = {
    mode: "payment",
    amount,
    currency: "cad",
    appearance: { theme: "stripe", labels: "floating" }, // Stripe theme for modern look
  };

  return (
    <div className="payment-container">
      <div className="winner-details">
        <h1>Winner Details</h1>
        {winner.firstname ? (
          <>
            <p>
              <strong>First Name:</strong> {winner.firstname}
            </p>
            <p>
              <strong>Last Name:</strong> {winner.lastname}
            </p>
            <p>
              <strong>Address:</strong> {winner.streetaddress}
            </p>
            <p>
              <strong>Postal Code:</strong> {winner.postalcode}
            </p>
            <p>
              <strong>City:</strong> {winner.city}
            </p>
            <p>
              <strong>Country:</strong> {winner.country}
            </p>
            <p>
              <strong>Total Cost:</strong> ${winner.total}
            </p>
          </>
        ) : (
          <p>Loading winner details...</p>
        )}
      </div>
      {/* <div className="checkout-section"> */}
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      {/* </div> */}
    </div>
  );
}

export default Payment;