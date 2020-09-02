const UserRepository = require('../repositories/UserRepository');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await UserRepository.findOne({ email });

    if (!user) {
      user = await UserRepository.create({ email });
    }

    return res.json(user);
  },
};
