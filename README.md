1. Download zip file
2. Extract it and import it as a maven project in eclipse
3. Run EcommerceprojectApplication.java as a Java Application
4. Import the postman collections and run all the collections.

For Testing:
LoginCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Login Collection Test Cases section of the document.
ProductsCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Product Collection Test Cases section of the document.
BiddingCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Bidding Collection Test Cases section of the document.
Payment Test Cases: For each payment collection, Run the first command in the collection. Take the id from response and paste it in the body of second request and then send that request and verify the response.
Each Collection corresponds to a test case in The Payment Collection Test Case section of document.

If you have to reboot the application after running it once, set "spring.sql.init.mode=always" to "spring.sql.init.mode=never" in src/main/resources/application.properties
