import React from 'react';
import QUESADILLAS_DATA from '../../data/lunch/QUESADILLAS';

function Quesadillas () {
  const data = QUESADILLAS_DATA.items;

  const quesadillaItems = data.map( item => {
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
      <h1>QUESADILLAS</h1>
      <h4></h4>
      <div className='menu-wrapper'>
        { quesadillaItems }
      </div>
    </div>
  )
}

export default Quesadillas;
