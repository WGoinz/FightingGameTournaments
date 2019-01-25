import React, { Component } from 'react';
import Banner from './components/Banner';
import Tournaments from './components/Tournaments';

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