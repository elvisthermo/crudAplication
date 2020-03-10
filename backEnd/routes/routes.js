const {Router} = require('express');
const DevController = require('../controllers/DevelopersControllers');
//const SeachController = require('../controllers/SeachController');


const routes = Router();

routes.post('/developers',DevController.create );


routes.get('/developers',DevController.list);

routes.get('/developers/:id',DevController.listbyId);

/**
 * @description list desnevolvedores
 * @param {string} id - email de um desenvolvedor especifico para busca
 *  */

routes.put('/developers/',DevController.update );

routes.delete('/developers/:id',DevController.delete );


module.exports = routes;

