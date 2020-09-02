var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppmntSchema = Schema({
    user_id: {type: String, required: true},
    tag: {type: String, required: true},
    place: {type: String, required: false},
    topic: {type: String, required: false},
    status: {type: Boolean, default: 1},
    time: Date,
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('appointment', AppmntSchema, "appointments");