const fs = require('fs');
const path = require('path');

function logError(message) {
	const timestamp = new Date().toISOString();
	const logMessage = `[${timestamp}] ${message}\n`;
	const filePath = path.join(__dirname, 'error.log');
	fs.appendFile(filePath, logMessage, (err) => {
		if (err) {
			console.log('failed to write to log file');
		}
	});
}

module.exports = logError;
