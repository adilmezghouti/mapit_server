var mongoose = require('mongoose');
var Location = require('../../models/location');

module.exports.addLocation = function(req, res) {
  console.log('Location', req.body);
  var location = new Location(req.body.location);
  location.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({
      location: location
    });
  });
};

module.exports.getAllLocations = function(req, res) {
  Location.find(function(err, locations) {
    console.log('locations', locations);
    if (err) {
      res.send(err);
    }
    res.json({
      locations: locations
    });
  });
};

module.exports.getSingleLocation = function(req, res, id) {
  Location.findById(id, function(err, location) {
    if (err) {
      res.send(err);
    }
    res.json({
      location: location
    });
  });
};

module.exports.updateLocation = function(req, res, id) {
  Location.findByIdAndUpdate(id, {
    $set: req.body.location
  }, function(err, location) {
    if (err) {
      res.send(err);
    }
    res.json({
      location: location
    });
  });
};

module.exports.deleteLocation = function(req, res, id) {
  Location.findByIdAndRemove(id, function(err) {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200);
  });
};
