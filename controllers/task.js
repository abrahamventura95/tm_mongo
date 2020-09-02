const Task = require('../Models/task');
const STask = require('../Models/stask');
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
    search: (req, res, next) => {
        Task.find({user_id: req.user.sub, tag: {$regex: req.param('tag'), $options: 'i'}})
            .sort({created_at: 1, status: -1})
            .then(data=>res.json(data));
    },
    getAll: (req, res, next) => {
        Task.find({user_id:req.user.sub})
            .sort({date: -1, status: -1})
            .then(data=>res.json(data));
    },
    get: (req, res, next) => {
        STask.find({task_id:req.param('id')})
             .sort({status:  1})
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
    },
    createSub: (req, res, next) => {
        if (req.body.tag == undefined){
            throw new error_types.InfoError('Tag is required');
        }else{
            let document = new STask({
                user_id: req.user.sub,
                task_id: req.body.task,
                tag: req.body.tag
            }); 
            document.save().then(data => res.json({data: data})).catch(err => next(err));
        }
    },
    updateSub: (req, res, next) => {
        STask.findOne({_id:req.param('id')})
            .then(data=>{
                data.tag      = req.body.tag      || data.tag;
                data.status   = req.body.status   || data.status;
                if(data.user_id == req.user.sub){
                    data.save(); 
                }
                res.json(data)
            })
            .catch(err=>{res.json(err)}) 
    },
    deleteSub: (req, res, next) => {
        STask.deleteOne({_id:req.param('id')})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{res.json(err)}) 
    }
}

module.exports = controller;