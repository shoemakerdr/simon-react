# Simon

This is library that can be used for building a Simon web app (such as the one
from [Free Code Camp](https://www.freecodecamp.com/challenges/build-a-simon-game)).

It features a simple API that you can easily plug into your application.

## Install
    $ npm install simon-game

## Include This Library into Your Project
You can include this Tic Tac Toe module into your project by using either
require or the ES6 import statement.
```javascript
const simonGame = require('simon-game');
```
```javascript
import simonGame from 'simon-game';
```

## Simon Game

### Set Up
When you require 'Simon' into your project, it gives you a function,
which returns an instance of the Simon game. You can include two optional
parameters: first is the number of possibilities (it defaults to 4), and the
length of the initial series (this defaults to 20, per the requirements of the
Free Code Camp project).

Example:
```javascript
// If you want to go with the default configuration
const simon = simonGame();
```
or:
```javascript
// If you want to make a more complex game of Simon with 8 possible moves and
// and a series length of 40
const simon = simonGame(8, 40);
```

### Using the game
The game uses numbers in its pattern series, and when you initialize a game, it
automatically configures a series.

To get the full series, call the getFullSeries method.
```javascript
const simon = Simon();
// get the full series up front
simon.getFullSeries()
// [1, 2, 3, 2, 3, 4, 3, 1, 1, 1, 4, 4, 2, 3, 2, 2, 1, 1, 3, 2]
```

You can also get a totally different series with the newSeries method:

```javascript
simon.newSeries()
simon.getFullSeries()
// [3, 1, 3, 2, 1, 4, 2, 1, 4, 3, 2, 2, 3, 2, 4, 1, 1, 2, 1, 3]
```


Once you've initialized your simon instance, you have access to the count, using
the getCount method, and the current part of the series you're on, using the
getCurrent method:
```javascript
simon.getFullSeries()
// [3, 1, 3, 2, 1, 4, 2, 1, 4, 3, 2, 2, 3, 2, 4, 1, 1, 2, 1, 3]
simon.getCount()
// 1
simon.getCurrent()
// [3]
```

You can check user input for each move in the series with the checkGuess method,
which will return a boolean:
```javascript
simon.getCurrent()
// [3]
simon.checkGuess(3)
// true
```

You can get the number of guesses made in a try by calling the getGuesses method. It
can be used to check against the series count:
```javascript
simon.getGuesses()
// 0
simon.getCurrent()
// [3]
simon.checkGuess(3)
// true
simon.getGuesses()
// 1
```

You then call the next method, which updates both the count and the current
series:
```javascript
simon.getCount()
// 1
simon.getCurrent()
// [3]
simon.next()
simon.getCount()
// 2
simon.getCurrent()
// [3, 1]
```

You can check sequential user input again:
```javascript
simon.getCurrent()
// [3, 1]
simon.checkGuess(3)
// true
simon.checkGuess(1)
// true
```

If the guess is incorrect, checkGuess returns false and resets the check
iterator, so the user can retry the pattern:
```javascript
simon.getCurrent()
// [3, 1, 3]
simon.checkGuess(3)
// true
simon.checkGuess(1)
// true
simon.checkGuess(1)
// false
simon.checkGuess(3)
// true
simon.checkGuess(1)
// true
simon.checkGuess(3)
// true
```

With checkGuess, the user must individually guess all answers in sequence.

As a simpler alternative to the iterative checkGuess method, you can check an
entire series of guesses at once with the checkSeries method:
```javascript
simon.getCurrent()
// [3, 1, 3, 2]
simon.checkSeries([3, 1, 3, 2])
// true
```

And that's it! You can decide when the user has won or lost. My goal was to
create a simple library that holds the logic and state of a simple Simon app.
You won't need to do any resets on state because as long as you are moving the
game along and giving valid inputs, the main Simon module will keep track of the
state for you.

## Issues
If you find any issues or bugs with the game or want to request new features,
please do so [here](https://github.com/shoemakerdr/simon-api/issues).

## Tests
(NOTE: requires mocha and chai)

    $ npm test

## License

The MIT License (MIT)

Copyright (c) 2017 Derek Shoemaker

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
