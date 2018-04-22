import React from 'react';
import WRAPS_DATA from '../../data/lunch/WRAPS';

function Wraps () {
  const data = WRAPS_DATA.items;

  const wrapItems = data.map( item => {
    return (
      <div className='lunch-item-box'>
        <div>
          <span className='item-name'>{ item.itemName }</span>
        </div>
        <div>
          <span className='item-description'>{ item.itemDescription }</span>
        </div>
        <div>
          <span className='item-price'>{ item.itemPrice }</span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>WRAPS</h1>
      <h4>$7.95</h4>
      <div className='menu-wrapper'>
        { wrapItems }
      </div>
    </div>
  )
}

export default Wraps;
