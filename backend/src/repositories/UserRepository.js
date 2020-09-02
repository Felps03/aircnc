const User = require('../models/User');

module.exports = {
  async create(payload) {
    return await User.create(payload);
  },

  async findOne(payload) {
    return await User.findOne(payload);
  },

  async findById({ _id }) {
    return await User.findById(_id);
  },
};
