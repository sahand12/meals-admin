const mongoose = require('mongoose');
const User = mongoose.model('User');

const MAX_COUNT = 50;

const userCtrl = {
  async getAll(req, res, next) {
    let page = parseInt(req.query.page, 10) || 1;
    let count = parseInt(req.query.count, 10) || 20;
    let newCount = parseInt(req.query.newCount, 10);
    let limit = Math.min(MAX_COUNT, count);

    // If newCount is present reset the page and start from the first page
    if (newCount != null && !Number.isNaN(newCount)) {
      page = 1;
      limit = Math.min(MAX_COUNT, newCount);
    }

    try {
      // const users = await User.pagedFind({limit, page});
      const users = await User.find({}).exec();
      console.log(users);
      return res.json(users);
    }
    catch (err) {
      return next(err);
    }
  },

  create(req, res, next) {
    const {fname, lname, email, password, mobile} = req.body;
    const newUser = new User({fname, lname, password, mobile, email});
    return newUser.save()
      .then(result => res.json(result));
  }
};

module.exports = userCtrl;