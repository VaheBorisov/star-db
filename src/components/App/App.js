import React from 'react';

import Header from '../Header';
import RandomPlanet from '../Random-Planet';
import ItemList from '../Item-List';
import PersonDetails from '../Person-Details';

import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;