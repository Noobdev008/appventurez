
// it is much better and super optimize way and no need to write much code


const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //      if(err){
    //         return console.error(err);
    //      }
    //      res.end(data.toString());
    // });

    //2nd way and much optimize way

    // const reStream = fs.createReadStream("input.txt");
    // reStream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });
    // reStream.on('end', () =>res.end());
    // reStream.on('error', err => {console.log(err)
    // res.end("File not found")
    // });

    // 3rd way best optimize way

    const reStream = fs.createReadStream("input.txt");
    reStream.pipe(res);

    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening on 8000");
});

