import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"
import styled from "styled-components"

const Main = styled.div`
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
justify-content: center;
margin-top: 10px;
h2 {
    border-top: 25px solid #323234;
    font-size: 40px;
    margin: 5px;
    background-color:#5EC9DB ;
    padding:5px;

}
`
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
                <Main>
                    <h2>Game Played: {this.state.champion.gamePlayed}</h2>
                    <h2>Tournament ID: {this.state.champion.gamertag}</h2>
                </Main>
                <Main>
                    <button onClick={this.showStandings}>Show Standings</button>
                    <button onClick={this.deleteChampion}>Delete Champion</button>
                </Main>
            </div>
        );
    }
}

export default Champion;