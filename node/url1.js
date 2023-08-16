var http = require('http')
var url = require('url')
var server = http.createServer(function(request,response){

    var my_url = url.parse(request.url,true);
    var data = my_url.query
    // http://localhost:5000/?id=01&name=Asif
    console.log(data);
    console.log(data.id);
    console.log(data.name);
    



});
server.listen(5000);
console.log("Server is ready...")