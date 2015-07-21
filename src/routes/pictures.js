var config = require('../ingr.config.json');
var instagramClient = require('../instagramClient');

module.exports = {
  byLocation: function(req, res, next) {

    if (!req.query) {
      res.end('queryParametersMissing');
      return;
    }

    var minTs, maxTs, lat, lng, dst, accessToken;

    minTs = req.query.min_ts;
    maxTs = req.query.max_ts;
    lat = req.query.lat;
    lng = req.query.lng;
    dst = req.query.dst;
    accessToken = req.query.access_token;

    res.setHeader('Content-Type', 'application/json');

    var host = 'https://api.instagram.com/v1/media/search?client_id={client_id}&lat={lat}&lng={lng}&distance={dst}';

    if (accessToken) {
      if (accessToken !== '-'){
        host += "&access_token=" + accessToken;
      }
    }

    if (minTs && maxTs) {
      host += "&min_timestamp=" + minTs;
      host += "&max_timestamp=" + maxTs;
    }

    host = host.replace('{client_id}', config.api.client_id);
    host = host.replace('{lat}', lat);
    host = host.replace('{lng}', lng);
    host = host.replace('{dst}', dst);

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
