var express 		= require('express');
var router 			= express.Router();
var auth 			= require('../middleware/auth');
var TaskController 	= require('../controllers/task');

router.post('/', auth.ensureAuthenticated, TaskController.create);
router.get('/all', auth.ensureAuthenticated, TaskController.getAll);
router.get('/', auth.ensureAuthenticated, TaskController.get);
router.put('/', auth.ensureAuthenticated, TaskController.update);
router.delete('/', auth.ensureAuthenticated, TaskController.delete);


module.exports = router;