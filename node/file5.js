var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    fs.readFile('fruit.txt', function (error, FileContent) {

        response.writeHead(200, { 'content-type': 'text/html' });

        fs.appendFile('demo.txt', FileContent, function (error) {

            if (error) {

                console.log(error);
            }

            else {
                console.log("Append sucessfuly");
            }

            response.end();
        });
    });
    fs.readFile('demo.txt', function (error, FileContent) {
        response.write(FileContent);
    });
    
    
});
server.listen(5000)
console.log("server is ready...") 