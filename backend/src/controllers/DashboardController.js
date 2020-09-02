const SpotRepository = require('../repositories/SpotRepository');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await SpotRepository.find({ user: user_id });

    return res.json(spots);
  },
};
