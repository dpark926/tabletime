import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/BreakfastLunch.css'

class BreakfastContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div class='breakfast-container'>
        [ breakfast container ]
        <Link to="/breakfast/coffee-tea">
          <div className='breakfast-category'>Coffee & Tea</div>
        </Link>
        <Link to="/breakfast/bagels">
          <div className='breakfast-category'>Bagels</div>
        </Link>
        <Link to="/breakfast/breakfast">
          <div className='breakfast-category'>Breakfast</div>
        </Link>
        <Link to="/breakfast/pastries">
          <div className='breakfast-category'>Pastries</div>
        </Link>
      </div>
    )
  }
}

export default BreakfastContainer
