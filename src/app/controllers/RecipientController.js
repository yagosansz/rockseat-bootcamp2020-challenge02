import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipientExists = await Recipient.findOne({
      where: { email: req.body.email },
    });

    if (recipientExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // const recipient = await Recipient.create(req.body);
    const recipient = req.body;

    return res.json(recipient);
  }

  async edit(req, res) {
    return res.json({ message: 'Route for editing recipients' });
  }
}

export default new RecipientController();
