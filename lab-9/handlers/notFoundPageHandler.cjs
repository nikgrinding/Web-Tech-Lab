// handler for the invalid pages

function notFoundPageHandler(req, res) {
	res.writeHead(404, { 'Content-Type': 'text/html' });
	res.end(
		`<!DOCTYPE html>
		<html>
			<head>
				<title>404 - Page Not Found</title>
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
					h1, p {
						text-align: center;
					}
					p {
						font-size: 30px;
					}
					strong {
						color: lawngreen;
					}
					.content {
						display: flex;
						flex-direction: column;
						justify-content: center;
						height: 500px;
					}
					span {
						text-decoration: underline; 
					}
					h1 {
						font-size: 40px;
						color: red;
					}
				</style>
			</head>
			<body>
				<nav>
					<a href="/">Home</a>
					<a href="/posts">Posts</a>
				</nav>
				<div class="content">
					<h1>You are trying to access a page that does not exist.</h1>
					<p>Click <strong>Home</strong> or <strong>Posts</strong> in the navbar to visit the home or page posts page respectively.</p>
				</div>
			</body>
		</html>`
	);
}

module.exports = notFoundPageHandler;
