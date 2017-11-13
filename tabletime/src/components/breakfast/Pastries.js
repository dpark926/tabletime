import React from 'react';
import '../../styles/EachMenu.css'

function Pastries () {

  return (
    <div>
      <h1>PASTRIES</h1>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span className='item-name'>MUFFINS<br/>
          Corn, Blueberry, Raisin Bran, Almond Poppy Seed, Berry Blast, Cappuccino & More</span>
          <span className='item-price'>$2.25</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>CROISSANTS & DANISHES<br/>
          Almond, Chocolate, Cheese, Fruit & More</span>
          <span className='item-price'>$2.25</span>
        </div>
      </div>
    </div>
  )
}

export default Pastries;
