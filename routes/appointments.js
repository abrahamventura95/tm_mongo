var express 			= require('express');
var router 				= express.Router();
var auth 				= require('../middleware/auth');
var ApmntController 	= require('../controllers/appointment');

router.post('/', auth.ensureAuthenticated, ApmntController.create);
router.get('/all', auth.ensureAuthenticated, ApmntController.getAll);
router.get('/search', auth.ensureAuthenticated, ApmntController.search);
router.get('/', auth.ensureAuthenticated, ApmntController.get);
router.put('/', auth.ensureAuthenticated, ApmntController.update);
router.delete('/', auth.ensureAuthenticated, ApmntController.delete);


module.exports = router;