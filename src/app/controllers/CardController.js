import Card from '../models/Card';

class CardController {
  async index(req, res) {
    const cards = await Card.findAll();

    return res.json(cards);
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

export default new CardController();
