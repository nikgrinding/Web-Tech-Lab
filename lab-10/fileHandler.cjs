const fs = require('fs');
const path = require('path');
const logError = require('./logger.cjs');

function readHTML(filename, callback) {
	const filePath = path.join(__dirname, filename);
	fs.readFile(filePath, 'utf-8', (err, data) => {
		if (err) {
			logError(`Error reading ${filename}: ${err.message}`);
			callback(null, null);
		} else {
			callback(null, data);
		}
	});
}

module.exports = readHTML;
