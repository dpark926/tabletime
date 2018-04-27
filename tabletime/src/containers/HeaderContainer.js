import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/Menu.css';
import '../styles/HeaderContainer.css';
import logo from '../styles/imgs/tabletime-black.png';

class MenuContainer extends Component {
  render = () => {
    return (
      <header className='header-container'>
        <div className='header-logo'>
          <Link to="/">
            <img src={ logo }></img>
          </Link>
        </div>
        <Header/>
        <Navigation/>
      </header>
    )
  }
}

export default MenuContainer;
