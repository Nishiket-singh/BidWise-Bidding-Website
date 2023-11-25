Project README
Project Setup
Clone the repository to your local machine.
Open the terminal and navigate to the project directory.
Run npm i to install the project dependencies.
After successful installation, run npm start in the terminal.
Open your web browser and go to http://localhost:3000.
Project Structure
Home Page:

Navbar providing access to the Home Page, About Us Page, and Contact Us Page.
Company logo and buttons to access the Sign Up and Sign In pages.
Sign Up Page:

Fill in the required demographic fields.
Click the "Sign Up" button.
Redirected to the Sign In Page.
Sign In Page:

Provide credentials if already a member.
Click the "Sign In" button.
Redirected to the Catalogue Page.
Catalogue Page:

Search bar to search for products.
Display of recent items searched.
Radio buttons for selecting items, viewing details, auction type, and a bid button.
Clicking the bid button redirects to either the Forward Auction or Dutch Auction page.
Forward Auction Page:

Display item information, time left, current price, highest bidder info.
Input to enter the bid price.
Place a bid button.
Clicking the button redirects to the Bidding End Page.
Dutch Auction Page:

Similar info as Forward Auction.
Option to buy the product.
Clicking the bid button redirects to the Auction End Page.
Bidding End Page:

Option to pay now button (only for the winner).
Clicking "Pay Now" redirects to the Pay Now Page.
Pay Now Page:

Payment options and confirmation for the winning bid.


Receipt Page:
Shows Receipt and Shipment details. 
Clicking "Back to Main Page " takes you back to main page.


Access Pages Directly
Forward Auction: http://localhost:3000/ForwardAuction
Dutch Auction: http://localhost:3000/DutchAuction
Receipt Page: http://localhost:3000/ReceiptPage

Note
Ensure that you are signed in to access the Catalogue, Forward Auction, and Dutch Auction pages.
Feel free to explore and interact with different features of the application!