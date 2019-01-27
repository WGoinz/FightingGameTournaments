import React, { Component } from 'react';
import styled from "styled-components"
import Nav from './Nav';

const Main = styled.div`
background-color:#5EC9DB ;
font-family: 'Sanchez', serif;
color:#323234 ;
text-transform: uppercase;
div{
  display: flex;
justify-content: center;
}
`
class Banner extends Component {
    render() {
        return (
            <div>
                <div>
                    <Nav />
                </div>
                <Main className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fighting Game Tournaments</h1>
                    </div>
                </Main>
            </div>
        );
    }
}

export default Banner;