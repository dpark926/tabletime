import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Navigation.css';

import handleNavClick from '../actions/clickActions';

class Navigation extends Component {
  handleClickedNav = ( event ) => {
    this.props.handleClickedNav( event.target.id );
  }

  render() {
    return (
      <nav className='navigation'>
        <Link to="/breakfast" onClick={this.handleClickedNav}>
          <div className='breakfast-lunch-link' id='breakfast-menu'>
            <span className={ 'breakfast-menu' === this.props.clickedNav ? 'active-nav nav-hover' : 'nav-hover' } id='breakfast-menu'>
              BREAKFAST MENU
            </span>
          </div>
        </Link>
        <Link to="/lunch" onClick={this.handleClickedNav}>
          <div className='breakfast-lunch-link' id='lunch-menu'>
            <span className={ 'lunch-menu' === this.props.clickedNav ? 'active-nav nav-hover' : 'nav-hover' } id='lunch-menu'>
              LUNCH MENU
            </span>
          </div>
        </Link>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleClickedNav: handleNavClick.handleNavClick
}

export default connect( mapStateToProps, mapActionsToProps )( Navigation );
