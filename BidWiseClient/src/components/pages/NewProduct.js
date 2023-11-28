import React from "react";
import "./NewProduct.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="prodDet">
      <h1>Add a New Item </h1>
      <form className="FormCont">
        <input name="id" type="text" placeholder="Id"></input>

        <input name="Name" type="text" placeholder="Name"></input>

        <input name="Description" type="text" placeholder="Description"></input>

        <input
          name="InitialPrice"
          type="text"
          placeholder="Intial Price"
        ></input>

        <input name="TotalTime" type="text" placeholder="Total Time"></input>

        <input
          name="AuctionType"
          type="text"
          placeholder="Auction Type"
        ></input>

        <input
          name="ShippingTime"
          type="password"
          placeholder="Shipping Time"
        ></input>

        <Link exact to="/SignIn">
          {" "}
          <button> Add</button>{" "}
        </Link>
      </form>
    </div>
  );
}

export default Product;
