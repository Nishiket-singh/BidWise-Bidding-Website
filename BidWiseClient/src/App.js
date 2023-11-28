import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Homepage";
import Footer from "./components/footer";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import "./App.css";
import Payment from "./components/pages/payment";
import ReceiptPage from "./components/pages/ReceiptPage";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/Contact";
// import CatalogueApp from './CatalogueApp';

import ForwardAuction from "./components/pages/ForwardAuction";
import DutchAuction from "./components/pages/DutchAuction";
import CatalogueS from "./components/pages/CatalogueS";
import BiddingEnd from "./components/pages/BiddingEnd";
import Product from "./components/pages/NewProduct";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Home} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/SignIn" exact component={SignIn} />
          <Route path="/Payment" exact component={Payment} />
          <Route path="/ReceiptPage" exact component={ReceiptPage} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />

          <Route path="/ForwardAuction" exact component={ForwardAuction} />
          <Route path="/DutchAuction" exact component={DutchAuction} />
          <Route path="/Catalogue" exact component={CatalogueS} />
          <Route path="/BiddingEnd" exact component={BiddingEnd} />

          <Route path="/NewProduct" exact component={Product} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
