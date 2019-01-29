import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"

class Champion extends Component {
    state = {
        champion: {},
        groups: []
    }
    getChampion = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}`).then((res) => {
            console.log(res.data)
            this.setState({ champion: res.data })
            this.getGroups()
        })
    }
    componentDidMount = () => {
        this.getChampion()
    }
    getGroups = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}`).then((res) => {
            console.log(res.data.groups)
            this.setState({ groups: res.data.groups })
        })
    }
    render() {
        return (
            <div>
                <Banner />
                <h1>Champion</h1>
                <h3>Game Played: {this.state.champion.gamePlayed}</h3>
                <h3>Gamertag: {this.state.champion.gamertag}</h3>

            </div>
        );
    }
}

export default Champion;