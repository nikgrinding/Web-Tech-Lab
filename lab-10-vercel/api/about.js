// Vercel serverless function for the about page
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, '../public/about.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading about.html:', err.message);
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(
                '<h1>About Us</h1><p>Could not load about page right now</p>'
            );
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(data);
        }
    });
};
