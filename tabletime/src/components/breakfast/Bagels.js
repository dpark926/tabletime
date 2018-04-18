import React from 'react';
import BAGELS_DATA from '../../data/breakfast/BAGELS';
import '../../styles/EachMenu.css';

function Bagels () {
  const data = BAGELS_DATA.items;

  const bagelItems = data.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  });

  return (
    <div>
      <h1>{ BAGELS_DATA.heading }</h1>
      <div className='menu-wrapper'>
        { bagelItems }
      </div>
    </div>
  )
}

export default Bagels;
