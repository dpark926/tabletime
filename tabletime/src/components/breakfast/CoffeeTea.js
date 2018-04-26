import React from 'react';
import COFFEE_TEA_DATA from '../../data/breakfast/COFFEE_TEA';
import MapItems from '../MapItems';
import '../../styles/EachMenu.css';

function CoffeeTea () {
  const data = COFFEE_TEA_DATA.items;

  const coffeeTeaItems = MapItems( data );

  const emptyItem = data.length % 2 !== 0 ? <div className='item-box'></div> : null

  return (
    <div className='contents'>
      <h1>{ COFFEE_TEA_DATA.heading }</h1>
      <div className='menu-wrapper'>
        { coffeeTeaItems }
        { emptyItem }
      </div>
    </div>
  );
}

export default CoffeeTea;
