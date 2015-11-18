


/*
 * Instagrannar API.
 */
var http = require('http');
var express = require('express');
var pictures = require('./lib/routes/pictures.js');

var app = express();
app.set('port', 3000);



/*
 * Enable CORS.
 */
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.options(/(.*)/, function(req, res, next) {
  res.send(200); // Always respond OK on OPTIONS requests.
});



/*
 * Routes.
 */
app.get('/pictures/:id/:accesstoken', pictures.byId);
app.get('/pictures', pictures.byLocation);



/*
 * Start.
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('ingr api listening on port ' + app.get('port'));
});
