var http = require("http");
var mymodule3 = require("./mymodule3");
var server = http.createServer(function(request,response){
    mymodule3.rupeesToDoller(100);
    mymodule3.rupeesToEuro(100);
    mymodule3.rupeestoDirham(100);
});
server.listen(5000);
console.log("server is ready");