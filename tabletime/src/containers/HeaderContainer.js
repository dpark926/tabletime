import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/Menu.css';
import '../styles/HeaderContainer.css';

class MenuContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div className='header-container'>
        <Link to="/">
          <div>[ tabletime logo ]</div>
        </Link>
        <Header/>
        <Navigation/>
      </div>
    )
  }
}

export default MenuContainer
