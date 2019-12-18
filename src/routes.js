import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json('TESTE-API');
});

export default routes;
