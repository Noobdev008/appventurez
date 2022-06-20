const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
   
    // console.log(request.url)
    if (request.url === "/") {
        response.end("hello from te other side!");
    } else if (request.url === "/about") {
        response.end("hello from te about side!");
    } else if (request.url === "/api") {
        response.writeHead(200, {'Content-Type': 'application/json'});
        fs.readFile(`${__dirname}/API/api.json`, 'utf-8', (err, data) => {
    
            // console.log(data);
            // const object = JSON.parse(data); // convert to obj;
            // response.end(object[0].name); //Leanne Graham
            response.end(data)
        });

        // response.end("hello from te api side!");
    } else {
        response.writeHead(404, { "Content-type": "text/html" });  // for error showing status code  and tell browser file name 
        response.end("<h1>404 error! Page not found!</h1>")
    };


});



server.listen(8080, "127.0.0.1", () => {
    console.log("listening on port 8080");
});
