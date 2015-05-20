var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  longitude: String,
  latitude: String,
  type: String,
  name: String,
  address: String,
  city: String,
  country: String
});

module.exports = mongoose.model('Company', CompanySchema);
