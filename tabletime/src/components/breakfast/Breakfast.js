import React from 'react';
import BREAKFAST_DATA from '../../data/breakfast/BREAKFAST';
import MapItems from '../MapItems';
import '../../styles/EachMenu.css';

function Breakfast () {
  const breakfastSandwichData = BREAKFAST_DATA.BREAKFAST_SANDWICHES.items;
  const breakfastPlatterData = BREAKFAST_DATA.BREAKFAST_PLATTERS.items;
  const frenchToastData = BREAKFAST_DATA.FRENCH_TOAST_PANCAKES.items;
  const omeletteData = BREAKFAST_DATA.OMELETTE_PLATTERS.items;
  const oatmealData = BREAKFAST_DATA.OATMEAL.items;

  const emptyItem1 = breakfastSandwichData.length % 2 !== 0 ? <div className='item-box empty-box'></div> : null
  const emptyItem2 = breakfastPlatterData.length % 2 !== 0 ? <div className='item-box empty-box'></div> : null
  const emptyItem3 = frenchToastData.length % 2 !== 0 ? <div className='item-box empty-box'></div> : null
  const emptyItem4 = omeletteData.length % 2 !== 0 ? <div className='item-box empty-box'></div> : null
  const emptyItem5 = oatmealData.length % 2 !== 0 ? <div className='item-box empty-box'></div> : null

  const breakfastSandwichItems = MapItems( breakfastSandwichData );
  const breakfastPlatterItems = MapItems( breakfastPlatterData );
  const frenchToastPancakesItems = MapItems( frenchToastData );
  const omelettePlatterItems = MapItems( omeletteData );
  const oatmealItems = MapItems( oatmealData );

  return (
    <div className='contents'>
      <div>
        <h1>BREAKFAST SANDWICHES</h1>
        <h4>$1.00 EXTRA FOR EGGWHITE</h4>
        <div className='menu-wrapper'>
          { breakfastSandwichItems }
          { emptyItem1 }
        </div>
      </div>
      <div>
        <h1>BREAKFAST PLATTER</h1>
        <h4>$1.00 EXTRA FOR EGGWHITE</h4>
        <div className='menu-wrapper'>
          { breakfastPlatterItems }
          { emptyItem2 }
        </div>
      </div>

      <h1>FRENCH TOAST & PANCAKES</h1>
      <div className='menu-wrapper'>
        { frenchToastPancakesItems }
        { emptyItem3 }
      </div>

      <div>
        <h1>OMELETTE PLATTERS</h1>
        <h4>(Served with Home Fries & Toast)</h4>
        <div className='menu-wrapper'>
          { omelettePlatterItems }
          { emptyItem4 }
        </div>
      </div>

      <div>
        <h1>OATMEAL</h1>
        <h4>(Water, Whole Milk, Skim Milk, Almond Milk, Coconut Milk)</h4>
        <div className='menu-wrapper'>
          { oatmealItems }
          { emptyItem5 }
        </div>
      </div>
    </div>
  )
}

export default Breakfast;
