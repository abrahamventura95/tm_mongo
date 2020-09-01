var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = Schema({
    user_id: {type: String, required: true},
    tag: {type: String, required: true},
    priority: ['1','2', '3', '4', '5'],
    status: {type: Boolean, default: 1},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('task', TaskSchema, "tasks");