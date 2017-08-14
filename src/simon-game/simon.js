'use strict'

const Check = require('./check')

const log = console.log

class Simon {
	constructor (possible=4, seriesLength=20) {
		this.possible = possible
		this.seriesLength = seriesLength
		this.series = []
		this.count = 1
		this.current = []
		this.check;
	}

	newSeries () {
		const series = []
		for (let i = 0; i < 20; i++) {
			let randomPossible = Math.floor(Math.random() * this.possible) + 1
			series.push(randomPossible)
		}
		this.series = series
		this.count = 1
		this.current = [this.series[0]]
		this.check = new Check(this.current)
		return this
	}

	getFullSeries () {
		return this.series
	}

	next () {
		this.count++
		const current = this.series
			.map((num,i) => i < this.count ? num : undefined)
			.filter(x => x !== undefined)
		this.current = current
		this.check = new Check(this.current)
		return this
	}

	getCurrent () {
		return this.current
	}

	getCount () {
		return this.count
	}

    getGuesses() {
        return this.check.guesses
    }

	checkSeries (guesses) {
		const current = this.getCurrent()
		return current.every((num, i) => guesses[i] === num)
	}

	checkGuess (guess) {
		const checked = this.check.guess(guess)
		if (!checked)
			this.check.reset()
		return checked
	}
}

module.exports = Simon
