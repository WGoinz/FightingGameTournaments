import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"



class Tournament extends Component {
    state = {
        tournament: {
            champions: [],
            phases: [],
            name: "",
            date: "",
            location: "",
            url: ""
        },

    }
    getEventNames = () => {
        let newTournament = this.state.tournament
        let championsArray = []
        newTournament.events.map(champion => {
            const eventId = {
                event: champion.id
            }
            return (
                axios.post(`/api/tournaments/${this.props.match.params.tournamentId}`, eventId)
                    .then((res) => {
                        // console.log(res.data.entities.event.name)
                        let eventName = res.data.entities.event.name
                        newTournament.champions.push(eventName)
                        // console.log(champions)
                    })
            )
        })
        this.setState({ tournament: newTournament })
        console.log(this.state.tournament)
        // this.createChampions()
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
            console.log(res.data)
            this.setState({ tournament: res.data })
            this.getEventNames()
        })
    }
    componentDidMount = async () => {
        this.getSingleTournament()
    }
    createChampions = () => {
        let newChampions = this.state.tournament
        console.log(newChampions.champions)
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
            </div >
        );
    }
}

export default Tournament;