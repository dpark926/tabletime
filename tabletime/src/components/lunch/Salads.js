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
    <div>
      <h1>HOMESTYLE SALADS</h1>
      <div className='menu-wrapper'>
        { homestyleSaladItems }
        {/* <div className='item-box'>
          <span className='item-name'>GARDEN SALAD<br/>
          ROMAINE LETTUCE, TOMATOES, CUCUMBERS, CARROTS, MIXED PEPPERS, BLACK OLIVES, HOUSE DRESSING</span>
          <span className='item-price'>SM $3.95 / LG $6.95</span>
        </div>
        <div className='item-box'>
          ADD GRILLED CHICKEN, TUNA SALAD OR CHICKEN SALAD<br/>
          $1.50
        </div>
        <div className='item-box'>
          <span className='item-name'>CAESAR SALAD<br/>
          ROMAINE LETTUCE, CROUTON, PARMESAN CHEESE, CAESAR DRESSING</span>
          <span className='item-price'>SM $3.95 / LG $6.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>GRILLED CHICKEN CAESAR SALAD<br/>
          GRILLED CHICKEN, ROMAINE LETTUCE, PARMESAN CHEESE, CROUTONS, CAESAR DRESSING</span>
          <span className='item-price'>LG $7.95</span>
        </div>
        <div className='item-box'>
          <span className='item-name'>COBB SALAD<br/>
          GRILLED CHICKEN, ROMAINE LETTUCE, TOMATOES, BACON, BOILED EGG, BLUE CHEESE</span>
          <span className='item-price'>LG $7.95</span>
        </div> */}
      </div>

      <h1>CUSTOM SALADS</h1>
      <h4>SMALL $7.95 / LARGE $8.95</h4>
      <div className='menu-wrapper'>
        { customSaladItems }
        {/* <div className='item-box'>
          <div>(STEP 1)</div>
          <div>CHOOSE A GREEN</div>
          <div>CRISPY ROMAIN / BABY SPINACH/ ORGANIC MESCLUN, KALE</div>
        </div>
        <div className='item-box'>
          <div>(STEP 2)</div>
          <div>CHOOSE A PROTEIN</div>
          <div>TUNA SALAD/ TURKEY / HAM / GRILLED CHICKEN / CRISPY CHICKEN / ALBACORE TUNA / CHICKEN SALAD</div>
        </div>
        <div className='item-box'>
          <div>(STEP 3)</div>
          <div>CHOOSE 2 PREMIUM INGREDIENTS</div>
          <div>GOLDEN RAISIN, BLUE CHEESE CRUMBS, SUNFLOWER SEEDS, FETA CHEESE, TOASTED PINE NUTS, WALNUTS, CHEDDAR CHEESE, PARMESAN CHEESE, DRIED CRANBERRIES, FRESH MOZZARELLA, BOILED EGG, SUN DRIED TOMATOES, EGG WHITE, AVOCADO</div>
        </div>
        <div className='item-box'>
          <div>(STEP 4)</div>
          <div>CHOOSE UNLIMITED VEGETABLES</div>
          <div>BLACK OLIVE, BLACK BEANS, KALAMETA OLIVE, MUSHROOMS, CORN, ARTICHOKE HEARTS, PLUM TOMATOES, CHINESE NOODLES, ALFALFA SPROUTS, JALAPENOS, GREEN PEAS, BROCCOLI FLORETS, CHICK PEAS, BELL PEPPERS, CELERY, CROUTON, CHERRY TOMATOES, STRING BEANS, GRANNY SMITH APPLES, MANDARIN ORANGE, RED BEETS, ROASTED ZUCCHINI, ASPARAGUS, ROASTED EGGPLANT, EDAMAME, PORTOBELLO MUSHROOMS, ROASTED RED PEPPERS, BRUSSEL SPROUTS, HEARTS OF PALM</div>
        </div>
        <div className='item-box'>
          <div>(STEP 5)</div>
          <div>CHOOSE A DRESSING</div>
          <div>BLUE CHEESE, RUSSIAN, CREAMY ITALIAN, FRENCH, HOUSE CAESAR, HONEY DIJON, LOW FAT HONEY MUSTARD, LIT ITALIAN, BALSAMIC VINAIGRETTE, ASIAN SESAME GINGER, CLASSIC RANCH, LITE RANCH, RASPBERRY VINAIGRETTE, BALSAMIC VINEGAR, LEMON JUICE, OLIVE OIL, RED WINE VINEGAR</div>
        </div> */}
      </div>
    </div>
  )
}

export default Salads;
