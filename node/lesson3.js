var http = require("http")
var module2 = require("./mymodule2")
var server = http.createServer(function (request, response) {
    module2.info("Hello Guys Good Morning");
    module2.warning("Do practice regularly");
    module2.error("Network not available")

});
server.listen(5000);
console.log("server dodva mate tyar")