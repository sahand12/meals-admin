const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const mealSchemaOptions = {
  typeKey: '$type',
};
const mealSchema = new mongoose.Schema({
  name: String,
  nameFa: String,
  ingredients: [{
    id: {
      $type: ObjectId,
      ref: 'Ingredient',
    },
    meta: {
      uom: String,
      amount: Number,
      precision: Number,
    }
  }],
  recipe: {
    $type: String,
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
  }
}, mealSchemaOptions);

module.exports = mealSchema;