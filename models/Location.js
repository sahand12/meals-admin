const mongoose = require('mongoose');

const locationSchemaOptions = {
  typeKey: '$type',
};
const locationSchema = new mongoose.Schema({
  name: String,
  tel: String,
  city: String,
  t: {
    fa: {
      name: String,
    }
  }
}, locationSchemaOptions);

module.exports = locationSchema;