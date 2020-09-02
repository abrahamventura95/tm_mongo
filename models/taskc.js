var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskCSchema = Schema({
    user_id: {type: String, required: true},
    task_id: {type: String, required: true},
    tag: {type: String, required: true},
    timespent: {type: Number, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('taskc', TaskCSchema, "taskcs");