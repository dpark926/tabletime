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
    <div>
      <h1>UDON</h1>
      <h4>(SERVED WITH BROCCOLI, SCALLIONS, CARROTS, SEAWEED, YUBU)</h4>
      <h4>SOBA $1.00 EXTRA</h4>
      <div className='menu-wrapper'>
        { udonItems }
        {/* $6.95
        VEGETABLE
        $7.95
        TOFU
        $7.95
        CHICKEN
        $8.95
        BEEF
        $8.95
        SHRIMP TEMPURA
        $8.95
        SHUMAI */}
      </div>
      <h1>RAMEN</h1>
      <h4>(SERVED WITH BROCCOLI, SCALLION, CARROT)</h4>
      <h4>EGG $1.00 EXTRA</h4>
      <div>
        { ramenItems }
        {/* $6.95
        VEGETABLE
        $7.95
        CHICKEN
        $8.95
        BEEF
        $8.95
        SEAFOOD */}
      </div>
      <h1>BIBIMBAP</h1>
      <h4>(SERVED WITH WHITE RICE, SEASONED VEGETABLES, FRIED EGG AND HOT PASTE)</h4>
      <h4>BROWN RICE $1.00 EXTRA</h4>
      <div>
        { bibimbapItems }
        {/* $7.95
        VEGETABLE
        $8.45
        TOFU
        $8.95
        CHICKEN
        $9.95
        BEEF */}
      </div>
      <h1>TERIYAKI</h1>
      <h4>(SERVED WITH BROCCOLI, CARROTS, ONIONS, MUSHROOMS)</h4>
      <h4>BROWN RICE OR YAKI UDON $1.00 EXTRA</h4>
      <div>
        { teriyakiItems }
        {/* $8.45
        CHICKEN TERIYAKI
        $8.45
        TOFU TERIYAKI
        $9.45
        BEEF TERIYAKI
        $9.45
        SHRIMP TERIYAKI
        $9.45
        SALMON TERIYAKI */}
      </div>
      <h1>STIR FRY</h1>
      <h4>$8.95</h4>
      <h4>BROWN RICE, SOBA, SHRIMP $1.00 EXTRA</h4>
      <div>
        { stirFryItems }
        {/* (STEP 1) CHOOSE YOUR NOODLE OR RICE
        WHITE RICE, BROWN RICE, SOBA, UDON, RICE NOODLE, GLASS NOODLE
        (STEP 2) CHOOSE A PROTEIN
        CHICKEN, BEEF, SHRIMP
        (STEP 3) CHOOSE VEGETABLES
        BOK CHOY, BEAN SPROUTS, BROCCOLI, CARROTS, MUSHROOMS, SCALLIONS, ONIONS, SNOW PEAS, ZUCCHINI, CILANTRO
        (STEP 4) CHOOSE A SAUCE
        TERIYAKI, ASIAN BBQ, GARLIC, SWEET & SOUR, LEMON, COCONUT THAI CURRY */}
      </div>
    </div>
  )
}

export default Asian;
