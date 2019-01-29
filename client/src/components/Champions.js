import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"



const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
`
const Column = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
`

class Champions extends Component {

    getGroups() {
        let url = this.props.url
        const newGroup = {
            url: newUrl
        }
        const newUrl = newGroup.url
        console.log(newUrl)
        axios.post(`/tournaments/${this.props.tournamentId}/groups`, newGroup)
            .then((res) => {
                console.log(res.data)
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
    render() {
        // let championsArray = this.props.tournament.champions.map((champion, i) => {
        //     return (
        //         <Column key={i}>
        //             <h3>{champion}</h3>
        //             <Link to={`/tournaments/${this.props.tournament._id}/champions/${champion._id}`}><h3>View</h3></Link>
        //         </Column>
        //     )
        // })
        return (
            <div>
                <Main>
                    <h1>Hello</h1>
                    {/* {championsArray} */}
                </Main>
            </div>
        );
    }
}

export default Champions;