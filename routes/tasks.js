var express 		= require('express');
var router 			= express.Router();
var auth 			= require('../middleware/auth');
var TaskController 	= require('../controllers/task');

router.post('/', auth.ensureAuthenticated, TaskController.create);
router.get('/all', auth.ensureAuthenticated, TaskController.getAll);
router.get('/search', auth.ensureAuthenticated, TaskController.search);
router.get('/', auth.ensureAuthenticated, TaskController.get);
router.put('/', auth.ensureAuthenticated, TaskController.update);
router.delete('/', auth.ensureAuthenticated, TaskController.delete);
router.post('/sub', auth.ensureAuthenticated, TaskController.createSub);
router.put('/sub', auth.ensureAuthenticated, TaskController.updateSub);
router.delete('/sub', auth.ensureAuthenticated, TaskController.deleteSub);

module.exports = router;