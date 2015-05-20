var mongoose = require('mongoose');
var Flyer = require('../../models/flyer');

module.exports.getSingleFlyer = function(req, res, user_id) {
  console.log('flyers-2...', user_id);

  Flyer.find({user_id:1}, function(err, flyers) {
    console.log('results', err, flyers);
    if(err) {
      res.json({'error':err});
    }

    res.json({'flyers':flyers});
  });
}
