const error_types   = require('./error_types');
const Habit         = require('../Models/habit');

let controller = {
    create: (req, res, next) => {
        if (req.body.tag == undefined){
            throw new error_types.InfoError('Tag is required');
        }else{
            let document = new Habit({
                user_id: req.user.sub,
                tag:     req.body.tag,
                alarm:   req.body.alarm || 0
            }); 
            document.save().then(data => res.json({data: data})).catch(err => next(err));
        }
    },
    getAll: (req, res, next) => {
        Habit.find({user_id:req.user.sub})
            .sort({created_at: 1})
            .then(data=>res.json(data));
    },
    get: (req, res, next) => {
        Habit.findOne({_id:req.param('id')})
            .then(data=>{res.json(data)})
            .catch(err=>{res.json(err)}) 
    },
    update: (req, res, next) => {
        Habit.findOne({_id:req.param('id')})
            .then(data=>{
                data.tag      = req.body.tag      || data.tag;
                data.status   = req.body.status   || data.status;
                data.alarm    = req.body.alarm    || data.alarm;
                data.save();
                res.json(data)
            })
            .catch(err=>{res.json(err)}) 
    },
    delete: (req, res, next) => {
        Habit.deleteOne({_id:req.param('id')})
             .then(data=>{
                res.json(data)
             })
             .catch(err=>{res.json(err)}) 
    }
}

module.exports = controller;