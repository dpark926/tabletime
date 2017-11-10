import React from 'react';

function Breakfast () {

  return (
    <div>
      <h1>BREAKFAST SANDWICHES</h1>
      <h6>$1.00 EXTRA FOR EGGWHITE</h6>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span className='item-name'>ONE EGG ON A ROLL</span>
          <span className='item-price'>$1.75</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Each Additional Egg</span>
          <span className='item-price'>$0.50</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Add Cheese</span>
          <span className='item-price'>$0.50</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Add Bacon, Ham, or Sausage</span>
          <span className='item-price'>$1.00</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Add Turkey Bacon, Turkey Sausage or Beef Sausage</span>
          <span className='item-price'>$1.50</span>
        </div>
        <div className='item-box'>
          <span className='item-name'></span>
          <span className='item-price'></span>
        </div>
      </div>

      <h1>BREAKFAST PLATTER</h1>
      <h6>$1.00 EXTRA FOR EGGWHITE</h6>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span className='item-name'>TWO EGGS WITH HOME FRIES & TOAST</span>
          <span className='item-price'>$4.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Add Cheese</span>
          <span className='item-price'>$0.50</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Add Bacon, Ham or Sausage</span>
          <span className='item-price'>$1.00</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>Add Turkey Bacon, Turkey Sausage or Beef Sausage</span>
          <span className='item-price'>$1.50</span>
        </div>
      </div>

      <h1>FRENCH TOAST & PANCAKES</h1>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span className='item-name'>FRENCH TOAST</span>
          <span className='item-price'>$3.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>PANCAKES</span>
          <span className='item-price'>$3.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>PANCAKES WITH FRUITS</span>
          <span className='item-price'>$4.95</span>
        </div>
      </div>

      <h1>OMELETTE PLATTERS</h1>
      <h6>(Served with Home Fries & Toast)</h6>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span className='item-name'>WESTERN OMELETTE<br/>
          Ham, Onion, Bell Pepper</span>
          <span className='item-price'>$4.99</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>GREEK OMELETTE<br/>
          Feta Cheese, Tomatoes</span>
          <span className='item-price'>$4.49</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>CALIFORNIA OMELETTE<br/>
          Turkey, Avocado, Swiss Cheese, Tomatoes</span>
          <span className='item-price'>$6.99</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>SPINACH OMELETTE<br/>
          Baby Spinach, Mushrooms, Onions, Swiss Cheese</span>
          <span className='item-price'>$5.49</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>GARDEN OMELETTE<br/>
          Broccoli, Tomatoes, Mushrooms, Cheddar Cheese</span>
          <span className='item-price'>$5.49</span>
        </div>
      </div>

      <h1>OATMEAL</h1>
      <h6>(Water, Whole Milk, Skim Milk, Almond Milk, Coconut Milk)</h6>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span className='item-name'>SMALL (12 OZ.)<br/>
          Topped w/Raisins, Brown Sugar, Cinnamon</span>
          <span className='item-price'>$2.75</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>LARGE (16OZ.)<br/>
          Topped w/Raisins, Brown Sugar, Cinnamon</span>
          <span className='item-price'>$3.75</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>EACH ADDITIONAL TOPPING<br/>
          Granola, Berries, Banana, Honey, Walnuts, Almonds</span>
          <span className='item-price'>$0.50</span>
        </div>
      </div>
    </div>
  )
}

export default Breakfast;
