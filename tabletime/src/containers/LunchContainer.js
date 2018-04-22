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
        <Link to="/lunch/sandwiches" className='lunch-category'>
          <div>SANDWICHES</div>
        </Link>
        <Link to="/lunch/salads" className='lunch-category'>
          <div>SALADS</div>
        </Link>
        <Link to="/lunch/burgers" className='lunch-category'>
          <div>BURGERS</div>
        </Link>
        <Link to="/lunch/quesadillas" className='lunch-category'>
          <div>QUESADILLAS</div>
        </Link>
        <Link to="/lunch/wraps" className='lunch-category'>
          <div>WRAPS</div>
        </Link>
        <Link to="/lunch/paninis" className='lunch-category'>
          <div>PANINIS</div>
        </Link>
        <Link to="/lunch/asian" className='lunch-category'>
          <div>ASIAN</div>
        </Link>
      </div>
    )
  }
}

export default LunchContainer
