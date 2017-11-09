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
          <div className='lunch-category'>Sandwiches</div>
        </Link>
        <Link to="/lunch/salads">
          <div className='lunch-category'>Salads</div>
        </Link>
        <Link to="/lunch/burgers">
          <div className='lunch-category'>Burgers</div>
        </Link>
        <Link to="/lunch/quesadillas">
          <div className='lunch-category'>Quesadillas</div>
        </Link>
        <Link to="/lunch/wraps">
          <div className='lunch-category'>Wraps</div>
        </Link>
        <Link to="/lunch/paninis">
          <div className='lunch-category'>Paninis</div>
        </Link>
        <Link to="/lunch/asian">
          <div className='lunch-category'>Asian</div>
        </Link>

      </div>
    )
  }
}

export default LunchContainer
