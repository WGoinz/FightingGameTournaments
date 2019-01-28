import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"
import Champions from './Champions';


class Tournament extends Component {
    state = {
        tournament: {
            champions: [],
            phases: [],
            name: "",
            date: "",
            location: ""
        },

    }
    getEvents = () => {
        let newChampions = this.state.tournament
        let champions = []
        let newArray = newChampions.phases.map(champion => {
            const eventId = {
                event: champion.eventId
            }
            return (
                axios.post(`/api/tournament/${this.props.match.params.tournamentId}`, eventId)
                    .then((res) => {
                        // console.log(res.data.entities.event.name)
                        let eventName = res.data.entities.event.name
                        champions.push(eventName)
                        // console.log(champions)
                        this.setState({
                            tournament: {
                                champions: champions,
                                phases: newChampions.phases,
                                name: newChampions.name,
                                date: newChampions.date,
                                location: newChampions.location,
                            }
                        })
                        console.log(this.state.tournament)
                    })
            )
        })
        console.log(this.state.tournament)
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
            this.getEvents()
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
                <div>
                    <h3>{this.state.tournament.name}</h3>
                    <h3>{this.state.tournament.location}</h3>
                </div>
                <button onClick={this.deleteTournament}>Delete Tournament</button>
                <div>
                    <Champions phases={this.state.tournament.phases} tournamentId={this.props.match.params.tournamentId} champions={this.state.tournament.champions} />
                </div>
            </div >
        );
    }
}

export default Tournament;