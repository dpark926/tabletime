import React from 'react';
import PANINIS_DATA from '../../data/lunch/PANINIS';

function Paninis () {
  const data = PANINIS_DATA.items;

  const paniniItems = data.map( item => {
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
      {/* [panini] */}
      <h1>PRESSED PANINI SANDWICHES</h1>
      <h4>$7.45</h4>
      <div className='menu-wrapper'>
        { paniniItems }
      </div>
      {/* CHICKEN FAJITA
      GRILLED CHICKEN, CHEDDAR CHEESE, ROASTED RED PEPPERS, CARAMELIZED ONIONS, SALSA
      CHIPOTLE STEAK
      STEAK, CHEDDAR CHEESE, CHIPOTLE DRESSING
      CHIPOTLE LIME
      GRILLED CHICKEN, SWISS CHEESE, PICO DE GALLO, CHIPOTLE LIME SAUCE
      SANTE FE
      PEPPER TURKEY, AVOCADO, LETTUCE, TOMATO, PEPPER JACK CHEESE, MAYO
      CALIFORNIA
      GRILLED CHICKEN, FRESH MOZZARELLA CHEESE, SUN DRIED TOMATOES, PESTO SAUCE
      PACIFIC
      GRILLED CHICKEN, AVOCADO, BACON, CHEDDAR CHEESE
      BUFFALO CHICKEN
      BUFFALO GRILLED CHICKEN, PEPPER JACK CHEESE, BLUE CHEESE DRESSING
      MILANO
      CHICKEN CUTLET, AVOCADO, FRESH MOZZARELLA CHEESE, LETTUCE, TOMATOES, RUSSIAN DRESSING
      CHICKEN CORDON BLEU
      CHICKEN CUTLET, HAM, SWISS CHEESE, MAYO
      TUSCAN
      FRESH MOZZARELLA CHEESE, ROASTED RED PEPPERS, FRESH BASIL, TOMATOES, BALSAMIC VINEGAR
      RUSSIAN
      ROAST BEEF, MUENSTER CHEESE, CARAMELIZED ONIONS, LETTUCE, TOMATOES, RUSSIAN DRESSING
      MONTE CRISTO
      HAM, SMOKED TURKEY, SWISS CHEESE, CHEDDAR CHEESE, LETTUCE, TOMATOES, HONEY MUSTARD
      PHIILLY
      CHEESE STEAK, PEPPERS AND ONIONS */}
    </div>
  )
}

export default Paninis;
