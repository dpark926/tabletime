import React from 'react';

function Salads () {
  return (
    <div>
      [salad]
      <h1>HOMESTYLE SALADS</h1>
      <div className='menu-wrapper'>
        <div className='item-box'>
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
        </div>
      </div>

      <h1>CUSTOM SALADS</h1>
      <h5>SMALL $7.95 / LARGE $8.95</h5>
      <div className='menu-wrapper'>
        <div className='item-box'>
          (STEP 1) CHOOSE A GREEN
          CRISPY ROMAIN / BABY SPINACH/ ORGANIC MESCLUN, KALE
        </div>
        <div className='item-box'>
          (STEP 2) CHOOSE A PROTEIN
          TUNA SALAD/ TURKEY / HAM / GRILLED CHICKEN / CRISPY CHICKEN / ALBACORE TUNA / CHICKEN SALAD
        </div>
        <div className='item-box'>
          (STEP 3) CHOOSE 2 PREMIUM INGREDIENTS
          GOLDEN RAISIN, BLUE CHEESE CRUMBS, SUNFLOWER SEEDS, FETA CHEESE, TOASTED PINE NUTS, WALNUTS, CHEDDAR CHEESE, PARMESAN CHEESE, DRIED CRANBERRIES, FRESH MOZZARELLA, BOILED EGG, SUN DRIED TOMATOES, EGG WHITE, AVOCADO
        </div>
        <div className='item-box'>
          (STEP 4) CHOOSE UNLIMITED VEGETABLES
          BLACK OLIVE, BLACK BEANS, KALAMETA OLIVE, MUSHROOMS, CORN, ARTICHOKE HEARTS, PLUM TOMATOES, CHINESE NOODLES, ALFALFA SPROUTS, JALAPENOS, GREEN PEAS, BROCCOLI FLORETS, CHICK PEAS, BELL PEPPERS, CELERY, CROUTON, CHERRY TOMATOES, STRING BEANS, GRANNY SMITH APPLES, MANDARIN ORANGE, RED BEETS, ROASTED ZUCCHINI, ASPARAGUS, ROASTED EGGPLANT, EDAMAME, PORTOBELLO MUSHROOMS, ROASTED RED PEPPERS, BRUSSEL SPROUTS, HEARTS OF PALM
        </div>
        <div className='item-box'>
          (STEP 5) CHOOSE A DRESSING
          BLUE CHEESE, RUSSIAN, CREAMY ITALIAN, FRENCH, HOUSE CAESAR, HONEY DIJON, LOW FAT HONEY MUSTARD, LIT ITALIAN, BALSAMIC VINAIGRETTE, ASIAN SESAME GINGER, CLASSIC RANCH, LITE RANCH, RASPBERRY VINAIGRETTE, BALSAMIC VINEGAR, LEMON JUICE, OLIVE OIL, RED WINE VINEGAR
        </div>
      </div>
    </div>
  )
}

export default Salads;
