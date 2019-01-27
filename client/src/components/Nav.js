import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"


const Main = styled.div`
background-color:#323234;
font-family: 'Sanchez', serif;
a{
    color:#5EC9DB ;
    font-size: 20px;
    text-transform: uppercase;
}
a:hover { 
  background-color: grey;
  text-decoration: underline;
}
`

class Nav extends Component {
    render() {
        return (
            <Main>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                </ul>
            </Main>
        );
    }
}

export default Nav;