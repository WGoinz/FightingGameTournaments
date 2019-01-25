import React, { Component } from 'react';
import Banner from './Banner';
import Tournaments from './Tournaments';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Tournaments />
            </div>
        );
    }
}

export default HomePage;