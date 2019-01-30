import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"
import Standings from './Standings';

class Champion extends Component {
    state = {
        champion: {},
        groups: [],
        standings: []
    }
    getChampion = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}`).then((res) => {
            console.log(res.data)
            this.setState({ champion: res.data })
            this.getStandings()
        })
    }
    getStandings = () => {
        let champion = { gamertag: this.state.champion.gamertag }
        console.log(champion)
        axios.post(`/api/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}`, champion).then((res) => {
            this.setState({ standings: res.data.entities.seeds })
            console.log(this.state.standings)
        })
    }
    showStandings = () => {
        let standings = { record: [this.state.standings] }
        console.log(standings)
        axios.put(`/api/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}`, standings).then((res) => {
            console.log(res)
        })
        window.location = `/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}/standings`
    }
    componentDidMount = () => {
        this.getChampion()
    }
    deleteChampion = () => {
        axios.delete(`/api/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}`)
            .then((res) => {
                console.log(res)
                window.location = res.data.redirect
            })
    }
    render() {
        return (
            <div>
                <Banner />
                <h1>Champion</h1>
                <h3>Game Played: {this.state.champion.gamePlayed}</h3>
                <h3>Gamertag: {this.state.champion.gamertag}</h3>
                <button onClick={this.showStandings}>Show Standings</button>
                <button onClick={this.deleteChampion}>Delete Champion</button>

            </div>
        );
    }
}

export default Champion;