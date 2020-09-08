const Booking = require('../models/Booking');

module.exports = {
  async create(payload) {
    return await Booking.create(payload);
  },

  async findOne(payload) {
    return await Booking.findOne(payload).populate('spot');
  },

  async find(payload) {
    return await Booking.find(payload);
  },

  async update(id, payload) {
    return await Booking.findByIdAndUpdate(id, payload, { new: true });
  },
};
