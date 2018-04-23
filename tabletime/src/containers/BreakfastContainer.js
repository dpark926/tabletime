import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BreakfastLunch.css';

class BreakfastContainer extends Component {
  constructor () {
    super()

    this.state = {
      clickedSubNav: ''
    }
  }

  handleClickedSubNav = ( event ) => {
    this.setState({
      clickedSubNav: event.target.id
    })
  }

  render = () => {
    return (
      <div className='breakfast-container'>
        <Link to="/breakfast/coffee-tea" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='coffee-tea'>
            <span className={ 'coffee-tea' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='coffee-tea'>
              COFFEE & TEA
            </span>
          </div>
        </Link>
        <Link to="/breakfast/bagels" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='bagels'>
            <span className={ 'bagels' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='bagels'>
              BAGELS
            </span>
          </div>
        </Link>
        <Link to="/breakfast/breakfast" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='breakfast'>
            <span className={ 'breakfast' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='breakfast'>
              BREAKFAST
            </span>
          </div>
        </Link>
        <Link to="/breakfast/pastries" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='pastries'>
            <span className={ 'pastries' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='pastries'>
              PASTRIES
            </span>
          </div>
        </Link>
      </div>
    )
  }
}

export default BreakfastContainer;
