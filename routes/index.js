const {Router} = require('express');
const userCtrl = require('../controllers/userCtrl');
const productCtrl = require('../controllers/productCtrl');

const router = Router();

router.route('/users')
  .get(userCtrl.getAll)
  .post(userCtrl.create);

router.route('/products')
  .get(productCtrl.getAll)
  .post(productCtrl.create);

module.exports = router;