import React from 'react';
import BURGERS_DATA from '../../data/lunch/BURGERS';
import MapItems from '../MapItems';

function Burgers () {
  const data = BURGERS_DATA.items;

  const burgerItems = MapItems( data );

  return (
    <div className='contents'>
      <h1>{ BURGERS_DATA.heading }</h1>
      <h4>{ BURGERS_DATA.subHeading }</h4>
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
