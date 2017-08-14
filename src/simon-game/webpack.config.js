
const path = require('path');

module.exports = {
	context: path.join(__dirname),
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
	}
}
