import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"
import Champions from './Champions';


class Tournament extends Component {
    state = {
        tournament: {
            champions: [],
            phases: []
        },

    }
    createChampions = () => {
        let newChampions = this.state.tournament.phases
        console.log(newChampions)
        // axios.post(`/api/tournaments`, newChampions).then((res) => {
        //     // console.log(res.data)
        //     this.getChampions()
        // })
    }
    deleteTournament = () => {
        axios.delete(`/api/tournaments/${this.props.match.params.tournamentId}`)
            .then((res) => {
                console.log(res)
                window.location = res.data.redirect
            })
    }
    getSingleTournament = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}`).then((res) => {
            // console.log(res.data)
            this.setState({ tournament: res.data })
            console.log(this.state.tournament)
            this.createChampions()
        })
    }
    getChampions = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}/champions`).then((res) => {
            // console.log(res.data)
            this.setState({
                tournament: {
                    champions: res.data
                }
            })
            console.log(this.state.tournament.champions)
        })
    }
    componentDidMount = async () => {
        await this.getSingleTournament()
        this.getChampions()
    }
    render() {
        return (
            <div>
                <Banner />
                <h1>{this.state.tournament.name}</h1>
                <button onClick={this.deleteTournament}>Delete Tournament</button>
                <div>
                    <Champions tournamentId={this.props.match.params.tournamentId} champions={this.state.tournament.champions} />
                </div>
            </div>
        );
    }
}

export default Tournament;