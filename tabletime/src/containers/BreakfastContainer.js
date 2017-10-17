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
        <Link to="/coffee-tea">
          <div>Coffee & Tea</div>
        </Link>
        <Link to="/coffee-tea">
          <div>Bagels</div>
        </Link>
        <Link to="/coffee-tea">
          <div>Breakfast</div>
        </Link>
        <Link to="/coffee-tea">
          <div>Pastries</div>
        </Link>
      </div>
    )
  }
}

export default BreakfastContainer
