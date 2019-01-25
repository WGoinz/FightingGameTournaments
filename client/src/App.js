import React, { Component } from 'react';
import styled from "styled-components"
import './App.css';

const Main = styled.div`
background-color:#5EC9DB;
font-family: 'Sanchez', serif;
h1{
  font-size: 75px;
}`
class App extends Component {
  render() {
    return (
      <Main className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fighting Game Tournaments</h1>
        </div>
      </Main>
    );
  }
}

export default App;
