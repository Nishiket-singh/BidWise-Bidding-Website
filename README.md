Official Website: https://frontend-bidding.onrender.com/
Backend Deployment: https://bidd-caim.onrender.com/



1. Download zip file. 
2. Extract it.
3. Import group111 package as a maven project in eclipse to run the backend.The front end is in BidwiseClient package. See at the bottom.
4. Run EcommerceprojectApplication.java as a Java Application. If you have to reboot the application after running it once, set "spring.sql.init.mode=always" to "spring.sql.init.mode=never" in src/main/resources/application.properties.
5. Import the postman collections and run all the collections.

For Testing:
LoginCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Login Collection Test Cases section of the document.

ProductsCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Product Collection Test Cases section of the document.

BiddingCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Bidding Collection Test Cases section of the document.

Payment Test Cases: For each payment collection, Run the first command in the collection. Take the id from response and paste it in the body of second request and then send that request and verify the response.
Each Collection corresponds to a test case in The Payment Collection Test Case section of document.

For Frontend:
Open the terminal and navigate to the project directory i.e BidwiseClient/BidwiseClient.

Run npm i to install the project dependencies.

After successful installation, run npm start in the terminal.

Open your web browser and go to http://localhost:3000.

Project Structure
Append the following paths to access each component:

     1. "/": Home Page
     2. "/SignUp": SignUp Page
     3. "/SignIn": SignIn Page
     4. "/Payment": Payment Page
     5. "/ReceiptPage": Receipt Page  
     6. "/AboutUs": About Us Page
     7. "/ForwardAuction": Forward Auction Page
     8. "/DutchAuction": Dutch Auction Page
     9. "/Catalogue": Catalogue Page
     10. "/BiddingEnd": Bidding End Page
     11. "/NewProduct": New Product Page
