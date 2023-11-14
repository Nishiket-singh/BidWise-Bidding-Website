Project README
Project Setup
Clone the repository to your local machine.
Open the terminal and navigate to the project directory.
Run npm i to install the project dependencies.
After successful installation, run npm start in the terminal.
Open your web browser and go to http://localhost:3000.
Project Structure
<Route  path="/" exact component={Home} />
      <Route  path="/about" exact component={Home} />
      <Route  path="/SignUp" exact component={SignUp} />
      <Route  path="/SignIn" exact component={SignIn} />
      <Route  path="/Payment" exact component={Payment} />
      <Route path="/ReceiptPage" exact component={ReceiptPage}    />
      <Route path="/AboutUs" exact component={AboutUs}    />
      <Route path="/Contact" exact component={Contact}  />

      

      <Route path="/ForwardAuction" exact component={ForwardAuction} />
      <Route path="/DutchAuction" exact component={DutchAuction} />
      <Route path="/Catalogue" exact component={CatalogueS} />
      <Route path="/BiddingEnd" exact component={BiddingEnd} />

      <Route path="/NewProduct" exact component={Product} />
