import React from 'react';
import PASTRIES_DATA from '../../data/breakfast/PASTRIES';
import '../../styles/EachMenu.css'

function Pastries () {
  const data = PASTRIES_DATA.items;

  const pastryItems = data.map( item => {
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
      <h1>PASTRIES</h1>
      <div className='menu-wrapper'>
        { pastryItems }
        {/* <div className='item-box'>
          <span className='item-name'>MUFFINS<br/>
          Corn, Blueberry, Raisin Bran, Almond Poppy Seed, Berry Blast, Cappuccino & More</span>
          <span className='item-price'>$2.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>CROISSANTS & DANISHES<br/>
          Almond, Chocolate, Cheese, Fruit & More</span>
          <span className='item-price'>$2.25</span>
        </div> */}
      </div>
    </div>
  )
}

export default Pastries;
