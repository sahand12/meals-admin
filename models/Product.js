const mongoose = require('mongoose');

const productSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};
const productSchema = new mongoose.Schema({
  name: String,
  nameFa: String,
  type: {
    $type: String,
    enum: ['processed', 'natural'],
  },
  nutrition: {
    meta: {
      uom: {
        $type: String,
      },
      amount: Number,
      precision: Number,
    },
    calories: Number,
    fat: {
      total: Number,
      saturated: Number,
      trans: Number,
    },
    other: {
      cholesterol: Number,
      sodium: Number,
      potassium: Number,
      calcium: Number,
      iron: Number,
      magnesium: Number,
    },
    carbs: {
      total: Number,
      fiber: Number,
      sugars: Number,
    },
    protein: Number,
    vitamins: {
      a: Number,
      b6: Number,
      b12: Number,
      c: Number,
      d: Number,
    }
  },
  manufacturer: {
    $type: String,
  },
}, productSchemaOptions);

module.exports = productSchema;