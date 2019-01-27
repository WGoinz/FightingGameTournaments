import React, { Component } from 'react';
import NewTournamentURL from './NewTournamentURL';
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"



const Div = styled.div`
font-family: 'Sanchez', serif;
`

const Banner = styled.h1`
background-color:#5EC9DB ;
display: inline-block;
margin-bottom: 15px;
padding: 5px;
text-transform: uppercase;
`

class Tournaments extends Component {
    state = {
        tournaments: []
    }
    componentDidMount() {
        this.getTournaments()
    }
    getTournaments = () => {
        axios.get("/api/tournaments").then((res) => {
            // console.log(res.data)
            this.setState({ tournaments: res.data })
            console.log(this.state.tournaments)
        })
    }
    render() {
        const tournaments = this.state.tournaments.map((tournament, i) => {
            return (
                <Div key={i}>
                    <Link to={`/tournaments/${tournament._id}`}><h1>{tournament.name}</h1></Link>
                </Div>
            )
        })
        return (
            <Div>
                <NewTournamentURL getTournaments={this.getTournaments} />
                <Banner>Tournaments</Banner>
                <div>
                    {tournaments}
                </div>
            </Div>
        );
    }
}

export default Tournaments;