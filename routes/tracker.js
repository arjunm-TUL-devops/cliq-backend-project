const express = require('express')
const router = express.Router();
const Project = require('../models/Project')

router.get('/',async (req,res)=>{
    try{
        const projects = await Project.find()
        res.json(projects)
    }catch(err){
        res.json({message: err})
    }
})

router.post('/', async (req,res)=>{
    const project = new Project({
        name: req.body.name,
        work: req.body.work
    })

    try{
        const savedProject = await project.save()
        res.json(savedProject)
    }catch(err){
        res.json({message: err})
    }

})

module.exports = router;