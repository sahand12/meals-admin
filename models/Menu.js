const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const menuSchemaOptions = {
  typeKey: '$type',
};
const menuSchema = new mongoose.Schema({
  from: Date,
  to: Date,
  sections: [{
    name: String,
    nameFa: String,
    meals: [{
      $type: ObjectId,
      ref: 'Ingredient',
    }],
  }],
}, menuSchemaOptions);

module.exports = menuSchema;