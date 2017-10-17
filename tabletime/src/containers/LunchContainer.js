import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class LunchContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        [ lunch container ]
        <Link to="/lunch/sandwiches">
          <div>Sandwiches</div>
        </Link>
        <Link to="/lunch/salads">
          <div>Salads</div>
        </Link>
        <Link to="/lunch/burgers">
          <div>Burgers</div>
        </Link>
        <Link to="/lunch/quesadillas">
          <div>Quesadillas</div>
        </Link>
        <Link to="/lunch/wraps">
          <div>Wraps</div>
        </Link>
        <Link to="/lunch/paninis">
          <div>Paninis</div>
        </Link>
        <Link to="/lunch/asian">
          <div>Asian</div>
        </Link>

      </div>
    )
  }
}

export default LunchContainer
