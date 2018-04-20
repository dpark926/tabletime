import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Navigation () {
  return (
    <nav className='navigation'>
      <Link to="/breakfast">
        <div className='breakfast-lunch-link'>BREAKFAST MENU</div>
      </Link>
      <Link to="/lunch">
        <div className='breakfast-lunch-link'>LUNCH MENU</div>
      </Link>
    </nav>
  )
}

export default Navigation;


