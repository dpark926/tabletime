import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BreakfastLunch.css';

class BreakfastContainer extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render = () => {
    return (
      <div className='breakfast-container'>
        {/* [ breakfast container ] */}
        <Link to="/breakfast/coffee-tea" className='breakfast-category'>
          <div>COFFEE & TEA</div>
        </Link>
        <Link to="/breakfast/bagels" className='breakfast-category'>
          <div>BAGELS</div>
        </Link>
        <Link to="/breakfast/breakfast" className='breakfast-category'>
          <div>BREAKFAST</div>
        </Link>
        <Link to="/breakfast/pastries" className='breakfast-category'>
          <div>PASTRIES</div>
        </Link>
      </div>
    )
  }
}

export default BreakfastContainer;
