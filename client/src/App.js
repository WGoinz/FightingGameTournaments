import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './HomePage';
import Tournaments from './components/Tournaments';
import Tournament from './components/Tournament';




class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tournaments/:tournamentId" component={Tournament} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
