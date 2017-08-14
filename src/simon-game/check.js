'use strict'

class Check {
	constructor(answers) {
		this.answers = answers
		this.iterAnswers = answers.entries()
        this.guesses = 0
	}
	guess (possible) {
        const answer = this.iterAnswers.next().value
        if (answer === undefined) return
        this.guesses++
		return possible === answer[1]
	}

	reset () {
        this.guesses = 0
		this.iterAnswers = this.answers.entries()
	}
}

module.exports = Check
