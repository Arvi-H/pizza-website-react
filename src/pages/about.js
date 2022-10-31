import React from "react";

const About = () => {
return (
      <div>
        <div class="flex-container">
          <div class="flex-item-left">
            <img src="images/about-us.jpg" alt="img"></img>
          </div>
          <div class="flex-item-right">
            <div class="aboutme">
              <div class="aboutmetitle">
                <h2>About Us!</h2>
              </div>
              <div class="aboutinfo">
    <p>
      Welcome to Pizza Place! Pizza Place has been serving families for
      over 50 years! From the beginning, Pizza Place has had a
      commitment to delicious food and superior service. Even today,
      nearly all of the items served here are made from scratch daily.
    </p>
                <p>
                  Come in to Pizza Place soon, or feel free to order now online!
                </p>
                <a
                  class="btn btn-danger btn-md"
                  href="http://ec2-54-219-11-189.us-west-1.compute.amazonaws.com/pizzaPlace/order.html"
                  role="button"
                >
                  ORDER ONLINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
};

export default About;
