var request = require('request');
var config = require('./ingr.config.json');

module.exports = {
  getPictures: function(lat, lng, dst, callback) {
    var host = 'https://api.instagram.com/v1/media/search?client_id={client_id}&lat={lat}&lng={lng}&distance={dst}';
    host = host.replace('{client_id}', config.api.client_id);
    host = host.replace('{lat}', lat);
    host = host.replace('{lng}', lng);
    host = host.replace('{dst}', dst);
    request({
        url: host,
        json: true
      }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          callback(body);
        }
        else {
          console.log(error);
          console.log('Get pictures from instagram failed, here is why:', response.statusCode);
          callback(response.statusCode);
        }
      });
  }
};