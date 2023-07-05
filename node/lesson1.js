var http = require ('http')
var my = require ('./mymodule')
var server = http.createServer(function(request,response)
{
 var currentdate = my.getDate();
 console.log(currentdate);
});
server.listen(5000);
console.log ("Aagad Vadho");