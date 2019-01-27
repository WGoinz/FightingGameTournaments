import React, { Component } from 'react';
import styled from "styled-components"

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