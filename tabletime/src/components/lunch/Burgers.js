import React from 'react';
import BURGERS_DATA from '../../data/lunch/BURGERS';

function Burgers () {
  const data = BURGERS_DATA.items;

  const burgerItems = data.map( item => {
    return (
      <div className='item-box'>
        <div className='item-left'>
          <span className='item-name'>{ item.itemName }</span>
          <span className='item-description'>{ item.itemDescription }</span>
        </div>
        <div className='item-right'>
          <span className='item-price'>{ item.itemPrice }</span>
        </div>
      </div>
    );
  });

  return (
    <div className='contents'>
      <h1>BURGERS</h1>
      <h4>(ALL NATURAL 1/2 LB BEEF)</h4>
      <div className='menu-wrapper'>
        { burgerItems }
    </div>

      {/* ADDITIONALS
      <ul>
      DELUXE BURGER SERVED WITH FRENCH FRIES, LETTUCE, TOMATOES, PICKLE
      $2.00 ADDITIONAL
      ADD TOMATOES
      $0.50
      ADD CHEESE
      $0.50
      ADD BACON
      $1.00
      </ul> */}
    </div>
  )
}

export default Burgers;
