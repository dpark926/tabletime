import React, {Component} from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import BreakfastContainer from './BreakfastContainer';
import LunchContainer from './LunchContainer';
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

        {/* <Route path="/breakfast-menu" component={BreakfastContainer}/>
        <Route path="/lunch-menu" component={LunchContainer}/> */}

        {/* <BreakfastContainer/>
        <LunchContainer/> */}
      </div>
    )
  }
}

export default MenuContainer
