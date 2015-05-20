var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlyerSchema = new Schema({
  user_id: String,
  company: {type:Schema.ObjectId,ref:'CompanySchema'}
});

module.exports = mongoose.model('Flyer', FlyerSchema);
