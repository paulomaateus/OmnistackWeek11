const express = require('express'); // import do express para extrairmos o modulo de rotas

const routes = express.Router(); // modulo de rotas do express

const ongController = require('./controllers/ongController'); // import da classe que contem os metodos de manipulacao de dados de ongs

const incidentsController = require('./controllers/incidentController'); // import da classe que contem os metodos de manipulacao de dados de incidentes

const profileController = require('./controllers/profileController');

const sessionController = require('./controllers/sessionController');
/**
 * Metodo de rota do tipo get na rota "/ongs" para listagem de todas as ongs salvas no banco de dados 
 */
routes.get('/ongs', ongController.list);

/**
 * Metodo de rota do tipo Post na rota "/ongs" para salvar uma nova ong no banco de dados
 */
routes.post('/ongs', ongController.create);



/**
 * Metodo de rota do tipo Post na rota "/incidents" para uma ong conseguir cadastrar um caso
 */
routes.post('/incidents', incidentsController.create);

/**
 * Metodo de rota de tipo Get na rota "/incidents" que lista todos os incidents cadastrados por todas as ongs 
 */
routes.get('/incidents', incidentsController.list);

routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.list);

routes.post('/sessions', sessionController.create);

module.exports = routes; 