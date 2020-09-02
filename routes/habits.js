var express 		= require('express');
var router 			= express.Router();
var auth 			= require('../middleware/auth');
var HabitController 	= require('../controllers/habit');

router.post('/', auth.ensureAuthenticated, HabitController.create);
router.get('/all', auth.ensureAuthenticated, HabitController.getAll);
router.get('/', auth.ensureAuthenticated, HabitController.get);
router.put('/', auth.ensureAuthenticated, HabitController.update);
router.delete('/', auth.ensureAuthenticated, HabitController.delete);


module.exports = router;