import React, { Component } from 'react';
import Board from './Board'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">

                <Board />
            </div>
        );
    }
}

export default App;
