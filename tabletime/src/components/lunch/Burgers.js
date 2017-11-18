import React from 'react';

function Burgers () {
  return (
    <div>
      [burger]
      <h1>BURGERS</h1>
      <h5>(ALL NATURAL 1/2 LB BEEF)</h5>
      <div className='menu-wrapper'>
        <div className='item-box'>
          HAMBURGER
          $4.50
        </div>
        <div className='item-box'>
          CHEESEBURGER
          $4.95
        </div>
        <div className='item-box'>
          BACON CHEESE BURGER
          $5.95
        </div>
        <div className='item-box'>
          TURKEY BURGER
          $4.95
        </div>
        <div className='item-box'>
          VEGGIE BURGER
          $4.95
        </div>
        <div className='item-box'>
          CALIFORNIA BURGER
          $6.95
        </div>
        <div className='item-box'>
          BACON AVOCADO, ALFALFA SPROUTS, LETTUCE, TOMATOES
        </div>
    </div>

      ADDITIONALS
      <ul>
      DELUXE BURGER SERVED WITH FRENCH FRIES, LETTUCE, TOMATOES, PICKLE
      $2.00 ADDITIONAL
      ADD TOMATOES
      $0.50
      ADD CHEESE
      $0.50
      ADD BACON
      $1.00
      </ul>
    </div>
  )
}

export default Burgers;
