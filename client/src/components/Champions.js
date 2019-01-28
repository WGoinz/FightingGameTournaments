import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"


const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
`
const Column = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
`

class Champions extends Component {
    render() {
        let championsArray = this.props.champions.map((champion, i) => {
            return (
                <Column key={i}>
                    {/* <h2>{champion.gamertag}</h2>
                    <p>{champion.gamePlayed}</p>
                    <p>{champion.record}</p> */}
                    <h3>{champion}</h3>
                    <Link to={`/tournaments/${this.props.tournamentId}/champions/${champion._id}`}><h3>View</h3></Link>
                </Column>
            )
        })
        return (
            <div>
                <h1>Champions</h1>
                <Main>
                    {championsArray}
                </Main>
            </div>
        );
    }
}

export default Champions;