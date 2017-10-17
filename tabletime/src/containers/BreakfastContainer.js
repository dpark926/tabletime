import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class BreakfastContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        [ breakfast container ]
        <Link to="/breakfast/coffee-tea">
          <div>Coffee & Tea</div>
        </Link>
        <Link to="/breakfast/bagels">
          <div>Bagels</div>
        </Link>
        <Link to="/breakfast/breakfast">
          <div>Breakfast</div>
        </Link>
        <Link to="/breakfast/pastries">
          <div>Pastries</div>
        </Link>
      </div>
    )
  }
}

export default BreakfastContainer
