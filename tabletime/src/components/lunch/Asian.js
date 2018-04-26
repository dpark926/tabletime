import React from 'react';
import ASIAN_DATA from '../../data/lunch/ASIAN';
import MapItems from '../MapItems';

function Asian () {
  const udonData = ASIAN_DATA.UDON.items;
  const ramenData = ASIAN_DATA.RAMEN.items;
  const bibimbapData = ASIAN_DATA.BIBIMBAP.items;
  const teriyakiData = ASIAN_DATA.TERIYAKI.items;
  const stirFryData = ASIAN_DATA.STIR_FRY.items;

  const udonItems = MapItems( udonData );
  const ramenItems = MapItems( ramenData );
  const bibimbapItems = MapItems( bibimbapData );
  const teriyakiItems = MapItems( teriyakiData );

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
      <h1>{ ASIAN_DATA.UDON.heading }</h1>
      <h4>{ ASIAN_DATA.UDON.subHeading }</h4>
      <h4>SOBA $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { udonItems }
      </div>
      <h1>{ ASIAN_DATA.RAMEN.heading }</h1>
      <h4>{ ASIAN_DATA.RAMEN.subHeading }</h4>
      <h4>EGG $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { ramenItems }
      </div>
      <h1>{ ASIAN_DATA.BIBIMBAP.heading }</h1>
      <h4>{ ASIAN_DATA.BIBIMBAP.subHeading }</h4>
      <h4>BROWN RICE $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { bibimbapItems }
      </div>
      <h1>{ ASIAN_DATA.TERIYAKI.heading }</h1>
      <h4>{ ASIAN_DATA.TERIYAKI.subHeading }</h4>
      <h4>BROWN RICE OR YAKI UDON $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { teriyakiItems }
      </div>
      <h1>{ ASIAN_DATA.STIR_FRY.heading }</h1>
      <h4>{ ASIAN_DATA.STIR_FRY.subHeading }</h4>
      <h4>BROWN RICE, SOBA, SHRIMP $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { stirFryItems }
      </div>
    </div>
  )
}

export default Asian;
