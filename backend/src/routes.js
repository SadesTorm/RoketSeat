const express = require('express');

const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');


const connection = require('./database/connection');

const routes = express.Router();
//criandp minha 1º rota
// primeira barra significa Rota Padrão
// () significa que vai ser passado uma função como parametro onde primeiro parametro e uma requisição 
// e a segunda é a resposta 


//listando dados 

routes.get('/ongs', ongController.index) ;
routes.get('/incidents', incidentsController.index);
routes.get('/profile', profileController.index);



routes.post('/ongs', ongController.create);
routes.post('/incidents',incidentsController.create);
routes.post('/session', sessionController.create);

routes.delete('/incidents/:id',incidentsController.delete);

module.exports = routes; 