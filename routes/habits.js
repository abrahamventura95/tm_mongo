var express 		= require('express');
var router 			= express.Router();
var auth 			= require('../middleware/auth');
var HabitController 	= require('../controllers/habit');

router.post('/', auth.ensureAuthenticated, HabitController.create);
router.get('/all', auth.ensureAuthenticated, HabitController.getAll);
router.get('/search', auth.ensureAuthenticated, HabitController.search);
router.get('/', auth.ensureAuthenticated, HabitController.get);
router.put('/', auth.ensureAuthenticated, HabitController.update);
router.delete('/', auth.ensureAuthenticated, HabitController.delete);
router.post('/day', auth.ensureAuthenticated, HabitController.createDay);
router.put('/day', auth.ensureAuthenticated, HabitController.updateDay);
router.delete('/day', auth.ensureAuthenticated, HabitController.deleteDay);

module.exports = router;