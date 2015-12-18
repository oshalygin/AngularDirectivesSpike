var express = require("express");
var path = require("path");

var application = express();

application.get("/", function (request, response) {
    response.sendFile(path.join(__dirname + "/wwwroot/index.html"));
});

application.use(express.static("wwwroot"));
application.use(express.static("node_modules"));
application.use(express.static("bower_components"));

var server = application.listen(9999, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening on http://%s:%s", host, port);

});