const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const userSchema = mongoose.Schema({
   name: String,
   email: String,
   phone: String,
   location: String,
   reg:String,
});
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
