import React from 'react';
import PASTRIES_DATA from '../../data/breakfast/PASTRIES';
import MapItems from '../MapItems';
import '../../styles/EachMenu.css'

function Pastries () {
  const data = PASTRIES_DATA.items;

  const pastryItems = MapItems( data );

  return (
    <div className='contents'>
      <h1>PASTRIES</h1>
      <div className='menu-wrapper'>
        { pastryItems }
      </div>
    </div>
  )
}

export default Pastries;
