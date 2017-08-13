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
        this.playSeries = this.playSeries.bind(this)
        this.state = {
            isOn: false,
            isStrict: false,
            hasStarted: false,
            count: '--',
            guesses: simon.getGuesses(),
            currentSeries: simon.getCurrent(),
            colors: {
                green: false,
                red: false,
                yellow: false,
                blue: false
            }
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
            hasStarted: !this.state.isOn ? false : this.state.hasStarted,
            count: '--'
        })
    }

    start () {
        if (this.state.isOn && this.state.hasStarted) {
            simon.newSeries()
            this.setState({
                count: simon.getCount(),
                guesses: simon.getGuesses(),
                currentSeries: simon.getCurrent()
            })
        }
        if (this.state.isOn && !this.state.hasStarted) {
            this.setState({
                hasStarted: true,
                count: simon.getCount(),
                guesses: simon.getGuesses(),
                currentSeries: simon.getCurrent()
            })
        }
    }

    playSeries () {
        this.state.currentSeries.forEach(move => console.log(move))
        simon.next()
        this.setState({
            count: simon.getCount(),
            currentSeries: simon.getCurrent()
        })
    }

    render () {
        return (
            <div className="App">
                <Board
                    colors={this.state.colors}
                    playSeries={this.playSeries}/>
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
