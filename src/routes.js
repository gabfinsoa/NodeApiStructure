import { Router } from 'express';

import CardController from './app/controllers/CardController';

const routes = Router();

routes.get('/', (req, res) => res.json('TESTE-API'));

routes.get('/cards', CardController.index);

export default routes;
