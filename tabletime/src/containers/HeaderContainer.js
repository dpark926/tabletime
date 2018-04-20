import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/Menu.css';
import '../styles/HeaderContainer.css';
import logo from '../styles/imgs/tabletime-black.png';

class MenuContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <header className='header-container'>
        <Link to="/">
          <div className='header-logo'>
            <img src={ logo }></img>
          </div>
        </Link>
        <Header/>
        <Navigation/>
      </header>
    )
  }
}

export default MenuContainer
