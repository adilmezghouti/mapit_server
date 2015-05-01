var express = require('express');
var router = express.Router();

var locations = require('./api/location');

/* Locations routes */
router.route('/locations')
    .post(function(req,res) { console.log('Location', req.body);locations.addLocation(req,res) })
    .get(function(req,res) { locations.getAllLocations(req,res) });

/* Single location routes */
router.route('/locations/:location_id')
    .get(function(req, res) { locations.getSingleLocation(req, res, req.params.location_id) })
    .put(function(req, res) { locations.updateLocation(req, res, req.params.location_id) })
    .delete(function(req, res) { locations.deleteLocation(req, res, req.params.location_id) });

module.exports = router;
