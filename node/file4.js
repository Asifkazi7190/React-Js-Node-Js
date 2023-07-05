var http = require('http');
var fs = require('fs');
const { error } = require('console');
var server = http.createServer(function (request, response) {
var data = "\n sunny , viku"
    fs.appendFile('fruit.txt', data,function(error) {

        if(error) {

            console.log(error);
        }

        else
        {
            console.log("Append sucessfuly");
        }

    });

});
server.listen(5000)
console.log("server is ready...")