/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Simon = __webpack_require__(1)

module.exports = function (possible, seriesLength) {
	const simon = new Simon(possible, seriesLength)
	simon.newSeries()
	return simon
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Check = __webpack_require__(2)

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ })
/******/ ]);