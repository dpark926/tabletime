import React, {Component} from 'react'
import Header from '../components/Header.js'
import { Link } from 'react-router-dom'
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
        <div>Breakfast</div>
        <div>Lunch</div>
        <BreakfastContainer/>
        <LunchContainer/>
      </div>
    )
  }
}

export default MenuContainer
