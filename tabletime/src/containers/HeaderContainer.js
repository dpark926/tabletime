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
      clickedNav: ''
    }
  }

  handleClickedNav = ( event ) => {
    this.setState({
      clickedNav: event.target.id
    })
  }

  render = () => {
    console.log(this.state.clickedNav)
    return (
      <header className='header-container'>
        <div className='header-logo'>
          <Link to="/">
            <img src={ logo }></img>
          </Link>
        </div>
        <Header/>
        <Navigation
          handleClickedNav={this.handleClickedNav}
          clickedNav={this.state.clickedNav}
        />
      </header>
    )
  }
}

export default MenuContainer
