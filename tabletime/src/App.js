import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MenuContainer from './containers/MenuContainer.js'
import CoffeeTea from './components/breakfast/CoffeeTea.js'
import Bagels from './components/breakfast/Bagels.js'
import Breakfast from './components/breakfast/Breakfast.js'
import Pastries from './components/breakfast/Pastries.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <MenuContainer/>
        <Route path="/coffee-tea" component={CoffeeTea}/>
        <Route path="/bagels" component={Bagels}/>
        <Route path="/breakfast" component={Breakfast}/>
        <Route path="/pastries" component={Pastries}/>
      </div>
    );
  }
}

export default App;
