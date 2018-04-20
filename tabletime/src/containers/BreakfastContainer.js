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
        <Link to="/breakfast/coffee-tea">
          <div className='breakfast-category'>COFFEE & TEA</div>
        </Link>
        <Link to="/breakfast/bagels">
          <div className='breakfast-category'>BAGELS</div>
        </Link>
        <Link to="/breakfast/breakfast">
          <div className='breakfast-category'>BREAKFAST</div>
        </Link>
        <Link to="/breakfast/pastries">
          <div className='breakfast-category'>PASTRIES</div>
        </Link>
      </div>
    )
  }
}

export default BreakfastContainer;
