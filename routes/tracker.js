const { Router } = require('express');
const express = require('express')
const router = express.Router();
const Project = require('../models/Project')


//GET METHOD TO GET ALL TRACKERS
router.get('/',async (req,res)=>{
    try{
        const projects = await Project.find()
        res.json(projects)
    }catch(err){
        res.json({message: err})
    }
})

//POST METHOD TO ADD NEW TRACKER
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

//GET METHOD TO FIND A PARTICULAR TRACKER
router.get('/:id', async (req,res) => {
    try {
        const project = await Project.findById(req.params.id)
        res.json(project)
    } catch (err) {
        res.json({message: err})
    }
})

//PATCH METHOD TO UPDATE THE STATUS OF TRACKER
router.patch('/:id', async (req,res) => {
    try {
        const project = await Project.updateOne(
            {_id: req.params.id},
            {$set: {status: req.body.status}}
            );
        res.json(project)
    } catch (err) {
        res.json({message: err})
    }
})

//DELETE METHOD TO DELETE A TRACKER
router.delete('/:id', async (req,res) => {
    try {
        const project = await Project.remove({_id: req.params.id})
        res.json(project)
    } catch (err) {
        res.json({message: err})
    }
})


module.exports = router;