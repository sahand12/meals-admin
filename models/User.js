const mongoose = require('mongoose');

const userSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  password: String,
  email: String,
  mobile: String,
  isAdmin: Boolean,
  deleted: {
    $type: Boolean,
    default: false,
  }
}, userSchemaOptions);

module.exports = userSchema;