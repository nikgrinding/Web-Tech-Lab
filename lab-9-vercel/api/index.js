// Vercel serverless function for the home page

module.exports = (req, res) => {
    res.status(200).send(
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
                </style>
            </head>
            <body>
                <nav>
                    <a href="/"><span>Home</span></a>
                    <a href="/posts">Posts</a>
                </nav>
                <div class="content">
                    <h1 class="welcome-message">Welcome to my Blog App</h1>
                    <p>You are currently at the home page. Click <strong>Posts</strong> in the navbar to visit the posts page.</p>
                </div>
            </body>
        </html>`
    );
};
