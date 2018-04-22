import React from 'react';
import SANDWICHES_DATA from '../../data/lunch/SANDWICHES';
import '../../styles/EachMenu.css';

function Sandwiches () {
  const signatureColdSandwichesData = SANDWICHES_DATA.SIGNATURE_COLD_SANDWICHES.items;
  const vegetarianSandwichesData = SANDWICHES_DATA.VEGETARIAN_SANDWICHES.items;
  const signatureHotSandwichesData = SANDWICHES_DATA.SIGNATURE_HOT_SANDWICHES.items;
  const hotSandwichesData = SANDWICHES_DATA.HOT_SANDWICHES.items;

  const signatureColdSandwichItems = signatureColdSandwichesData.map( item => {
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

  const vegetarianSandwichItems = vegetarianSandwichesData.map( item => {
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

  const signatureHotSandwichItems = signatureHotSandwichesData.map( item => {
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

  const hotSandwichItems = hotSandwichesData.map( item => {
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
      <h1>SIGNATURE COLD SANDWICHES</h1>
      <h4>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h4>
      <div className='menu-wrapper'>
        { signatureColdSandwichItems }
      </div>

      <h1>VEGETARIAN SANDWICHES</h1>
      <h4>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h4>
      <div className='menu-wrapper'>
        { vegetarianSandwichItems }
        {/* <div className='item-box'>
          MOZZARELLA DELIGHT<br/>
          FRESH MOZZARELLA CHEESE ROASTED RED PEPPERS, TOMATO, BASIL, ITALIAN DRESSING
        </div>
        <div className='item-box'>
          LITE DELIGHTS<br/>
          GRILLED VEGETABLES, GREEN SQUASH, YELLOW SQUASH, EGGPLANT, CARROTS, FRESH MOZZARELLA CHEESE, ROASTED RED PEPPERS, HUMMUS TAHINI SAUCE
        </div>
        <div className='item-box'>
          VEGETARIAN SPECIAL<br/>
          AVOCADO, ROMAINE LETTUCE, TOMATOES, CARROTS, CUCUMBERS, ALFAFA SPROUTS, SHREDDED RED CABBAGE, SWEET PEPPERS, HONEY MUSTARD
        </div>
        <div className='item-box'>
          EGGPLANT & ZUCCHINI<br/>
          EGGPLANTS & ZUCCHINI MARINATED WITH BALSAMIC VINEGAR, ROASTED RED PEPPERS, SMOKED MOZZARELLA CHEESE, HONEY DIJON MUSTARD
        </div> */}
      </div>

      <h1>SIGNATURE HOT SANDWICHES</h1>
      <h4>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h4>
      <div className='menu-wrapper'>
        { signatureHotSandwichItems }
        {/* <div className='item-box'>
          "T" COMBO<br/>
          HOT PASTRAMI, CORNED BEEF, SWISS CHEESE, COLE SLAW, RUSSIAN DRESSING
        </div>
        <div className='item-box'>
          THE PHILLY<br/>
          GRILLED PHILLY STEAK, MELTED AMERICAN CHEESE, GRILLED ONIONS AND PEPPERS
        </div>
        <div className='item-box'>
          THE SMOKY<br/>
          SMOKED HAM, SMOKED TURKEY, SWISS CHEESE, COLESLAW, RUSSIAN DRESSING
        </div>
        <div className='item-box'>
          THE MAXIMUS<br/>
          GRILLED SMOKED TURKEY, MELTED PEPPER JACK CHEESE, CRISPY BACON, SUNDRIED TOMATO PASTE
        </div>
        <div className='item-box'>
          THE AMAZING<br/>
          OVEN ROASTED FRESH TURKEY, MELTED SWISS CHEESE, ROASTED PEPPERS, CRANBERRY SAUCE
        </div> */}
      </div>

      <h1>HOT SANDWICHES</h1>
      <h4>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h4>
      <div className='menu-wrapper'>
        { hotSandwichItems }
        {/* <div className='item-box'>
          THE CLASSIC<br/>
          GRILLED CHICKEN BREAST, FRESH MOZZARELLA CHEESE, GRILLED ONIONS, ROMAINE LETTUCE, ROASTED RED PEPPERS
        </div>
        <div className='item-box'>
          THE CHICAVO<br/>
          GRILLED CHICKEN BREAST, AVOCADO, ROASTED RED PEPPERS, MESCLUN, RANCH DRESSING
        </div>
        <div className='item-box'>
          THE TOBASCO<br/>
          GRILLED CHICKEN BREAST, MELTED FRESH MOZZARELLA CHEESE, GRILLED ONIONS, ROMAINE LETTUCE, HOT PEPPERS, TABASCO SAUCE
        </div>
        <div className='item-box'>
          TERIYAKI CHICKEN<br/>
          GRILLED CHICKEN BREAST, MELTED FRESH MOZZARELLA CHEESE, GRILLED ONIONS, ROMAINE LETTUCE, TOMATO, TERIYAKI SAUCE
        </div>
        <div className='item-box'>
          HONEY BBQ CHICKEN<br/>
          GRILLED CHICKEN BREAST, MELTED FRESH MOZZARELLA CHEESE, GRILLED ONIONS, ROMAINE LETTUCE
        </div> */}
      </div>
    </div>
  )
}

export default Sandwiches;
