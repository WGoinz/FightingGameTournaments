import React, { Component } from 'react';
import styled from "styled-components"

const Button = styled.button`
background-color:#5EC9DB ;
border-color: #5EC9DB;
`

class NewTournamentURL extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Enter Tournament URL:</label>
                        <input type="password" className="form-control" name="url" placeholder="URL from Smash.gg" />
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                </form>
            </div>
        );
    }
}

export default NewTournamentURL;