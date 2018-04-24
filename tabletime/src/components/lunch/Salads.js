import React from 'react';
import SALADS_DATA from '../../data/lunch/SALADS';
import '../../styles/EachMenu.css';

function Salads () {
  const homestyleSaladData = SALADS_DATA.HOMESTYLE_SALADS.items;
  const customSaladData = SALADS_DATA.CUSTOM_SALADS.items;

  const homestyleSaladItems = homestyleSaladData.map( item => {
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

  const customSaladItems = customSaladData.map( item => {
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
      <h1>HOMESTYLE SALADS</h1>
      <div className='menu-wrapper'>
        { homestyleSaladItems }
      </div>

      <h1>CUSTOM SALADS</h1>
      <h4>SMALL $7.95 / LARGE $8.95</h4>
      <div className='menu-wrapper'>
        { customSaladItems }
      </div>
    </div>
  )
}

export default Salads;
