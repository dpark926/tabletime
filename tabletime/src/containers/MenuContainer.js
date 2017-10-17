import React, {Component} from 'react'
import Header from '../components/Header.js'
import { Route, Redirect, Link } from 'react-router-dom'
import BreakfastContainer from './BreakfastContainer.js'
import LunchContainer from './LunchContainer.js'

class MenuContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        [ tabletime logo ]
        <Header/>
        <Link to="/breakfast">
          <div>Breakfast</div>
        </Link>
        <Link to="/lunch">
          <div>Lunch</div>
        </Link>

        {/* <Route path="/breakfast-menu" component={BreakfastContainer}/>
        <Route path="/lunch-menu" component={LunchContainer}/> */}

        {/* <BreakfastContainer/>
        <LunchContainer/> */}
      </div>
    )
  }
}

export default MenuContainer
