import React from "react";
import "./css/AboutUs.css";
import Hash from "./hash.jpg"
import Nish from "./nish.jpg"
import Raj from "./raj.jpg"

function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <section className="introSection">
        <h1>Welcome to BidWise!</h1>
        <p className="introText">
          BidWise is a powerful and secure full-stack online bidding platform that combines the dynamic power of React and the robustness of Spring Boot. Whether you're a seasoned bidder or new to the world of online auctions, BidWise offers a smooth, user-friendly experience. With real-time bidding, Stripe payment integration, and a responsive design, BidWise ensures a seamless bidding process. Thanks to Docker's containerization, the platform is scalable and deployable across various environments to handle traffic with ease.
        </p>
      </section>

      <section className="featuresSection">
        <h2>Core Features</h2>
        <ul className="featuresList">
          <li>User Authentication: Secure sign-up and login system to ensure safe user access.</li>
          <li>Real-time Bidding: Keep track of bids in real-time as auctions progress.</li>
          <li>Stripe Payment Integration: Convenient, secure payment processing for winning bids.</li>
          <li>Docker Deployment: Ensures smooth deployment and scalability across environments.</li>
          <li>History Tracking: Users can view their bidding history and monitor past activities.</li>
        </ul>
      </section>

      <section className="aboutCreatorsSection">
        <h2>Meet the Creators</h2>
        <p className="creatorsText">
          BidWise was brought to life by a group of developers with diverse backgrounds and expertise in full-stack development, machine learning, AI, and web technologies. Together, we have worked to create a secure and dynamic platform, bringing our collective knowledge of React, Spring Boot, and cloud technologies to build a seamless and scalable bidding experience. Our combined skills and passion for technology have helped shape BidWise into a user-friendly and powerful platform for online bidding.
        </p>
        <div className="creatorProfiles">
          <div className="creator">
            <h3>Raj Panjabi</h3>
            <img className="creatorsPhoto" src={Raj}></img>
            <p>A Computer Science Specialized Honours student.</p>
            <a href="https://rajpanjabi.github.io/Portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a> | 
            <a href="https://www.linkedin.com/in/rajpanjabi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="creator">
            <h3>Hashim Khan</h3>
            <img className="creatorsPhoto" src={Hash}></img>
            <p>A passionate and driven Computer Science graduate.</p>
            <a href="https://hashimkhan.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a> | 
            <a href="https://www.linkedin.com/in/khan-hashim/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="creator">
            <h3>Nishiket Singh</h3>
            <img className="creatorsPhoto" src={Nish}></img>
            <p>A Software Engineer and CFA Level 2 candidate.</p>
            <a href="nishiket-portfolio.netlify.app/ " target="_blank" rel="noopener noreferrer">Portfolio</a> | 
            <a href="https://www.linkedin.com/in/nishiket-singh-565309183/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="closingSection">
        <h2>Our Mission</h2>
        <p className="closingText">
          At BidWise, we strive to provide an exceptional and reliable platform for both bidders and sellers. We understand the thrill of online auctions and have worked to create a seamless, secure, and enjoyable bidding experience. Join us today and start bidding with confidence!
        </p>
      </section>
    </div>
  );
}

export default AboutUs;