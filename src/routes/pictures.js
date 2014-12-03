var config = require('../ingr.config.json');
var instagramClient = require('../instagramClient');

module.exports = {
  byLocation: function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');

    var host = 'https://api.instagram.com/v1/media/search?client_id={client_id}&lat={lat}&lng={lng}&distance={dst}';

    if (req.params.accesstoken) {
      if (req.params.accesstoken !== '-'){
        host += "&access_token=" + req.params.accesstoken;
      }
    }

    host = host.replace('{client_id}', config.api.client_id);
    host = host.replace('{lat}', req.params.lat);
    host = host.replace('{lng}', req.params.lng);
    host = host.replace('{dst}', req.params.dst);

    try {
      instagramClient.request(host, function(data) {
        res.send(data);
      });
    }
    catch (e) {
      console.log(e);
      res.end('error');
    }
  },
  byId: function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');

    var host = 'https://api.instagram.com/v1/media/{id}?client_id={client_id}';

    if (req.params.accesstoken) {
      if (req.params.accesstoken !== '-'){
        host += "&access_token=" + req.params.accesstoken;
      }
    }

    host = host.replace('{client_id}', config.api.client_id);
    host = host.replace('{id}', req.params.id);
    
    try {
      instagramClient.request(host, function(data) {
        res.send(data);
      });
    }
    catch (e) {
      console.log(e);
      res.end('error');
    }
  }
};
