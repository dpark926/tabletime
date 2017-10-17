import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MenuContainer from './containers/MenuContainer.js'
import BreakfastContainer from './containers/BreakfastContainer.js'
import LunchContainer from './containers/LunchContainer.js'
import CoffeeTea from './components/breakfast/CoffeeTea.js'
import Bagels from './components/breakfast/Bagels.js'
import Breakfast from './components/breakfast/Breakfast.js'
import Pastries from './components/breakfast/Pastries.js'
import Sandwiches from './components/lunch/Sandwiches.js'
import Salads from './components/lunch/Salads.js'
import Burgers from './components/lunch/Burgers.js'
import Wraps from './components/lunch/Wraps.js'
import Quesadillas from './components/lunch/Quesadillas.js'
import Paninis from './components/lunch/Paninis.js'
import Asian from './components/lunch/Asian.js'

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

        <Route path="/breakfast" component={BreakfastContainer}/>
        <Route path="/lunch" component={LunchContainer}/>

        <Route path="/breakfast/coffee-tea" component={CoffeeTea}/>
        <Route path="/breakfast/bagels" component={Bagels}/>
        <Route path="/breakfast/breakfast" component={Breakfast}/>
        <Route path="/breakfast/pastries" component={Pastries}/>

        <Route path="/lunch/sandwiches" component={Sandwiches}/>
        <Route path="/lunch/salads" component={Salads}/>
        <Route path="/lunch/burgers" component={Burgers}/>
        <Route path="/lunch/wraps" component={Wraps}/>
        <Route path="/lunch/quesadillas" component={Quesadillas}/>
        <Route path="/lunch/paninis" component={Paninis}/>
        <Route path="/lunch/asian" component={Asian}/>
      </div>
    );
  }
}

export default App;
