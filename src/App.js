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
        this.activateSpace = this.activateSpace.bind(this)
        this.iterateSeries = this.iterateSeries.bind(this)
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
            },
            timerIDs: {
                activate: null,
                interval: null
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
            this.playSeries(this.state.currentSeries)
        }
        if (this.state.isOn && !this.state.hasStarted) {
            this.setState({
                hasStarted: true,
                count: simon.getCount(),
                guesses: simon.getGuesses(),
                currentSeries: simon.getCurrent()
            })
            this.playSeries(this.state.currentSeries)
        }
    }

    activateSpace(space) {
        const color = [null, 'green', 'red', 'yellow', 'blue']
        const activateID = setTimeout(() => {
            this.setState({
                colors: {[color[space]]: true}
            })
            setTimeout(() => {
                this.setState({
                    colors: {
                        green: false,
                        red: false,
                        yellow: false,
                        blue: false
                    }
                })
            },1000)
        },1000)
        this.setState({
            timerIDs: {
                activate: activateID
            }
        })
    }

    iterateSeries (iterator) {
        const next = iterator.next().value
        if (next !== undefined) {
            this.activateSpace(next[1])
        }
        else clearInterval(this.timerIDs.interval)
    }

    playSeries (series) {
        const seriesIterator = series.entries()
        const intervalID = setInterval(this.iterateSeries(seriesIterator),1000)
        this.setState({
            timerIDs: {
                interval: intervalID
            }
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
