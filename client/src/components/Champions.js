import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"



const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
margin-top: 10px;
h1 {
    border-top: 25px solid #323234;
    font-size: 40px;
}
`
const Column = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
border-bottom: 2px solid #323234;
`

class Champions extends Component {
    state = {
        champions: []
    }
    getChampions = () => {
        axios.get(`/api/tournaments/${this.props.params}/champions`).then((res) => {
            // console.log(res.data)
            this.setState({ champions: res.data })
            console.log(this.state.champions)
        })
    }
    componentDidMount = () => {
        this.getChampions()
    }
    render() {
        let championsArray = this.state.champions.map((champion, i) => {
            return (
                <Column key={i}>
                    <Link to={`/tournaments/${this.props.params}/champions/${champion._id}`}><h4>{champion.gamePlayed}</h4></Link>
                </Column>
            )
        })
        return (
            <div>
                <Main>
                    <h1>Events</h1>
                    {championsArray}
                </Main>
            </div>
        );
    }
}

export default Champions;