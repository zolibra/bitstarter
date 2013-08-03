var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var content = fs.readFileSync('./index.html').toString();

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
