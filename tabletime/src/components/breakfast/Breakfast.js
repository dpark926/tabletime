import React from 'react';
import BREAKFAST_DATA from '../../data/breakfast/BREAKFAST';
import '../../styles/EachMenu.css';

function Breakfast () {
  const breakfastSandwichData = BREAKFAST_DATA.BREAKFAST_SANDWICHES.items;
  const breakfastPlatterData = BREAKFAST_DATA.BREAKFAST_PLATTERS.items;
  const frenchToastData = BREAKFAST_DATA.FRENCH_TOAST_PANCAKES.items;
  const omeletteData = BREAKFAST_DATA.OMELETTE_PLATTERS.items;
  const oatmealData = BREAKFAST_DATA.OATMEAL.items;

  const breakfastSandwichItems = breakfastSandwichData.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span><br/>
        <span>{ item.itemDescription }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  });

  const breakfastPlatterItems = breakfastPlatterData.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span><br/>
        <span>{ item.itemDescription }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  });

  const frenchToastPancakesItems = frenchToastData.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span><br/>
        <span>{ item.itemDescription }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  });

  const omelettePlatterItems = omeletteData.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span><br/>
        <span>{ item.itemDescription }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  });

  const oatmealItems = oatmealData.map( item => {
    return (
      <div className='item-box'>
        <span className='item-name'>{ item.itemName }</span><br/>
        <span>{ item.itemDescription }</span>
        <span className='item-price'>{ item.itemPrice }</span>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h1>BREAKFAST SANDWICHES</h1>
        <h6>$1.00 EXTRA FOR EGGWHITE</h6>
        <div className='menu-wrapper'>
          { breakfastSandwichItems }
        </div>
      </div>
      <div>
        <h1>BREAKFAST PLATTER</h1>
        <h6>$1.00 EXTRA FOR EGGWHITE</h6>
        <div className='menu-wrapper'>
          { breakfastPlatterItems }
        </div>
      </div>

      <h1>FRENCH TOAST & PANCAKES</h1>
      <div className='menu-wrapper'>
        { frenchToastPancakesItems }
      </div>

      <div>
        <h1>OMELETTE PLATTERS</h1>
        <h6>(Served with Home Fries & Toast)</h6>
        <div className='menu-wrapper'>
        </div>
        { omelettePlatterItems }
      </div>

      <div>
        <h1>OATMEAL</h1>
        <h6>(Water, Whole Milk, Skim Milk, Almond Milk, Coconut Milk)</h6>
        <div className='menu-wrapper'>
        </div>
        { oatmealItems }
      </div>
    </div>
  )
}

export default Breakfast;
