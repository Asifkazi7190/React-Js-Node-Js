var http = require('http');
var fs = require('fs');
var buf = new Buffer(1024);
var server = http.createServer(function (request, response) {
     fs.open('fruit.txt', 'r+', function (error, fd) {
          if (error) {
               console.log(error);
          }
          else {
               console.log("file opened successfully ");

          }
          var noofcharater = buf.length;
          fs.read(fd, buf, 0, numberofcharacter, 0, function (error, count){})

     });
     server.listen(5000)
     console.log("server is ready...") 