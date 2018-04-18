import React from 'react';
import COFFEE_TEA_DATA from '../../data/breakfast/COFFEE_TEA';
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
  });

  return (
    <div>
      <h1>{ COFFEE_TEA_DATA.heading }</h1>
      <div className='menu-wrapper'>
        { coffeeTeaItems }
       </div>
    </div>
  );
}

export default CoffeeTea;
