var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  longitude: String,
  latitude: String,
  type: String,
  name: String,
  address: String,
  city: String,
  country: String
});

module.exports = mongoose.model('Location', LocationSchema);
