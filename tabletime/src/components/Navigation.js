import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation () {
  return (
    <nav className='navigation'>
      <Link to="/breakfast" activeStyle={{ color: 'red' }} activeClassName="active">
        <div className='breakfast-lunch-link'>BREAKFAST MENU</div>
      </Link>
      <Link to="/lunch" activeStyle={{ color: 'red' }} activeClassName="active">
        <div className='breakfast-lunch-link'>LUNCH MENU</div>
      </Link>
    </nav>
  )
}

export default Navigation;


