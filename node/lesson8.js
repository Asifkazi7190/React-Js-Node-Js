var http = require('http');
var server = http.createServer(function (request, response) {
    console.log("Hello Asif");
    console.log(request.url);
    var url = request.url;
    response.writeHead(200, { 'content-type': 'text/html' });
    if (url == '/') {
        response.write(`<html><head><title>Lesson8</title></head><body>this is home page</body></html>`);
    }
    else if (url == '/products') {
        response.write(`<html><head><title>Lesson8</title></head><body><h1>This is products page</h1></body></html>`);
    }
    else if (url == '/category') {
        response.write(`<html><head><title>Lesson8</title></head><body><h1>This is Category page</h1></body></html>`);

    }
    response.end()


});
server.listen(5000);
console.log("server is ready");