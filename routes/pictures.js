var request = require('request');
var instagramClient = require('../instagramClient');

module.exports = {

  byLocation: function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');

    try {
      instagramClient.getPictures(req.params.lat, req.params.lng, req.params.dst, req.params.accesstoken, function(data) {
        res.send(data);
      });      
    }
    catch (e) {
      console.log(e);
      res.end('error');
    }
  }

};
