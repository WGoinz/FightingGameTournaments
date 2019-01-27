import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
// import Tournaments from './components/Tournaments';
import Tournament from './components/Tournament';
import HomePage from './components/HomePage';
import Champion from './components/Champion';





class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/tournaments/" component={Tournaments} /> */}
            <Route exact path="/tournaments/:tournamentId" component={Tournament} />
            <Route exact path='/tournaments/:tournamentId/champions/:championId' component={Champion} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
