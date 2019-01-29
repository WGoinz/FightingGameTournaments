import React, { Component } from 'react';
import Banner from './Banner';

class Champion extends Component {
    render() {
        return (
            <div>
                <Banner />
                <h1>Champion View</h1>
                <h2>{this.props.match.params.championId}</h2>
            </div>
        );
    }
}

export default Champion;