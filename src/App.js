import React, { Component } from 'react';
import Board from './Board';
import ControlPanel from './ControlPanel';
import './App.css';
import simonGame from 'simon-game';

const simon = simonGame();
let intervalID
let activateID
let wrongAnswerID

class App extends Component {
    constructor (props) {
        super(props);
        this.setOnOff = this.setOnOff.bind(this)
        this.setStrict = this.setStrict.bind(this)
        this.start = this.start.bind(this)
        this.playSeries = this.playSeries.bind(this)
        this.activateSpace = this.activateSpace.bind(this)
        this.iterateSeries = this.iterateSeries.bind(this)
        this.wrongAnswer = this.wrongAnswer.bind(this)
        this.checkUserInput = this.checkUserInput.bind(this)
        this.updateSeries = this.updateSeries.bind(this)
        this.state = {
            isOn: false,
            isStrict: false,
            hasStarted: false,
            isReadyForInput: false,
            count: '--',
            guesses: 0,
            currentSeries: null,
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
            count: '--',
            isReadyForInput: false
        })
        if (this.state.isOn) {
            clearInterval(intervalID)
            clearTimeout(activateID)
            clearTimeout(wrongAnswerID)
        }
    }

    start () {
        if (this.state.isOn) {
            simon.newSeries()
            this.setState({
                hasStarted: true,
                count: simon.getCount(),
                guesses: simon.getGuesses(),
                currentSeries: simon.getCurrent()
            })
            // play current series
            this.playSeries([1,2,4,3])
        }
    }

    activateSpace(space, timer1, timer2) {
        const color = [null, 'green', 'red', 'yellow', 'blue']
        const activate = setTimeout(() => {
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
            }, timer1)
        },timer2)
        activateID = activate
    }

    wrongAnswer() {
        this.setState({
            count: '!!',
            isReadyForInput: false
        })
        setTimeout(() => {
            this.setState({
                count: '--'
            })
        }, 1000);
        if (this.state.isStrict) {
            this.start()
        }
        else this.playSeries(this.state.currentSeries)
    }

    checkUserInput(input) {
        if (this.state.isReadyForInput) {
            this.activateSpace(input, 4, 250)
            if (simon.checkGuess(input)) {
                if (this.state.count === this.state.guesses) {
                    this.updateSeries()
                    this.playSeries()
                }
            }
            else this.wrongAnswer()
        }
    }

    updateSeries () {
        simon.next()
        this.setState({
            isReadyForInput: false,
            count: simon.getCount(),
            guesses: simon.getGuesses(),
            currentSeries: simon.getCurrent()
        })
    }

    iterateSeries (iterator) {
        const next = iterator.next().value
        if (next !== undefined) {
            this.activateSpace(next[1], 750, 250)
        }
        else {
            clearInterval(intervalID)
            this.setState({
                isReadyForInput: true
            })
        }
    }

    playSeries (series) {
        const seriesIterator = series.entries()
        intervalID = setInterval(() => this.iterateSeries(seriesIterator),1000)
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
