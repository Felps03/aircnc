const Spot = require('../models/Spot');

module.exports = {
  async create(payload) {
    return await Spot.create(payload);
  },

  async findOne(payload) {
    return await Spot.findOne(payload);
  },

  async find(payload) {
    return await Spot.find(payload);
  },
};
