var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitDaySchema = Schema({
    user_id: {type: String, required: true},
    habit_id: {type: String, required: true},
    tag: {type: String, required: true},
    day: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'everyday'],
    freq: {type: Number, default: 1},
    time: Date,
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('habitd', HabitDaySchema, "habitds");