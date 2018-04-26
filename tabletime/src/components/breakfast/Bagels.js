import React from 'react';
import BAGELS_DATA from '../../data/breakfast/BAGELS';
import MapItems from '../MapItems';
import '../../styles/EachMenu.css';

function Bagels () {
  const data = BAGELS_DATA.items;

  const bagelItems = MapItems( data );

  const emptyItem = data.length % 2 !== 0 ? <div className='item-box'></div> : null

  return (
    <div className='contents'>
      <h1>{ BAGELS_DATA.heading }</h1>
      <div className='menu-wrapper'>
        { bagelItems }
        { emptyItem }
      </div>
    </div>
  )
}

export default Bagels;
