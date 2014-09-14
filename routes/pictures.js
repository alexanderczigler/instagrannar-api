/*
 * Gets pictures by location.
 */
exports.byLocation = function (req, res, next) {

  res.setHeader('Content-Type', 'application/json');

try {

  var config = require('../ingr.config.json');

  var host = 'https://api.instagram.com/v1/media/search?client_id={client_id}&lat={lat}&lng={lng}&distance={dst}';
  host = host.replace('{lat}', req.params.lat);
  host = host.replace('{lng}', req.params.lng);
  host = host.replace('{dst}', req.params.dst);
  host = host.replace('{client_id}', config.api.client_id);
  
  var request = require('request');
  request({
    url: host,
    json: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      res.send(body);
    }
    else {
      console.log('danger danger', response.statusCode);
    }
  });
}
catch (e) {
  console.log(e);
  res.end('error');
}
finally {
  //console.log('well...');
}
};
