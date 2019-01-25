import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"


class Tournament extends Component {
    deleteTournament = () => {
        axios.delete(`/api/tournaments/${this.props.match.params.tournamentId}`)
            .then((res) => {
                console.log(res)
                window.location = res.data.redirect
            })
    }
    render() {
        return (
            <div>
                <Banner />
                <h1>Tournament View</h1>
                <h2>{this.props.match.params.tournamentId}</h2>
                <button onClick={this.deleteTournament}>Delete Tournament</button>
            </div>
        );
    }
}

export default Tournament;