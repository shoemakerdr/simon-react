'use strict'

const assert = require('chai').assert
const Simon = require('../simon')
const log = console.log

describe('Simon object', function () {
	const simon = new Simon()
	describe('newSeries method', function () {
		it('will initialize a new simon series', function () {
			simon.newSeries()
			const firstSeries = simon.getFullSeries().map(x => x)
			simon.newSeries()
			assert.notDeepEqual(simon.getFullSeries(), firstSeries)
		})
	})
	describe('next method', function () {
		describe('after initializing a new series', function () {
			simon.newSeries()
			it('will add the second element of the series to the current series after the first call', function () {
				simon.next()
				const firstTwoSeries = [simon.series[0], simon.series[1]]
				assert.deepEqual(simon.getCurrent(), firstTwoSeries)
			})
			it('will add the second element of the series to the current series after the second call', function () {
				simon.next()
				const firstThreeSeries = [simon.series[0], simon.series[1], simon.series[2]]
				assert.deepEqual(simon.getCurrent(), firstThreeSeries)
			})
		})
	})
	describe('checkSeries method', function () {
		simon.newSeries()
		describe('when given an array that matches the current series', function () {
			it('will return true', function () {
				const currentSeries = simon.getCurrent()
				assert.isTrue(simon.checkSeries(currentSeries))
			})
		})
		describe('when given an array that does NOT match the current series', function () {
			it('will return false', function () {
				const falseSeries = simon.getCurrent().map(x => x)
				falseSeries[0] = falseSeries[0] < 4
					? falseSeries[0] + 1
					: falseSeries[0] - 1
				assert.isFalse(simon.checkSeries(falseSeries))
			})
		})
	})
	describe('checkGuess method', function () {
		describe('when given a correct guess', function () {
			it('will return true', function () {
				const first = simon.getCurrent()[0]
				assert.isTrue(simon.checkGuess(first))
			})
			it('will not reset the iterator back to the beginning', function () {
				const nextValue = simon.check.iterAnswers.next().value
				const firstCurrent = [0, simon.getCurrent()[0]]
				assert.notDeepEqual(firstCurrent, nextValue)
			})
		})
		describe('when given an incorrect guess', function () {
			it('will return false', function () {
				assert.isFalse(simon.checkGuess(6))
			})
			it('will reset the iterator back to the beginning', function () {
				const nextValue = simon.check.iterAnswers.next().value
				const firstCurrent = [0, simon.getCurrent()[0]]
				assert.deepEqual(firstCurrent, nextValue)
			})
		})
	})
})
