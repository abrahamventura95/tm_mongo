var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitSchema = Schema({
    user_id: {type: String, required: true},
    tag: {type: String, required: true},
    status: {type: Boolean, default: 1},
    alarm: {type: Boolean, default: 0},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('habit', HabitSchema, "habits");