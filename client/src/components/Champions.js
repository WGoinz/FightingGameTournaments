import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"


const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
div{
    display: flex;
}
`

class Champions extends Component {
    render() {
        let championsArray = this.props.champions.map((champion, i) => {
            return (
                <Main key={i}>
                    <h2>{champion.gamertag}</h2>
                    <p>{champion.gamePlayed}</p>
                    <p>{champion.record}</p>
                    <Link to={`/tournaments/${this.props.tournamentId}/champions/${champion._id}`}><h1>View</h1></Link>
                </Main>
            )
        })
        return (
            <div>
                <h1>Champions</h1>
                <div>
                    {championsArray}
                </div>
            </div>
        );
    }
}

export default Champions;