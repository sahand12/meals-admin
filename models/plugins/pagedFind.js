const Promise = require('bluebird');

module.exports = function pagedFind(schema) {
  schema.statics.pagedFind = function ({
    filters = {},
    keys = '',
    limit = 20,
    page = 1,
    sort = {},
  }) {
    const thisSchema = this;
    const output = {
      data: null,
      pages: {
        current: page,
        prev: 0,
        hasPrev: false,
        next: 0,
        hasNext: false,
        total: 0,
      },
      items: {
        begin: ((page - 1) * limit) + 1,
        end: page * limit,
        total: 0,
      },
    };

    const countResults = async function countResult() {
      return thisSchema.count(filters).exec();
    };

    const getResults = function getResults() {
      return thisSchema.find(filters, keys)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort(sort)
        .exec();
    };

    Promise.all([countResults(), getResults()])
      .then(([count, docs]) => {
        output.items.total = count;
        output.data = docs;

        // final paging math
        output.pages.total = Math.ceil(output.items.total / limit);
        output.pages.next = ((output.pages.current + 1) > output.pages.total ? 0 : output.pages.current + 1);
        output.pages.hasNext = (output.pages.next !== 0);
        output.pages.prev = output.pages.current > 1 ? output.pages.current - 1 : 0;
        output.pages.hasPrev = output.pages.prev !== 0;
        if (output.items.end > output.items.total) {
          output.items.end = output.items.total;
        }

        return output;
      })
      .catch(err => {
        throw err;
      });

  }
};