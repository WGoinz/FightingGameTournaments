import React, { Component } from 'react';
import NewTournamentURL from './NewTournamentURL';
import styled from "styled-components"
import { Link } from "react-router-dom"




const Div = styled.div`
font-family: 'Sanchez', serif;
`

const Header = styled.h1`
background-color:#5EC9DB ;
display: inline-block;
margin-bottom: 15px;
padding: 5px;
text-transform: uppercase;
`

class Tournaments extends Component {
    componentDidMount() {
        this.props.getTournaments()
    }
    render() {
        const tournaments = this.props.tournaments.map((tournament, i) => {
            return (
                <Div key={i}>
                    <Link to={`/tournaments/${tournament._id}`}><h3>{tournament.name}</h3></Link>
                </Div>
            )
        })
        return (
            <Div>
                <NewTournamentURL getTournaments={this.props.getTournaments} />
                <Header>Tournaments</Header>
                <div>
                    {tournaments}
                </div>
            </Div>
        );
    }
}

export default Tournaments;