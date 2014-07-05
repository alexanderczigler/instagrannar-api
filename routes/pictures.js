/*
 * Gets pictures by location.
 */
exports.byLocation = function (req, res, next) {

  res.setHeader('Content-Type', 'application/json');

try {

  var config = require('../ingr.config.json');

  var host = 'api.instagram.com/v1/media/search?lat={lat}&lng={lng}&client_id={client_id}';
  host = host.replace('{lat}', req.params.lat);
  host = host.replace('{lng}', req.params.lng);
  host = host.replace('{client_id}', config.api.client_id);

  var path = host.substr(host.indexOf("/", host.len));
  host = host.substr(0, host.indexOf("/"));

  var opt = {
    'host': host,
    'path': path,
    'method': 'GET',
    'agent': false,
    'headers': { 'Access-Control-Allow-Origin': "*" }
  };

  var https = require('https');

  https.get(opt, function(igResult){
    var data = '';

    igResult.on('data', function (chunk){
      data += chunk;
    });

    igResult.on('end',function(){
      var obj = JSON.parse(data);
      res.send(obj);
    })

  });

}
catch (e) {
  res.end("error");
}
finally {
  //next();
}
};
