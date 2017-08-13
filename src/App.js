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
        this.setStrict = this.setStrict.bind(this)
        this.start = this.start.bind(this)
        this.state = {
            isOn: false,
            isStrict: false,
            hasStarted: false,
            count: '--',
            guesses: simon.getGuesses(),
            currentSeries: simon.getCurrent()
        }
    }

    setStrict () {
        this.setState({
            isStrict: !this.state.isStrict
        })
    }

    setOnOff () {
        this.setState({
            isOn: !this.state.isOn,
            hasStarted: !this.state.isOn ? false : this.state.hasStarted
        })
    }

    start () {
        this.setState({
            hasStarted: (this.state.isOn && !this.state.hasStarted) ? true : false
        })
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
                    setStrict={this.setStrict}
                    hasStarted={this.state.hasStarted}
                    start={this.start}
                />
            </div>
        );
    }
}

export default App;
