const BookingRepository = require('../repositories/BookingRepository');

module.exports = {
  async store(req, res) {
    const { booking_id } = req.params;

    const booking = await BookingRepository.findOne({ _id: booking_id });

    booking.approved = true;

    await BookingRepository.update(booking._id, booking);

    const bookingUserSocket = req.connectedUsers[booking.user];

    if (bookingUserSocket) {
      req.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return res.json(booking);
  },
};
