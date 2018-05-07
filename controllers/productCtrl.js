const mongoose = require('mongoose');

const Product = mongoose.model('Product');

const productCtrl = {
  async getAll(req, res, next) {
    try {
      const products = await Product.find({}).exec();
      return res.json(products);
    }
    catch (err) {
      next(err);
    }
  },

  create(req, res, next) {
    const {name, nameFa, type, uom, amount, calories, totalFat, saturatedFat, transFat, totalCarbs, sugars, fiber, protein} = req.body;
    console.log(req.body);
    const newProduct = new Product({
      name,
      nameFa,
      type,
      nutrition: {
        meta: {
          uom,
          amount: parseInt(amount, 10),
        },
        calories: parseInt(calories, 10),
        fat: {
          total: parseFloat(totalFat),
          saturated: parseFloat(saturatedFat),
          trans: parseFloat(transFat),
        },
        carbs: {
          total: parseFloat(totalCarbs),
          fiber: parseFloat(fiber),
          sugars: parseFloat(sugars),
        },
        protein: parseFloat(protein),
        // manufacturer,
      },
    });

    return newProduct.save()
      .then(p => res.json(p))
      .catch(next);
  },

  update() {

  },

  remove() {

  }
};

module.exports = productCtrl;