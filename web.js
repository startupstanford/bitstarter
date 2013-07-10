var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = new Buffer(30);
buffer.write(fs.readFile("index.html"), "utf-8")


var msg = fs.readFileSync('index.html', 'utf-8');


app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});