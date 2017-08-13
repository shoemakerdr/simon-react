import React, { Component } from 'react';
import Board from './Board';
import ControlPanel from './ControlPanel';
import './App.css';
import simonGame from 'simon-game';

const simon = simonGame();

class App extends Component {
    constructor (props) {
        super(props);
        this.setOnOff = this.setOnOff.bind(this)
        this.state = {
            isOn: false,
            isStrict: false,
            count: '--',
            guesses: simon.getGuesses(),
            currentSeries: simon.getCurrent()
        };
    }

    setOnOff () {
        const onOrOff = this.state.isOn
        this.setState({
            isOn: !onOrOff
        })
        console.log(this.state.isOn)
    }
    render () {
        return (
            <div className="App">
                <Board />
                <ControlPanel
                    count={this.state.count}
                    isOn={this.state.isOn}
                    setOnOff={this.setOnOff}
                    isStrict={this.state.isStrict}
                />
            </div>
        );
    }
}

export default App;
