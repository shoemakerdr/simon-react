import React, { Component } from 'react';
import Board from './Board';
import ControlPanel from './ControlPanel';
import './App.css';
import simonGame from 'simon-game';

const simon = simonGame();

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isOn: false,
            isStrict: false,
            count: '--',
            guesses: simon.getGuesses(),
            currentSeries: simon.getCurrent()
        };
    } 

    render () {
        return (
            <div className="App">
                <Board />
                <ControlPanel count={this.state.count} />
            </div>
        );
    }
}

export default App;
