const {Router} = require('express');
const DevController = require('../controllers/DevelopersControllers');
//const SeachController = require('../controllers/SeachController');


const routes = Router();

routes.post('/developers',DevController.create );


routes.get('/developers',DevController.list);


/**
 * @description list desnevolvedores
 * @param {string} id - email de um desenvolvedor especifico para busca
 *  */
routes.get('/developers/:id',DevController.listbyId);

routes.put('/developers',DevController.update );

routes.delete('/developers',DevController.delete );

//routes.get('/search',SeachController.index );

module.exports = routes;

