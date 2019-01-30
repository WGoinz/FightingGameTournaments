import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import Banner from './Banner';



const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
display: flex;
flex-direction: column;
margin-top: 10px;
h1 {
    border-top: 25px solid #323234;
    font-size: 50px;
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

class Standings extends Component {
    state = {
        record: []
    }
    getRecords = () => {
        axios.get(`/api/tournaments/${this.props.match.params.tournamentId}/champions/${this.props.match.params.championId}`).then((res) => {
            // console.log(res.data.record[0])
            this.setState({ record: res.data.record[0] })
            console.log(this.state.record)
        })
    }

    componentDidMount = () => {
        this.getRecords()
    }
    render() {
        let newRecord = this.state.record
        let sortRecord= []
        for (var placing in newRecord) {
            sortRecord.push([placing, newRecord[placing]]);
        }
        
        sortRecord.sort(function(a, b) {
            return a[1].placement - b[1].placement;
        });
        console.log(sortRecord)
        let record = sortRecord.map((record, i) => {
            console.log(record)
            let entrant = parseInt(record[1].entrantId)
            console.log(entrant)
            return (
                <Column key={i}>
                    <h2>{record[1].mutations.entrants[entrant].name}</h2>
                    <h3>Placing: {record[1].placement}</h3>
                </Column>
            )
        })
        let standings = record
        console.log({ standings })
        return (
            <div>
                <div>
                    <Banner />
                    <Main>
                        <h1>Standings</h1>
                        {standings}
                    </Main>
                </div>
            </div >
        );
    }
}

export default Standings;