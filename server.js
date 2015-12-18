var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Derp");
    response.end();

}).listen(9999);