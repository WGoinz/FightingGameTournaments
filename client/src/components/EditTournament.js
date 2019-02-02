import React, { Component } from 'react';
import axios from "axios"
import styled from "styled-components"

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

const Button = styled.button`
background-color:#5EC9DB ;
border-color: #5EC9DB;
margin-bottom: 30px;
`

class EditTournament extends Component {
    state = {
        tournament: {
            name: "",
            location: "",
        }
    }
    handleChange = (event) => {
        let newTournament = { ...this.state.tournament }
        newTournament[event.target.name] = event.target.value
        // console.log("NEW ADDRESS:", newTournament)
        this.setState({ tournament: newTournament })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let currentTournament = this.state.tournament
        const newTournament = {
            name: currentTournament.name,
            location: currentTournament.location,
        }
        axios.put(`/api/tournaments/${this.props.tournamentId}`, newTournament)
            .then((res) => {
                // console.log(res.data)
            })
    }
    render() {
        return (
            <div>
                <Events>
                    <h1>Edit Tournament Info:</h1>
                </Events>
                <form onSubmit={(event) => {
                    this.props.toggleEdit()
                    this.handleSubmit(event)
                    this.props.getSingleTournament()
                }}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Change Tournament Name" defaultValue={this.props.tournament.name} onChange={this.handleChange} />
                        <input type="text" className="form-control" name="location" placeholder="Change Tournament Location" defaultValue={this.props.tournament.location} onChange={this.handleChange} />
                    </div>
                    <Button type="submit" className="btn btn-primary">Save Changes</Button>
                </form>
            </div>
        );
    }
}

export default EditTournament;