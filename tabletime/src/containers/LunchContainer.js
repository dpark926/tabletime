import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LunchContainer extends Component {
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
      <div className='lunch-container'>
        <Link to="/lunch/sandwiches" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='sandwiches'>
            <span className={ 'sandwiches' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='sandwiches'>
              SANDWICHES
            </span>
          </div>
        </Link>
        <Link to="/lunch/salads" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='salads'>
            <span className={ 'salads' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='salads'>
              SALADS
            </span>
          </div>
        </Link>
        <Link to="/lunch/burgers" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='burgers'>
            <span className={ 'burgers' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='burgers'>
              BURGERS
            </span>
          </div>
        </Link>
        <Link to="/lunch/quesadillas" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='quesadillas'>
            <span className={ 'quesadillas' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='quesadillas'>
              QUESADILLAS
            </span>
          </div>
        </Link>
        <Link to="/lunch/wraps" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='wraps'>
            <span className={ 'wraps' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='wraps'>
              WRAPS
            </span>
          </div>
        </Link>
        <Link to="/lunch/paninis" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='paninis'>
            <span className={ 'paninis' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='paninis'>
              PANINIS
            </span>
          </div>
        </Link>
        <Link to="/lunch/asian" className='lunch-category' onClick={this.handleClickedSubNav}>
          <div id='asian'>
            <span className={ 'asian' === this.state.clickedSubNav ? 'active-subnav subnav-hover' : 'subnav-hover' } id='asian'>
              ASIAN
            </span>
          </div>
        </Link>
      </div>
    )
  }
}

export default LunchContainer
