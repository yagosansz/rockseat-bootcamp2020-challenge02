import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipientExists = await Recipient.findOne({
      where: { email: req.body.email },
    });

    if (recipientExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async edit(req, res) {
    const { email } = req.body;

    let recipient = await Recipient.findByPk(req.recipientId);

    if (email && email !== recipient.email) {
      const recipientExists = await Recipient.findOne({ where: { email } });

      if (recipientExists) {
        return res.status(400).json({ error: 'Recipient already exists' });
      }
    }

    recipient = await recipient.update(req.body);

    return res.json(recipient);
  }
}

export default new RecipientController();
