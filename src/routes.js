import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.get('/users', UserController.show);

routes.post('/sessions', SessionController.store);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.edit);

export default routes;
