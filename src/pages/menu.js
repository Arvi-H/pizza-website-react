import React from "react";

const Menu = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              class="align-self-center mr-3"
              src="images/pepperonipizza.jpg"
            />
          </div>
          <div class="col-6">
            <h5 class="mt-0 mb-1">Pepperoni Pizza</h5>
            Tomato Sauce, House Made Mozzarella From Gold Creek Farms,
            Creminelli Pepperoni.
            <div class="allergens">Allergens: Gluten, Dairy</div>
            <h6>$5.99</h6>
          </div>
        </div>
        <div class="row">
          <div class="w-100"></div>
          <div class="col">
            <img
              class="align-self-center mr-3"
              src="images/hawaiianpizza.jpg"
            />
          </div>
          <div class="col-6">
            <h5 class="mt-0 mb-1">Hawaiian Pizza</h5>
            Tomato Sauce, House Made Mozzarella, Parmigiano, Snuck Farm Basil,
            Pepperoni, Pineapple, Extra Virgin Olive Oil.
            <div class="allergens">Allergens: Gluten, Dairy</div>
            <h6>$6.99</h6>
          </div>
        </div>
        <div class="row">
          <div class="w-100"></div>
          <div class="col">
            <img class="align-self-center mr-3" src="images/veggie1pizza.jpg" />
          </div>
          <div class="col-6">
            <h5 class="mt-0 mb-1">Veggie Pizza</h5>
            Tomato Sauce, House Made Mozzarella, Parmigiano, Snuck Farm Basil,
            Green Peppers, Extra Virgin Olive Oil. NOTE: Vegetarian Pizza.
            <div class="allergens">Allergens: Gluten, Dairy</div>
            <h6>$8.00</h6>
          </div>
        </div>
        <div class="row">
          <div class="w-100"></div>
          <div class="col">
            <img class="align-self-center mr-3" src="images/meatlovers.jpg" />
          </div>
          <div class="col-6">
            <h5 class="mt-0 mb-1">Meat Pizza</h5>
            Tomato Sauce, House Made Mozzarella, Creminelli Pepperoni, House
            Made Italian Sausage Featuring Pork From Clifford Family Farms In
            Provo.
            <div class="allergens">Allergens: Gluten, Dairy</div>
            <h6>$8.49</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
