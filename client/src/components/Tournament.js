import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"
import styled from "styled-components"
import Champions from './Champions';


const Column = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
`
const Main = styled.div`
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
margin-top: 10px;
h3 {
    border-top: 25px solid #323234;
    font-size: 25px;
    margin-right: 10px;
    background-color:#5EC9DB ;

}
`

class Tournament extends Component {
    state = {
        tournament: {},
        championsArray: []
    }
    getEventNames = () => {
        let newTournament = { ...this.state }
        newTournament.tournament.events.forEach(event => {
            const eventName = event.name
            newTournament.championsArray.push(eventName)
        })
        this.setState({ championsArray: newTournament.championsArray })
        console.log(newTournament)
        console.log(this.state)
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
        })
    }
    componentDidMount = async () => {
        this.getSingleTournament()
    }
    createChampions = () => {
        let events = this.state.tournament.events
        events.forEach((event) => {
            let eventObject = {
                gamePlayed: event.name
            }
            axios.post(`/api/tournaments/${this.props.match.params.tournamentId}/champions`, eventObject).then((res) => {
                // console.log(res.data)
            })
        })
    }
    render() {

        return (
            <div>
                <Banner />
                <Main>
                    <h3>{this.state.tournament.name}</h3>
                    <h3>{this.state.tournament.location}</h3>
                </Main>
                <button onClick={this.deleteTournament}>Delete Tournament</button>
                <button onClick={this.createChampions}>Show Events</button>
                <Champions params={this.props.match.params.tournamentId} />
            </div >
        )
    }
}

export default Tournament;