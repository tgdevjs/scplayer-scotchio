var express = require('express');

var port = process.env.PORT || 3000;
var app = express();
app.use(express.static('public'));
app.listen(port, function () {
  console.log('Express server is on port ' + port);
});
