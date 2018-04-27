import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/BreakfastLunch.css';

import handleNavClick from '../actions/clickActions';

class BreakfastContainer extends Component {
  handleClickedSubNav = ( event ) => {
    this.props.handleClickedSubNav( event.target.id );
  }

  render = () => {
    return (
      <div className='breakfast-container'>
        <Link to="/breakfast/coffee-tea" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='coffee-tea'>
            <span className={ 'coffee-tea' === this.props.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='coffee-tea'>
              COFFEE & TEA
            </span>
          </div>
        </Link>
        <Link to="/breakfast/bagels" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='bagels'>
            <span className={ 'bagels' === this.props.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='bagels'>
              BAGELS
            </span>
          </div>
        </Link>
        <Link to="/breakfast/breakfast" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='breakfast'>
            <span className={ 'breakfast' === this.props.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='breakfast'>
              BREAKFAST
            </span>
          </div>
        </Link>
        <Link to="/breakfast/pastries" className='breakfast-category' onClick={this.handleClickedSubNav}>
          <div id='pastries'>
            <span className={ 'pastries' === this.props.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='pastries'>
              PASTRIES
            </span>
          </div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleClickedSubNav: handleNavClick.handleSubNavClick
}

export default connect( mapStateToProps, mapActionsToProps )( BreakfastContainer );
