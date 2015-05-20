var mongoose = require('mongoose');
var Company = require('../../models/company');

module.exports.addCompany = function(req, res) {
  var company = new Company(req.body.company);
  company.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({
      company: company
    });
  });
};

module.exports.getAllCompanies = function(req, res) {
  Company.find(function(err, companies) {
    if (err) {
      res.json({'error':err});
    }
    res.json({
      companies: companies
    });
  });
};

module.exports.getSingleCompany = function(req, res, id) {
  Company.findById(id, function(err, company) {
    if (err) {
      res.send(err);
    }
    res.json({
      company: company
    });
  });
};

module.exports.updateCompany = function(req, res, id) {
  Company.findByIdAndUpdate(id, {
    $set: req.body.company
  }, function(err, company) {
    if (err) {
      res.send(err);
    }
    res.json({
      company: company
    });
  });
};

module.exports.deleteCompany = function(req, res, id) {
  Company.findByIdAndRemove(id, function(err) {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200);
  });
};
