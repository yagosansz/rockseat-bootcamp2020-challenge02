import User from '../models/User';

class UserController {
  async show(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { id, name, email, admin } = userExists;

    return res.json({
      id,
      name,
      email,
      admin,
    });
  }
}

export default new UserController();
