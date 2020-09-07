const UserRepository = require('../repositories/UserRepository');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await UserRepository.findOne({ email });

    if (!user) {
      user = await UserRepository.create({ email });
    }

    console.log('==================');
    console.log(user);
    console.log('==================');

    return res.json(user);
  },
};
