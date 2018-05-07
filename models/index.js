const mongoose = require('mongoose');
const Promise = require('bluebird');
const pagedFind = require('./plugins/pagedFind');

// Default Promise Library
mongoose.Promise = Promise;

// Global Plugins
mongoose.plugin(pagedFind);

mongoose.connect('mongodb://localhost:27017/recipeCalculator')
  .then(() => console.log('mongoose connected'))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

const models = [
  'Location',
  'Meal',
  'Menu',
  'Product',
  'Purchase',
  'User',
];

module.exports.init = function init() {
  models.forEach(name => {
    mongoose.model(name, require(`./${name}`));
  });
};