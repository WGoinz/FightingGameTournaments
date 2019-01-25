import React, { Component } from 'react';
import styled from "styled-components"
import NewTournamentURL from './NewTournamentURL';
const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
div{
  display: flex;
justify-content: center;
}
`
class Banner extends Component {
    render() {
        return (
            <div>
                <Main className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fighting Game Tournaments</h1>
                    </div>
                </Main>
                <NewTournamentURL />
            </div>
        );
    }
}

export default Banner;