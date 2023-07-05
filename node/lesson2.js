var http = require('http')
var server = http.createServer(function (request, response) {
    console.log("Server par koik aavyu");
});
server.listen(5000);
console.log("Badhu ready chhe");