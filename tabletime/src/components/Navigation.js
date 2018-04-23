import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation ( props ) {
  return (
    <nav className='navigation'>
      <Link to="/breakfast" onClick={props.handleClickedNav}>
        <div className='breakfast-lunch-link' id='breakfast-menu'>
          <span className={ 'breakfast-menu' === props.clickedNav ? 'active-nav nav-hover' : 'nav-hover' } id='breakfast-menu'>
            BREAKFAST MENU
          </span>
        </div>
      </Link>
      <Link to="/lunch" onClick={props.handleClickedNav}>
        <div className='breakfast-lunch-link' id='lunch-menu'>
          <span className={ 'lunch-menu' === props.clickedNav ? 'active-nav nav-hover' : 'nav-hover' } id='lunch-menu'>
            LUNCH MENU
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Navigation;


