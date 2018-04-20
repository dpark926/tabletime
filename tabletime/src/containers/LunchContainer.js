import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LunchContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div className='lunch-container'>
        [ lunch container ]
        <Link to="/lunch/sandwiches">
          <div className='lunch-category'>SANDWICHES</div>
        </Link>
        <Link to="/lunch/salads">
          <div className='lunch-category'>SALADS</div>
        </Link>
        <Link to="/lunch/burgers">
          <div className='lunch-category'>BURGERS</div>
        </Link>
        <Link to="/lunch/quesadillas">
          <div className='lunch-category'>QUESADILLAS</div>
        </Link>
        <Link to="/lunch/wraps">
          <div className='lunch-category'>WRAPS</div>
        </Link>
        <Link to="/lunch/paninis">
          <div className='lunch-category'>PANINIS</div>
        </Link>
        <Link to="/lunch/asian">
          <div className='lunch-category'>ASIAN</div>
        </Link>

      </div>
    )
  }
}

export default LunchContainer
