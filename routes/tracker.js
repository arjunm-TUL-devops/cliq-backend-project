const express = require('express')
const router = express.Router();
const Project = require('../models/Project')

router.get('/',(req,res)=>{
    res.send("We are on tracker!")
})

router.post('/', async (req,res)=>{
    const project = new Project({
        name: req.body.name,
        work: req.body.work
    })

    project.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err})
    })
})

module.exports = router;