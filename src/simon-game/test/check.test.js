'use strict'

const assert = require('chai').assert
const Check = require('../check')
const log = console.log

describe('Check', function () {
	const check = new Check([1,2,3,4,5])
	describe('guess method', function () {
		describe('when given correct guesses for the check\'s array sequence', function () {
			it('should return true for each', function () {
				check.reset()
				assert.isTrue(check.guess(1))
				assert.isTrue(check.guess(2))
				assert.isTrue(check.guess(3))
				assert.isTrue(check.guess(4))
				assert.isTrue(check.guess(5))
			})
		})
		describe('when given an incorrect guess for the check\'s array sequence', function () {
			it('should return false', function () {
				check.reset()
				assert.isFalse(check.guess(2))
			})
		})
		describe('when given correct guesses but in the wrong order for the check\'s array sequence', function () {
			it('should return false on the incorrect guesses', function () {
				check.reset()
				assert.isTrue(check.guess(1))
				assert.isTrue(check.guess(2))
				assert.isFalse(check.guess(4))
			})
		})
	})
})
