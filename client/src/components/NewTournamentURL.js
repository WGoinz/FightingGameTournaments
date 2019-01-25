import React, { Component } from 'react';
import styled from "styled-components"
import axios from "axios"


const Button = styled.button`
background-color:#5EC9DB ;
border-color: #5EC9DB;
`

class NewTournamentURL extends Component {
    state = {
        tournament: {
            name: "",
            url: "",
            date: "",
            location: "",
            champions: []
        }
    }
    handleChange = (event) => {
        let newTournament = { ...this.state.tournament }
        newTournament[event.target.name] = event.target.value
        console.log("NEW ADDRESS:", newTournament)
        this.setState({ tournament: newTournament })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let currentTournament = this.state.tournament
        // console.log(currentTournament)
        const newTournament = {
            url: currentTournament.url
        }
        const newUrl = newTournament.url
        // console.log(newUrl)
        axios.post(`/api/newtournament`, newTournament)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    tournament: {
                        name: res.data.name,
                        url: newUrl,
                        location: res.data.venueAddress,
                        date: "",
                        champions: []
                    }
                })
                console.log(this.state.tournament)
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Enter Tournament URL:</label>
                        <input type="text" className="form-control" name="url" placeholder="URL from Smash.gg. Example: https://api.smash.gg/tournament/pulsar-premier-league" onChange={this.handleChange} />
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                </form>
            </div>
        );
    }
}

export default NewTournamentURL;