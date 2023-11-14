1. Download zip file
2. Extract it and import it as a maven project in eclipse
3. Run EcommerceprojectApplication.java as a Java Application
4. Import the postman collections and run all the collections.

For Testing:
LoginCollection: Run it as a collection or reach request one by one in order and verify the responses. Each request corresponds to a test case described in the design document with first request corresponding to the first test case in Login Collection Test Cases section of the document.
If you have to reboot the application after running it once, set "spring.sql.init.mode=always" to "spring.sql.init.mode=never" in src/main/resources/application.properties
