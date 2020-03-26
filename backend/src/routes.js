const express = require('express');

const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const NgoProfileController = require('./controllers/IncidentController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.login);

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', NgoProfileController.index);

module.exports = routes;