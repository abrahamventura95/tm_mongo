var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sTaskSchema = Schema({
    user_id: {type: String, required: true},
    task_id: {type: String, required: true},
    tag: {type: String, required: true},
    status: {type: Boolean, default: 1},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('stask', sTaskSchema, "stasks");