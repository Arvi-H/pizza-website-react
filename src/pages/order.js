import React from "react";

const Order = () => {
return (
    <div>
        <img src="images/pizzaOrder.jpg" class="img-fluid" />
         <div class="container">
        <br />
        <button type="button" class="btn btn-danger btn-lg btn-block">
            Call 801-888-8888 for Delivery
        </button>
        <br />
        <h2>Come to Our Locations!</h2>
        <br/>
        <div class="container">
            <img src="images/map.png" class="img-fluid" />
        </div>
        </div>  
    </div> 
    );
};

export default Order;
