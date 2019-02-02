import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios"
import './App.css';
import Tournament from './components/Tournament';
import HomePage from './components/HomePage';
import Champion from './components/Champion';
import Standings from './components/Standings';






class App extends Component {
  state = {
    tournaments: [],
  }
  getTournaments = () => {
    axios.get("/api/tournaments").then((res) => {
      // console.log(res.data)
      this.setState({ tournaments: res.data })
      // console.log(this.state.tournaments)
    })
  }
  render() {
    const HomePageComponent = () => {
      return (<HomePage getTournaments={this.getTournaments} tournaments={this.state.tournaments} />)
    }




    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomePageComponent} />
          <Route exact path="/tournaments/:tournamentId" component={Tournament} />
          <Route exact path='/tournaments/:tournamentId/champions/:championId' component={Champion} />
          <Route exact path='/tournaments/:tournamentId/champions/:championId/standings' component={Standings} />
        </Switch>
      </Router>
    );
  }
}

export default App;
