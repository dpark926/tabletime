import React from 'react';
import QUESADILLAS_DATA from '../../data/lunch/QUESADILLAS';
import MapItems from '../MapItems';

function Quesadillas () {
  const data = QUESADILLAS_DATA.items;

  const quesadillaItems = MapItems( data );

  return (
    <div className='contents'>
      <h1>{ QUESADILLAS_DATA.heading }</h1>
      <h4></h4>
      <div className='menu-wrapper'>
        { quesadillaItems }
      </div>
    </div>
  )
}

export default Quesadillas;
