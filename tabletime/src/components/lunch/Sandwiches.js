import React from 'react';
import '../../styles/EachMenu.css'

function Sandwiches () {
  return (
    <div>
      [sandwich]
      <h1>SIGNATURE COLD SANDWICHES</h1>
      <h5>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h5>
      <div className='menu-wrapper'>
        <div className='item-box'>
          <span>ITALIAN<br/>
          GENOA SALAMI, CAPICOLA, PROVOLONE CHEESE, LETTUCE, TOMATOES, ONIONS, HOT PEPPERS, OIL & VINEGAR</span>
        </div>
        <div className='item-box'>
          <span>AMERICAN<br/>
          VIRGINIA HAM, BLACK FOREST HAM, AMERICAN CHEESE, LETTUCE, TOMATOES, MAYO</span>
        </div>
        <div className='item-box'>
          <span>TABLETIME<br/>
          SMOKED TURKEY, CORNED BEEF, COLESLAW, SWISS CHEESE, RUSSIAN DRESSING</span>
        </div>
        <div className='item-box'>
          <span>CT<br/>
          TURKEY BREAST, CORNED BEEF, COLESLAW, SWISS CHEESE, RUSSIAN DRESSING</span>
        </div>
        <div className='item-box'>
          <span>GREEN TURKEY<br/>
          TURKEY BREAST, BRIE CHEESE, SLICED GRANNY SMITH APPLE, LETTUCE, HONEY MUSTARD</span>
        </div>
      </div>

      <h1>VEGETARIAN SANDWICHES</h1>
      <h5>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h5>
      <div className='menu-wrapper'>
        <div className='item-box'>
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
        </div>
      </div>

      <h1>SIGNATURE HOT SANDWICHES</h1>
      <h5>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h5>
      <div className='menu-wrapper'>
        <div className='item-box'>
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
        </div>
      </div>

      <h1>HOT SANDWICHES</h1>
      <h5>SLICED BREAD or ROLL $7.49 / WRAPS or HERO $8.99</h5>
      <div className='menu-wrapper'>
        <div className='item-box'>
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
        </div>
      </div>
    </div>
  )
}

export default Sandwiches;
