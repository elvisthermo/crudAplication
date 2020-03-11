const {Router} = require('express');
const DevController = require('../controllers/DevelopersControllers');
//const SeachController = require('../controllers/SeachController');


const routes = Router();

/**
 * @description router post '/developer' for create developer
 */
routes.post('/developers',DevController.create );

/**
 * @description router get all developer '/developers'
 */
routes.get('/developers',DevController.list);

/**
 * @description router get developer by '/developers/:id'
 */
routes.get('/developers/:id',DevController.listbyId);


/**
 * @description router update  developer '/developers/'
 */
routes.put('/developers/',DevController.update );


/**
 * @description router delete  developer by id '/developers/'
 */

routes.delete('/developers/:id',DevController.delete);


module.exports = routes;

