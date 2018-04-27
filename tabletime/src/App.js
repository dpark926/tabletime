import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// Containers
import HeaderContainer from './containers/HeaderContainer.js';
import BreakfastContainer from './containers/BreakfastContainer.js';
import LunchContainer from './containers/LunchContainer.js';
// Components
import CoffeeTea from './components/breakfast/CoffeeTea.js';
import Bagels from './components/breakfast/Bagels.js';
import Breakfast from './components/breakfast/Breakfast.js';
import Pastries from './components/breakfast/Pastries.js';
import Sandwiches from './components/lunch/Sandwiches.js';
import Salads from './components/lunch/Salads.js';
import Burgers from './components/lunch/Burgers.js';
import Wraps from './components/lunch/Wraps.js';
import Quesadillas from './components/lunch/Quesadillas.js';
import Paninis from './components/lunch/Paninis.js';
import Asian from './components/lunch/Asian.js';
// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <HeaderContainer/>
          <main>
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
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
