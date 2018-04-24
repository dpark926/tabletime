import React from 'react';
import ASIAN_DATA from '../../data/lunch/ASIAN';

function Asian () {
  const udonData = ASIAN_DATA.UDON.items;
  const ramenData = ASIAN_DATA.RAMEN.items;
  const bibimbapData = ASIAN_DATA.BIBIMBAP.items;
  const teriyakiData = ASIAN_DATA.TERIYAKI.items;
  const stirFryData = ASIAN_DATA.STIR_FRY.items;

  const udonItems = udonData.map( item => {
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

  const ramenItems = ramenData.map( item => {
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

  const bibimbapItems = bibimbapData.map( item => {
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

  const teriyakiItems = teriyakiData.map( item => {
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

  const stirFryItems = stirFryData.map( item => {
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
      <h1>UDON</h1>
      <h4>(SERVED WITH BROCCOLI, SCALLIONS, CARROTS, SEAWEED, YUBU)</h4>
      <h4>SOBA $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { udonItems }
      </div>
      <h1>RAMEN</h1>
      <h4>(SERVED WITH BROCCOLI, SCALLION, CARROT)</h4>
      <h4>EGG $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { ramenItems }
      </div>
      <h1>BIBIMBAP</h1>
      <h4>(SERVED WITH WHITE RICE, SEASONED VEGETABLES, FRIED EGG AND HOT PASTE)</h4>
      <h4>BROWN RICE $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { bibimbapItems }
      </div>
      <h1>TERIYAKI</h1>
      <h4>(SERVED WITH BROCCOLI, CARROTS, ONIONS, MUSHROOMS)</h4>
      <h4>BROWN RICE OR YAKI UDON $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { teriyakiItems }
      </div>
      <h1>STIR FRY</h1>
      <h4>$8.95</h4>
      <h4>BROWN RICE, SOBA, SHRIMP $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { stirFryItems }
      </div>
    </div>
  )
}

export default Asian;
