const Task = require('../Models/task');
const error_types = require('./error_types');

let controller = {
    create: (req, res, next) => {
        if (req.body.tag == undefined){
            throw new error_types.InfoError('Tag is required');
        }else{
            let document = new Task({
                user_id: req.user.sub,
                tag: req.body.tag,
                priority: req.body.priority || '3'
            }); 
            document.save().then(data => res.json({data: data})).catch(err => next(err));
        }
    },
    getAll: (req, res, next) => {
        Task.find({user_id:req.user.sub})
            .sort({date: -1, status: -1})
            .then(data=>res.json(data));
    },
    get: (req, res, next) => {
        Task.findOne({_id:req.param('id')})
            .then(data=>{res.json(data)})
            .catch(err=>{res.json(err)}) 
    },
    update: (req, res, next) => {
        Task.findOne({_id:req.param('id')})
            .then(data=>{
                data.tag      = req.body.tag      || data.tag;
                data.status   = req.body.status   || data.status;
                data.priority = req.body.priority || data.priority;
                data.save();
                res.json(data)
            })
            .catch(err=>{res.json(err)}) 
    },
    delete: (req, res, next) => {
        Task.deleteOne({_id:req.param('id')})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{res.json(err)}) 
    }
}

module.exports = controller;