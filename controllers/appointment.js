const error_types   = require('./error_types');
const Apmnt         = require('../Models/appointment');

let controller = {
    create: (req, res, next) => {
        if (req.body.tag == undefined){
            throw new error_types.InfoError('Tag is required');
        }else{
            let document = new Apmnt({
                user_id: req.user.sub,
                tag:     req.body.tag,
                place:   req.body.place,
                topic:   req.body.topic,
                time:    req.body.time
            }); 
            document.save().then(data => res.json({data: data})).catch(err => next(err));
        }
    },
    search: (req, res, next) => {
        Apmnt.find({user_id: req.user.sub, 
                    tag: {$regex: req.param('tag'), $options: 'i'},
                    place: {$regex: req.param('place'), $options: 'i'},
                    topic: {$regex: req.param('topic'), $options: 'i'}})
            .sort({created_at: 1, status: -1})
            .then(data=>res.json(data));
    },
    getAll: (req, res, next) => {
        Apmnt.find({user_id:req.user.sub})
            .sort({date: -1, status: 1})
            .then(data=>res.json(data));
    },
    get: (req, res, next) => {
        Apmnt.findOne({_id:req.param('id')})
            .then(data=>{res.json(data)})
            .catch(err=>{res.json(err)}) 
    },
    update: (req, res, next) => {
        Apmnt.findOne({_id:req.param('id')})
            .then(data=>{
                data.tag      = req.body.tag      || data.tag;
                data.topic    = req.body.topic    || data.topic;
                data.place    = req.body.place    || data.place;
                data.status   = req.body.status   || data.status;
                data.time     = req.body.time     || data.time;
                data.save();
                res.json(data)
            })
            .catch(err=>{res.json(err)}) 
    },
    delete: (req, res, next) => {
        Apmnt.deleteOne({_id:req.param('id')})
             .then(data=>{
                res.json(data)
             })
             .catch(err=>{res.json(err)}) 
    }
}

module.exports = controller;