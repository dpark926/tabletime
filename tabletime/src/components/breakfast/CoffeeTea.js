import React from 'react';
import COFFEE_TEA_DATA from '../../data/breakfast/COFFEE_TEA.js';
import '../../styles/EachMenu.css';

function CoffeeTea () {
  const data = COFFEE_TEA_DATA.items;

  const coffeeTeaItems = data.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  })

  return (
    <div>
      <h1>{ COFFEE_TEA_DATA.heading }</h1>
      <div className='menu-wrapper'>
        { coffeeTeaItems }
        {/* <div className='item-box'>
          <span className='item-name'>100% COLOMBIAN COFFEE</span>
          <span className='item-price'>$1.50 / $2.00</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>HAZELNUT COFFEE</span>
          <span className='item-price'>$1.75 / $2.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>LIPTON TEA</span>
          <span className='item-price'>$1.50 / $2.00</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>HERBAL TEA</span>
          <span className='item-price'>$1.75 / $2.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>HOT CHOCOLATE (w/steamed milk)</span>
          <span className='item-price'>$2.25 / $3.00</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>CAPPUCCINO</span>
          <span className='item-price'>$2.95 / $3.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>CAFE LATTE</span>
          <span className='item-price'>$2.95 / $3.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>ESPRESSO</span>
          <span className='item-price'>$2.00 (single) / $3.00 (double)</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>ICED COFFEE OR TEA</span>
          <span className='item-price'>$2.25 / $3.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>ICED CAPPUCCINO</span>
          <span className='item-price'>$3.25 / $4.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>ICED CAFE LATTE</span>
          <span className='item-price'>$3.25 / $4.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'></span>
          <span className='item-price'></span>
        </div> */}
      </div>
    </div>
  )
}

export default CoffeeTea;
