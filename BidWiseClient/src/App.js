import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Homepage";
import Footer from "./components/footer";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Payment from "./components/pages/payment";
import ReceiptPage from "./components/pages/ReceiptPage";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/Contact";
import ForwardAuction from "./components/pages/ForwardAuction";
import DutchAuction from "./components/pages/DutchAuction";
import CatalogueS from "./components/pages/CatalogueS";
import BiddingEnd from "./components/pages/BiddingEnd";
import Product from "./components/pages/NewProduct";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={CatalogueS} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/Payment" exact component={Payment} />
          <Route path="/ReceiptPage" exact component={ReceiptPage} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/ForwardAuction" exact component={ForwardAuction} />
          <Route path="/DutchAuction" exact component={DutchAuction} />
          <Route path="/Catalogue" exact component={CatalogueS} />
          <Route path="/BiddingEnd" exact component={BiddingEnd} />
          <Route path="/NewProduct" exact component={Product} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
