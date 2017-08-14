'use strict'

const assert = require('chai').assert
const Simon = require('../index')

describe('Simon module', function () {
	describe('is a function', function () {
		assert.isFunction(Simon)
		describe('when called', function () {
			it('returns an object', function () {
				assert.isObject(Simon())
			})
		})
	})
})
