// http-server: a simple static HTTP server
// http-server is a simple, zero-configuration command-line static HTTP server.
//  It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, 
// local development and learning.


// Installation:
// Running on-demand:
// Using npx you can run the script without installing it first:

// npx http-server [path] [options]

// Globally via npm
// npm install --global http-server
// This will install http-server globally so that it may be run from the command line anywhere.


// As a dependency in your npm package:
// npm install http-server
// Usage:
//  http-server [path] [options]
// [path] defaults to ./public if the folder exists, and ./ otherwise.

// Now you can visit http://localhost:8080 to view your server



const http = require('http');

const server = http.createServer((request, response) => {
    // console.log(request.url)
    if (request.url === "/") {
        response.end("hello from te other side!");
    } else if (request.url === "/about") {
        response.end("hello from te about side!");
    }else if(request.url === "/contact"){
        response.end("hello from te contact side!");
    }else{
        response.writeHead(404, {"Content-type":"text/html"});  // for error showing status code  and tell browser file name 
        response.end("<h1>404 error! Page not found!</h1>")
    };


});



server.listen(8080, "127.0.0.1", () => {
    console.log("listening on port 8080");
});

