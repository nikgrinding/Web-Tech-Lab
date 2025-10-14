const http = require('http');
const url = require('url');
const readHTML = require('./fileHandler.cjs');

const server = http.createServer((req, res) => {
	const parsedURL = url.parse(req.url, true);
	const pathname = parsedURL.pathname;
	if (pathname === '/' || pathname === '/home') {
		readHTML('index.html', (err, content) => {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			if (content) {
				res.end(content);
			} else {
				res.end(
					'<h1>Home Page</h1><p>Could not load home page right now</p>'
				);
			}
		});
	} else if (pathname === '/about') {
		readHTML('about.html', (err, content) => {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			if (content) {
				res.end(content);
			} else {
				res.end(
					'<h1>About Us</h1><p>Could not load about page right now</p>'
				);
			}
		});
	} else if (pathname === '/styles.css') {
		readHTML('styles.css', (err, content) => {
			if (content) {
				res.writeHead(200, { 'Content-Type': 'text/css' });
				res.end(content);
			} else {
				res.writeHead(404, { 'Content-Type': 'text/plain' });
				res.end('Could not load styles.css');
			}
		});
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end('<h1>404 - Page Not Found</h1>');
	}
});

server.listen(3000, () => {
	console.log('server running at http://localhost:3000');
});
