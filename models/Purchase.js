const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const purchaseSchemaOptions = {
  typeKey: '$type',
};
const purchaseSchema = new mongoose.Schema({
  date: {
    $type: Date,
    default: Date.now,
  },
  value: {
    amount: Number,
    precision: Number,
    currency: {
      $type: String,
      enum: ['IRR', 'IRT', 'USD', 'EUR']
    },
  },
  userId: {
    $type: ObjectId,
    ref: 'User',
  },
  productId: {
    $type: ObjectId,
    ref: 'Product',
  },
  locationId: {
    $type: ObjectId,
    ref: 'Location',
  },
  measurements: {
    type: {
      $type: String,
      enum: ['quantity', 'weight', 'volume'],
    },
    weight: {
      uom: {
        $type: String,
        enum: ['g', 'kg']
      },
      amount: Number,
      precision: Number,
    },
    quantity: Number,
    volume: {},
  },
}, purchaseSchemaOptions);

module.exports = purchaseSchema;