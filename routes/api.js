var express = require('express');
var router = express.Router();

var companies = require('./api/company');
var flyers = require('./api/flyer');

/* Companies routes */
router.route('/companies')
  .post(function(req, res) {
    console.log('Company', req.body);
    companies.addCompany(req, res)
  })
  .get(function(req, res) {
    console.log('Company...');
    companies.getAllCompanies(req, res)
  });

/* Single company routes */
router.route('/companies/:company_id')
  .get(function(req, res) {
    companies.getSingleCompany(req, res, req.params.company_id)
  })
  .put(function(req, res) {
    companies.updateCompany(req, res, req.params.company_id)
  })
  .delete(function(req, res) {
    companies.deleteCompany(req, res, req.params.company_id)
  });

router.route('/flyers')
  .get(function(req, res) {
    flyers.getSingleFlyer(req, res, req.param('user_id'));
  });
module.exports = router;
