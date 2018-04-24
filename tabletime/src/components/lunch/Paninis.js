import React from 'react';
import PANINIS_DATA from '../../data/lunch/PANINIS';

function Paninis () {
  const data = PANINIS_DATA.items;

  const paniniItems = data.map( item => {
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
    <div className='contents'>
      {/* [panini] */}
      <h1>PRESSED PANINI SANDWICHES</h1>
      <h4>$7.45</h4>
      <div className='menu-wrapper'>
        { paniniItems }
      </div>
    </div>
  )
}

export default Paninis;
