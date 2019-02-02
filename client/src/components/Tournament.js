import React, { Component } from 'react';
import Banner from './Banner';
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Events = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
margin-top: 10px;
h1 {
    border-top: 25px solid #323234;
    font-size: 40px;
}
`
const Main = styled.div`
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
justify-content: space-between;
margin-top: 10px;
h3 {
    border-top: 25px solid #323234;
    font-size: 25px;
    margin: 5px;
    background-color:#5EC9DB ;
    padding:5px;

}
`
const Column = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
border-bottom: 2px solid #323234;
`

class Tournament extends Component {
    state = {
        tournament: {},
        championsArray: [],
        champions: []
    }

    deleteTournament = () => {
        axios.delete(`/api/tournaments/${this.props.match.params.tournamentId}`)
            .then((res) => {
                // console.log(res)
                window.location = res.data.redirect
            })
    }
    getSingleTournament = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}`).then((res) => {
            console.log(res.data)
            this.setState({ tournament: res.data })
            let championLength = this.state.tournament.champions.length
            let eventLength = this.state.tournament.events.length
            console.log(eventLength)
            if (championLength !== eventLength){
                this.createChampions()
                this.getChampions()
            }
            console.log(championLength)
        })
    }
    componentDidMount = async () => {
        this.getSingleTournament()
        this.getChampions()
    }
    createChampions = () => {
        let events = this.state.tournament.events
        let groups = this.state.tournament.groups
        for (let i = 0; i < events.length || i < groups.length; i++) {
            let champion = {
                gamePlayed: events[i].name,
                gamertag: groups[i].id
            }
            axios.post(`/api/tournaments/${this.props.match.params.tournamentId}/champions`, champion).then((res) => {
                console.log(res.data.champions)
                this.getChampions()
            })
            console.log(champion)

        }
        // window.location = `/tournaments/${this.props.match.params.tournamentId}`
    }
    getChampions = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}/champions`).then((res) => {
            // console.log(res.data)
            this.setState({ champions: res.data })
            console.log(this.state.champions)
        })
    }
    render() {

        let showChampions = this.state.champions.map((champion, i) => {
            return (
                <Column key={i}>
                    <Link to={`/tournaments/${this.props.match.params.tournamentId}/champions/${champion._id}`}><h4>{champion.gamePlayed}</h4></Link>
                </Column>
            )
        })

        return (
            <div>
                <Banner />
                <Main>
                    <h3>{this.state.tournament.name}</h3>
                    <h3>{this.state.tournament.location}</h3>
                </Main>
                <button onClick={this.deleteTournament}>Remove Tournament</button>
                <button onClick={this.createChampions}>Create Events</button>
                <Events>
                    <h1>Events</h1>
                    {showChampions}
                </Events>
            </div >
        )
    }
}

export default Tournament;