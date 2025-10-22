// handler for the posts page of the site

const posts = require('../data/posts.cjs');

function postsPageHandler(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	const postsHTML = posts
		.map((post) => {
			return `
				<div class="post">
					<h1>${post.title}</h1>
					<h2>${post.description}</h2>
					<p>${post.content}</p>
				</div>
			`;
		})
		.join('');
	res.end(
		`<!DOCTYPE html>
		<html>
			<head>
				<title>Home Page</title>
				<style>
					html {
						background-color: rgb(40, 40, 40);
						color: white;
					}
					body {
						margin: 0px auto;
						width: 600px;
					}
					nav {
						display: flex;
						justify-content: space-around;
						padding: 20px;
						margin-top: 20px;
						background-color: darkblue;
						border-radius: 50px;
					}
					a {
						font-size: 20px;
						text-decoration: none;
						color: white;
					}
					p {
						font-size: 25px;
					}
					strong {
						color: lawngreen;
					}
					.content {
						display: flex;
						flex-direction: column;
						gap: 40px;
						padding-top: 20px;
					}
					span {
						text-decoration: underline; 
					}
					h2 {
						color: wheat;
						font-weight: normal;
						font-size: 20px;
						margin-top: 0px;
					}
					h1 {
						margin-bottom: 5px;
					}
					.post {
						border: 2px solid wheat;
						border-radius: 20px;
						padding: 0px 20px;
					}
				</style>
			</head>
			<body>
				<nav>
					<a href="/">Home</a>
					<a href="/posts"><span>Posts</span></a>
				</nav>
				<div class="content">
					${postsHTML}
					<p>You are currently at the posts page. Click <strong>Home</strong> in the navbar to visit the home page.</p>
				</div>
			</body>
		</html>`
	);
}

module.exports = postsPageHandler;
