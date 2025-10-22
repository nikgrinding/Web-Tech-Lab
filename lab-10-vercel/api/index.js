// Vercel serverless function for the home page
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, '../views/index.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err.message);
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(
                '<h1>Home Page</h1><p>Could not load home page right now</p>'
            );
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(data);
        }
    });
};
