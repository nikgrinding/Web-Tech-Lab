// the main server of the website

const http = require("http");
const router = require("./router.cjs");

const server = http.createServer(router);
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000"); 
})