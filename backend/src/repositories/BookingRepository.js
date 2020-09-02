const Booking = require('../models/Booking');

module.exports = {
  async create(payload) {
    return await Booking.create(payload);
  },

  async findOne(payload) {
    return await Booking.findOne(payload);
  },

  async find(payload) {
    return await Booking.find(payload);
  },
};
