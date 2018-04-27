import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/Menu.css';
import '../styles/HeaderContainer.css';
import logo from '../styles/imgs/tabletime-black.png';

class MenuContainer extends Component {
  constructor (props) {
    super(props)
    //
    // this.state = {
    //   clickedNav: ''
    // }
  }

  // handleClickedNav = ( event ) => {
  //   this.setState({
  //     clickedNav: event.target.id
  //   })
  // }

  // onUpdateUser(event) {
  //   this.props.onUpdateUser(event.target.value);
  // }

  render = () => {
    // console.log(this.props);

    return (
      <header className='header-container'>
        { this.props.clickedNav }
        { this.props.clickedSubNav }
        <div className='header-logo'>
          <Link to="/">
            <img src={ logo }></img>
          </Link>
        </div>
        <Header/>
        {/* <Navigation
          handleClickedNav={this.handleClickedNav}
          clickedNav={this.state.clickedNav}
        /> */}
        <Navigation/>
      </header>
    )
  }
}

// getting the whole state
// const mapStateToProps = state => {
//   return state;
// };

const mapStateToProps = state => ({
  clickedNav: state.clickedNav,
  clickedSubNav: state.clickedSubNav
});

export default connect(mapStateToProps)(MenuContainer);
