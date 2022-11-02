import React from 'react';

const Home = () => {
    return (
        <div>
            <img src="images/homePizza.png" class="img-fluid" alt="img"></img>
            <div class="container"> 
                <div class="big-container">
                    <h1 class="header-styler" id="testing">Pizza Place</h1>
                </div>
                <div class ="big-container">
                    <div class="mini-container">
                        <img class="image-styler" src="images/pizza.jpg" alt="img"></img>
                    </div>
                    <div class="mini-container">
                        <img class="image-styler" src="images/pasta.jpg" alt="img"></img>
                    </div>
                    <div class="mini-container">
                        <img class="image-styler" src="images/dessert.jpg" alt="img"></img>
                    </div>
                </div>
                <div class="container">
                    <div class ="big-container">
                        <div class="mini-container">
                            <p><a href="menu.html">Menu</a></p>
                        </div>
                        <div class="mini-container">
                            <p><a href="about-us.html">About Us</a></p>
                        </div>
                        <div class="mini-container">
                            <p><a href="order.html">Order Now</a></p>
                        </div>
                    </div>
                </div>
                <br></br> 
            </div>
        </div>
    );
};
 

export default Home;

