const SpotRepository = require('../repositories/SpotRepository');
const UserRepository = require('../repositories/UserRepository');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await SpotRepository.find({ techs: tech });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await UserRepository.findById({ _id: user_id });

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const spot = await SpotRepository.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map((tech) => tech.trim()),
      price,
    });

    return res.json(spot);
  },
};
