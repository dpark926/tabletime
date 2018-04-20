import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Navigation () {
  return (
    <div className='navigation'>
      <Link to="/breakfast">
        <div className='breakfast-lunch-link'>Breakfast</div>
      </Link>
      <Link to="/lunch">
        <div className='breakfast-lunch-link'>Lunch</div>
      </Link>
    </div>
  )
}

export default Navigation;


